import fs from "fs";
import path from "path";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { servicesData } from "@/data/data";

const servicePreviewPage = async ({ params }) => {
  const { slug } = await params;

  const images = [
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
    "https://placehold.co/400x400",
  ];
  const serviceData = servicesData.filter((item) => item.slug === slug)[0];
  console.log(serviceData);

  // const folderPath = path.join(process.cwd(), `public/service/${slug}`);
  // if (!fs.existsSync(folderPath)) {
  //   throw new Error(`Folder not found: ${folderPath}`);
  // }
  // const files = fs.readdirSync(folderPath);
  // const images = files
  //   .filter((file) => /\.(png|jpe?g|svg)$/i.test(file))
  //   .map((file) => `/service/${slug}/${file}`);

  return (
    <section className="flex flex-col gap-8 pt-32 bg-foreground text-primary whitespace-pre-line text-center">
      <Container className={"mb-32"}>
        {serviceData && (
          <div className="flex flex-col gap-8 mb-8 py-6 text-xl">
            <h1 className="text-5xl font-bold text-start">{serviceData.title}</h1>
            {/* <p>{serviceData.description}</p> */}
          </div>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-wrap justify-center">
          {images.map((image, index) => (
            <li key={index} className="mx-auto">
              <ServiceImageCard img={image} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default servicePreviewPage;

const ServiceImageCard = ({ img }) => {
  return (
    <div className="duration-200 max-w-[400px]">
      <img
        src={img}
        alt="client cover image"
        // width={400}
        // height={400}
        className="w-full h-[400px] object-cover drop-shadow-xl rounded-xl"
      />
    </div>
  );
};
