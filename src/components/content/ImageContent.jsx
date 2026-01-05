const ImageContent = ({ image, title, description, children, flip = false }) => {
  return (
    <section className={`w-full flex gap-8 ${flip ? "flex-row-reverse" : "flex-row"}`}>
      <img
        src={image}
        alt="Visual Identity Design"
        className="rounded-lg shadow-lg w-1/2 object-cover h-[400px]"
      />
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">{description}</p>
        {children}
      </div>
    </section>
  );
};

export default ImageContent;
