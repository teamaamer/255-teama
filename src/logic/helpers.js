export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, '-')         // Replace spaces/underscores with -
      .replace(/[^\w\-]+/g, '')        // Remove all non-word chars
      .replace(/\-\-+/g, '-');         // Replace multiple - with single -
  }