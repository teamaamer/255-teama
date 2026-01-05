import ImageContent from "./ImageContent";
import PointsList from "./PointsList";

const ImageContentList = ({ image, title, description, points, flip }) => {
  return (
    <ImageContent image={image} title={title} description={description} flip={flip}>
      <PointsList points={points} />
    </ImageContent>
  );
};

export default ImageContentList;
