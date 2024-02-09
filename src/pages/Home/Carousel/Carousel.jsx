import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Skeleton } from "antd";
import ImageURL from "../../../components/ImageURL/ImageURL.jsx";
import useHomeBanner from "../../../hooks/useHomeBanner.js";
const Carousel = () => {

const isLoading = false
const fakeBannerData = {
  success: true,
  data: [
    {
      small_image: "https://i.ibb.co/dpsKLjr/Rectangle-871.png",
      big_image: "https://i.ibb.co/dpsKLjr/Rectangle-871.png",
    },
    {
      small_image: "https://i.ibb.co/mN53mqw/Rectangle-918.png",
      big_image: "https://i.ibb.co/mN53mqw/Rectangle-918.png",
    },
    // Add more items as needed
  ],
};

// Replace the actual bannerData with the fakeBannerData for testing
const bannerData = fakeBannerData;

  // style with screen width (media queries alternative way)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {windowWidth <= 640 && bannerData?.success === true && (
            <span>
              {bannerData?.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-28 rounded-xl overflow-hidden">
                    {/* <img
                      className="h-full"
                      src={item.small_image && item.small_image}
                      alt={`Banner ${index}`}
                    /> */}
                    <ImageURL
                      className="h-full w-full"
                      image={item?.small_image && item?.small_image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </span>
          )}
          {windowWidth >= 641 && bannerData?.success === true && (
            <>
              {bannerData?.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    {/* <img
                      className="h-full"
                      src={item.big_image && item.big_image}
                      alt={`Banner ${index}`}
                    /> */}
                    <ImageURL
                      className="h-full w-full"
                      image={item?.big_image && item?.big_image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
