import fs from "fs";
import path from "path";
import Container from "@/components/layout/Container";
import PortfolioItemCard from "@/components/services/PortfolioItemCard";
import PDFFlipBook from "@/components/PDFFlipBook";
import { slugify } from "@/logic/helpers";

const portfolioItems = [
  "Grand Nablus Bus CO.",
  "Chicken Crush.",
  "Hulk Burger",
  "Akko Group",
  "Mono Pizza",
  "Sherlock Pizza",
  "Chikinn",
  "Ekleel Al-Ward",
  "One Piece",
  "Fareed Zamano",
  "Rexos Restaurant & Cafe",
  "AbuSair Pastries",
];

const PortfolioPage = () => {
  const folderPath = path.join(process.cwd(), "public/portfolio");
  const files = fs.readdirSync(folderPath);
  const images = files
    .filter((file) => /\.(webp|png|jpe?g|svg)$/i.test(file))
    .map((file) => `/portfolio/${file}`);

  return (
    <section className="flex flex-col gap-8 pt-32 bg-foreground text-primary">
      <Container className={"mb-32"}>
      <h1 className="text-4xl font-bold mb-12">255 Choosen Works!</h1>

        <PDFFlipBook pdfUrl="/company-profile-mobile.pdf" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-wrap justify-center">
          {portfolioItems.map((item, index) => (
            <li key={index} className="mx-auto">
              <PortfolioItemCard
                img={images[index]}
                title={item}
                link={slugify(item)}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PortfolioPage;
