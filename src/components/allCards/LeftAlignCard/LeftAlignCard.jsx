import "./LeftAlignCard.scss";
import img4 from "../../../assets/card-image/Rectangle 892 (1)-min.png";
import ImageURL from "../../ImageURL/ImageURL";
import { IoStar } from "react-icons/io5";

const LeftAlignCard = () => {
    return (
        <div className="left-align-card ">
            <div className="image relative">
                <ImageURL className={"object-cover"} image={img4} />
                <div className="absolute top-0 left-0 ">
                    <h4 className=" text-[#8513DF] text-xs font-medium bg-[#ECDDFF] px-[10px] py-1 rounded-ss-[4px] rounded-ee-md">Offer</h4>
                </div>
                <div className="absolute bottom-0 right-0 rounded-ss-[4px] px-[10px] py-1 bg-[#FFF2D9] flex gap-1 justify-center items-center text-xs font-medium">
                    <IoStar className="text-[#FFAC0A]" />
                    <h4 className="text-[#FFAC0A]">4.4</h4>
                    <h4 className="text-[#00000099]">(253)</h4>
                </div>
                {/* <img src={img4} alt="" /> */}
            </div>
            <div>
                <h5>Maybelline New York Superstay Vinyl Ink Liquid</h5>
                <p className="ps-2 mb-2">4.2ml</p>

                <div className="price pb-4">
                    <span>৳550</span>
                    <span>৳550</span>
                    <span>(-25%)</span>
                </div>
            </div>
        </div>
    );
};

export default LeftAlignCard;
