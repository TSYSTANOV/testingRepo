import { useContext } from "react";
import { imageContext } from "../../../Context/ImageContext";

function ImageCard(props) {
  const data = useContext(imageContext)
  console.log(data)
  return (
    <>
      <img
        src={data || props.img}
        alt="Фон картинки"
        width={840}
        height={520}
      />
    </>
  );
}
export { ImageCard };
