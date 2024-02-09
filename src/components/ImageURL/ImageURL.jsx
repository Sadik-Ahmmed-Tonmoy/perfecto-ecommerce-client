/* eslint-disable no-undef */
import { twMerge } from "tailwind-merge";

const ImageURL = ({ style, image, className }) => {
  return (
    <>
      {image && (
        <img
          className={twMerge("", className)}
          src={`${image}`}
          alt="image"
          style={style}
        />
      )}
    </>
  );
};

export default ImageURL;
