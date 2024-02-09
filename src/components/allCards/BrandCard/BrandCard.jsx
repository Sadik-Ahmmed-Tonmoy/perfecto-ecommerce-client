/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import "./BrandCard.scss";
import ImageURL from "../../ImageURL/ImageURL";

const BrandCard = ({ image, className }) => {
    return (
        <div className={twMerge("brand-card overflow-hidden hover:cursor-pointer", className)}>
            <div className="image overflow-hidden">
                {/* <img src={img} alt="" /> */}
                <ImageURL className={"hover:scale-[104%]  transition-all duration-[0.5s] object-cover"} image={image} />
            </div>
            <div>
                <h4>Upto 35% Off</h4>
                <p> Additional 10% off on ৳1299+</p>
            </div>
        </div>
    );
};

export default BrandCard;
