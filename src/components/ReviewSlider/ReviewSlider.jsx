import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/productDetails/reviewImage.png";
import img2 from "../../assets/slimSliderImages/slimImage2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ImageURL from "../ImageURL/ImageURL";
import cn from "../../utils/cn";

const ReviewSlider = ({ className, dots }) => {
  // Function declarations to avoid access-before-initialization issue
  function CustomPrevArrow(props) {
    return (
      <div
        // h-16 xs:h-24 sm:h-36 md:h-48 lg:h-52
        className={cn(
          "custom-prev-arrow absolute left-2 z-10 bg-white top-[40%] xs:top-[45%] sm:top-[40%]  rounded-full p-1  md:p-3 hover:cursor-pointer",
          className
        )}
        onClick={props.onClick}
        // style={{ position: 'absolute', left: 10, zIndex: 1 }}
      >
        <FaChevronLeft className="text-[#000000A6] h-3 w-3 xs:h-4 xs:w-4" />
      </div>
    );
  }

  function CustomNextArrow(props) {
    return (
      <div
        className="custom-next-arrow absolute right-2 z-10 bg-white top-[40%] xs:top-[45%] sm:top-[40%]  rounded-full p-1 md:p-3 hover:cursor-pointer"
        onClick={props.onClick}
        // style={{ position: 'absolute',  right: 10, zIndex: 1 }}
      >
        <FaChevronRight className="text-[#000000A6] h-3 w-3 xs:h-4 xs:w-4" />
      </div>
    );
  }

  const settings = {
    dots: { dots },
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "custom-dots",
  };

  // PropTypes validation for the custom arrow components
  CustomPrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  return (
    <div className="bg-green-5">
      <Slider {...settings}>
        <div>
          <div
            className={`relative  p-5 md:p-16 bg-contain bg-center object-cover bg-no-repeat h-[210px] w-[210px] xs:h-[400px] xs:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto flex justify-center items-center `}
            style={{
              backgroundImage: `url("${img1}")`,
            }}
          >
            <div className="absolute inset-0 bg-[#06222EA6]"></div>
            <ImageURL
              className={"max-h-full w-full relative z-10"}
              image={img1}
            />
          </div>
        </div>
        <div>
          <div
            className={`relative p-5 md:p-16 bg-contain bg-center object-cover bg-no-repeat h-[210px] w-[210px] xs:h-[400px] xs:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto flex justify-center items-center `}
            style={{
              backgroundImage: `url("${img1}")`,
            }}
          >
            <div className="absolute inset-0 bg-[#06222EA6]"></div>
            <ImageURL
              className={"max-h-full w-full relative z-10"}
              image={img1}
            />
          </div>
        </div>

        {/* <div>
          <div
            className={`p-16 bg-contain bg-center object-cover bg-no-repeat h-[210px] w-[210px] xs:h-[400px] xs:w-[400px] lg:h-[500px] lg:w-[500px]`}
            style={{
              backgroundImage: `url("${img1}")`,
            }}
          >
            <ImageURL className={"max-h-full w-full"} image={img1} />
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
