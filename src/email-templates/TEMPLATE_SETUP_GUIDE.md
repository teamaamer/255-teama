# Email Template Setup Guide for EmailJS

This guide explains how to set up the two email templates in your EmailJS account.

## Overview

You need to create **TWO** email templates in EmailJS:

1. **Client Auto-Reply** - Sent to the person who fills out the contact form
2. **Admin Notification** - Sent to you (255 Agency) when someone submits the form

---

## Template 1: Client Auto-Reply

### Setup in EmailJS Dashboard

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Name it: `client_auto_reply`

### Template Configuration

**To Email:** `{{from_email}}`  
**From Name:** `255 Agency`  
**Subject:** `Thank You for Contacting 255 Agency`  
**Reply To:** `hello@nirlaba.studio` (or your business email)

### Content

Copy the entire content from `client-auto-reply.html` and paste it into the **Content** field in EmailJS.

### Template Variables Used

- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email address
- `{{phone}}` - Client's phone number

---

## Template 2: Admin Notification

### Setup in EmailJS Dashboard

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Name it: `admin_notification`

### Template Configuration

**To Email:** `your-admin-email@255agency.com` (your business email)  
**From Name:** `255 Agency Contact Form`  
**Subject:** `🔔 New Contact Submission from {{from_name}}`  
**Reply To:** `{{from_email}}` (so you can reply directly to the client)

### Content

Copy the entire content from `admin-notification.html` and paste it into the **Content** field in EmailJS.

### Template Variables Used

- `{{from_name}}` - Client's full name
- `{{from_email}}` - Client's email address
- `{{phone}}` - Client's phone number
- `{{submission_time}}` - Timestamp (you'll need to add this in the code)

---

## Updating the Contact Form Code

You need to send **TWO** emails when the form is submitted. Update your `ContactUsSection.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      submission_time: new Date().toLocaleString(),
    };

    // Send email to admin
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      'admin_notification', // Your admin template ID
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    // Send auto-reply to client
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      'client_auto_reply', // Your client template ID
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    // Clear form and redirect
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    
    setTimeout(() => {
      router.push("/contact/thank-you");
    }, 500);
    
  } catch (error) {
    console.error("Error submitting form:", error);
    setErrors({ submit: "Failed to send message. Please try again." });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Update .env.local

Add both template IDs to your environment variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID=admin_notification
NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID=client_auto_reply
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Testing

1. Submit a test form on your website
2. Check that **TWO** emails are sent:
   - One to the client (auto-reply)
   - One to you (admin notification)
3. Verify all variables are populated correctly
4. Test the "Reply via Email" and "Call Now" buttons in the admin email

---

## Customization

### Update Contact Information

In both templates, update these placeholders with your actual information:

- Company address
- Phone number
- Email address
- Social media links
- Website URL

### Branding

Both templates use:
- **Primary Color:** `#FF4500` (Orange)
- **Secondary Color:** `#ff5722` (Light Orange)
- **Font:** Arial, sans-serif

Adjust colors in the HTML to match your exact brand colors if needed.

---

## Troubleshooting

**Problem:** Emails not sending  
**Solution:** Check that both template IDs match exactly in EmailJS dashboard and your code

**Problem:** Variables showing as {{variable_name}}  
**Solution:** Ensure variable names in code match exactly with template placeholders

**Problem:** Only one email sending  
**Solution:** Check EmailJS free tier limits (200 emails/month = 100 form submissions with 2 emails each)

---

## Support

For EmailJS-specific issues, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
