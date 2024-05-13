import { useSelector } from "react-redux";

function ImageCard(props) {
  const { image } = useSelector((state) => state.image);
  return (
    <>
      <img
        src={image.urlImg || props.img}
        alt="Фон картинки"
        width={840}
        height={520}
      />
    </>
  );
}
export { ImageCard };
