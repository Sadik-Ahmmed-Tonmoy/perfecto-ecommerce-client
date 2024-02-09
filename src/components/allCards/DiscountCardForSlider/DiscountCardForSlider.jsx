/* eslint-disable react/prop-types */

import ImageURL from "../../ImageURL/ImageURL";
import "./DiscountCardForSlider.scss";
import { FaChevronRight } from "react-icons/fa6";
// import DiscountCardForSliderImage from "../../../assets/DiscountCardForSlider/DiscountCardForSlider.jpg";
import DiscountCardForSliderImage from "../../../assets/DiscountCardForSlider/DiscountCardForSlider.jpg";

const DiscountCardForSlider = ({ image, item}) => {
    return (
        <div className="discount-card-for-slider">
            <ImageURL className={""} image={DiscountCardForSliderImage} />
            {/* <img src={DiscountCardForSliderImage} alt="" /> */}
            <div className="titles">
                <div>
                    <h4 className="text-xl">Upto 35% Off</h4>
                    <p>Additional 10% off on ৳1299+</p>
                </div>
                <div className="button">
                    <FaChevronRight className="text-white"/>
                </div>
            </div>
        </div>
    );
};

export default DiscountCardForSlider;
