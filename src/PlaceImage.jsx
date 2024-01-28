import { useContext } from "react";
import { getImageUrl } from "./components/utils";
import ImgSizeContext from "./components/Context";
export default function PlaceImage({ place }) {
  const imgSize = useContext(ImgSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imgSize}
      height={imgSize}
    />
  );
}
