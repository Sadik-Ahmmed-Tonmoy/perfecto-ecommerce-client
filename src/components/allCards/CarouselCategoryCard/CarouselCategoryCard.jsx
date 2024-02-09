import "./CarouselCategoryCard.scss";
import backgroundImg from '../../../assets/CarouselCategoryCard/background.webp'
import img from "../../../assets/card-image/CarouselCategoryCardProduct.webp";
import { twMerge } from "tailwind-merge";
import ImageURL from "../../ImageURL/ImageURL";

const CarouselCategoryCard = ({className}) => {
  return (
    <div className={twMerge("carousel-category-card hover:cursor-pointer", className)}>
      <div className="card-image" style={{ backgroundImage: `url("${backgroundImg}")` }}>
        {/* <img className="img" src={img} alt="" /> */}
        <ImageURL className={"img object-cover"} image={img} />
      </div>
      <p>Lipstick</p>
    </div>
  );
};

export default CarouselCategoryCard;
