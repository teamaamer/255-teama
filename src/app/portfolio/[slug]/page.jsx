import fs from "fs";
import path from "path";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { clientsData } from "@/data/data";

const ClientPortfolioPage = async ({ params }) => {
  const { slug } = await params;

  const clientData = clientsData.filter((item) => item.slug === slug)[0];

  const folderPath = path.join(process.cwd(), `public/portfolio/${slug}`);
  if (!fs.existsSync(folderPath)) {
    throw new Error(`Folder not found: ${folderPath}`);
  }
  const files = fs.readdirSync(folderPath);
  const images = files
    .filter((file) => /\.(webp|png|jpe?g|svg)$/i.test(file))
    .map((file) => `/portfolio/${slug}/${file}`);

  return (
    <section className="flex flex-col gap-8 pt-32 bg-foreground text-primary whitespace-pre-line text-center">
      <Container className={"mb-32"}>
        {clientData && (
          <div className="flex flex-col gap-8 mb-8 py-4 text-xl">
            <h1 className="text-4xl font-bold text-start">{clientData.title}</h1>
            <p className="font-normal">{clientData.description}</p>
            <p className="font-normal">{clientData.descriptionAr}</p>
          </div>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-wrap justify-center">
          {images.map((image, index) => (
            <li key={index} className="mx-auto">
              <ClientImageCard img={image} index={index} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ClientPortfolioPage;

const ClientImageCard = ({ img, index }) => {
  return (
    <div className="duration-200 max-w-[400px]">
      <Image
        src={img}
        alt="client cover image"
        width={400}
        height={400}
        className="w-full h-[400px] object-cover drop-shadow-xl rounded-xl"
        loading={index < 6 ? "eager" : "lazy"}
        quality={60}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority={index < 2}
      />
    </div>
  );
};
