import StarRating from "../../StarRating/StarRating";
import "./CenterAlignCard.scss";
import centerAlignCardImg from "../../../assets/card-image/center-align-card-img.png";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline, IoCartSharp, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import ImageURL from "../../ImageURL/ImageURL";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CenterAlignCard = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewSize, setIsPreviewSize] = useState(false);
  const [addToBagAnimation, setAddToBagAnimation] = useState(false);
  const [cartShake, setCartShake] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);

  const shadeCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  ];
  useEffect(() => {
    setCartShake(true);
    if (addToBagAnimation) {
      setTimeout(() => {
        setAddToBagAnimation(false);
        setAddedToBag(true);
      }, 3000);
    }
    if (addToBagAnimation) {
      setTimeout(() => {
        setCartShake(false);
      }, 800);
    }
  }, [addToBagAnimation]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // setIsPreviewSize(false);
      }}
      className="center-align-card hover:cursor-pointer relative"
    >
      <div className="absolute top-0 left-0">
        <h4 className=" text-[#0094CF] text-xs font-medium bg-[#D4F3FF] px-[10px] py-1 rounded-ss-[4px] rounded-ee-md">
          Bestseller
        </h4>
      </div>
      <Link to={"/product-details"}>
        <div className="image hover:cursor-pointer">
          <ImageURL
            className={"w-full h-64 object-fill"}
            image={centerAlignCardImg}
          />
          {/* <img className="w-full h-64" src={centerAlignCardImg} alt="" /> */}
        </div>
      </Link>
      <Link to={"/product-details"}>
        <div className="card-body">
          <h5>Maybelline New York Superstay Vinyl Ink Liquid</h5>
          <div className="rating">
            <StarRating rating={4} totalStars={5} size={15} /> (220)
          </div>
          <div className="price">
            <span>৳550</span>
            <span>৳550</span>
            <span>(-25%)</span>
          </div>
        </div>
      </Link>
      <div className=" text-center border-t-[0.2px] ">
        {isHovered ? (
          <div className="flex items-center">
            <Button
              className=" text-sm px-5 font-medium text-primary-color"
              variant="ghost"
            >
              <FaRegHeart size={25} />
            </Button>
            <Button
              onClick={() => setIsPreviewSize(true)}
              className="py-[14px] text-sm font-medium w-full rounded-none rounded-br-sm"
              variant=""
            >
              Preview Shades
            </Button>
          </div>
        ) : (
          <p className="text-[#000000CC] py-[14px] text-center text-sm font-medium leading-5">
            12 Shades
          </p>
        )}
      </div>

      {isPreviewSize && (
        <div
          className="absolute top-0 bg-white w-full h-full rounded z-10"
          style={{ boxShadow: "0px 2px 6px 0px rgba(12, 107, 144, 0.06)" }}
        >
          <div className="p-3 flex items-center justify-between border-b-[1px]">
            <p>Select A Shade(12)</p>
            <Button onClick={() => setIsPreviewSize(false)} variant="ghost">
              <IoClose size={20} />
            </Button>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="flex justify-center h-[220px] overflow-hidden overflow-y-auto slim-scroll m-4 ">
              <div className="flex flex-wrap px-[2px] gap-2 ">
                <div className="w-7 h-7 bg-red-200 rounded hover:cursor-pointer relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center">
                    <IoMdClose size={20} className="text-white" />
                  </div>
                </div>
                <div className="w-7 h-7 bg-red-300 rounded hover:cursor-pointer relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center">
                    <IoMdCheckmark size={20} className="text-white" />
                  </div>
                </div>
                <div className="w-7 h-7 bg-red-300 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-400 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-500 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-600 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-700 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-800 rounded hover:cursor-pointer"></div>
                <div className="w-7 h-7 bg-red-900 rounded hover:cursor-pointer"></div>

                {shadeCount.map((item, index) => (
                  <div
                    className="w-7 h-7 bg-red-500 rounded hover:cursor-pointer"
                    key={index}
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-center">Red 25</h5>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-2 ">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="flex items-center text-lg font-semibold tracking-[-1.12px] leading-[42px]">
                  ৳550
                </h2>
                <span className="flex flex-wrap items-center gap-2 font-medium">
                  <h4 className="flex items-center text-sm font-semibold text-[#999] line-through">
                    ৳550
                  </h4>
                </span>
              </div>
              <div className="border-[0.1px] h-4"></div>
              <p className="whitespace-nowrap text-[#000000A6]  text-sm  leading-normal">
                <span className="text-[#02792A] font-semibold">(-25% Off)</span>
              </p>
            </div>
          </div>
          {/* button area start */}
          <div className="absolute w-full bottom-0">
            {addedToBag ? (
              <div className="bg-primary-color h-12 text-sm text-white flex items-center justify-center rounded-b-sm">
                <p>Added To Bag</p>
              </div>
            ) : (
              <>
                {addToBagAnimation ? (
                  <div className="bg-primary-color h-12 overflow-hidden">
                    <div className="add-To-Bag-Animation mt-2">
                      {cartShake ? (
                        <IoCartOutline size={30} className="text-white" />
                      ) : (
                        <IoCartSharp size={30} className="text-white" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center w-full rounded-b-sm">
                    <Link to={"/product-details"}>
                      <Button
                        className=" text-sm py-[13px] 2xl:px-[30px] rounded-none font-medium text-primary-color rounded-bl-sm"
                        variant="bordered"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() => setAddToBagAnimation(true)}
                      className=" text-sm w-full font-medium py-[14px] rounded-none rounded-br-sm"
                      variant=""
                    >
                      Add to Bag
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
          {/* button area end */}
        </div>
      )}
    </div>
  );
};

export default CenterAlignCard;
