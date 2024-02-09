import React from "react";
import StarRating from "../../../components/StarRating/StarRating";
import { Select } from "antd";
import Button from "../../../components/ui/Button";

const MyRatingAndReviews = () => {
  const handleChange = (value) => {};
  return (
    <div
      style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }}
      className="rounded-lg bg-white"
    >
      <div className="py-3 ps-3 px-1 xs:px-3 md:px-6 lg:px-8 md:py-2 lg:py-5 md:ps-6 lg:ps-8 border-b-[0.5px] border-[#ECECEC] flex flex-wrap md:gap-2 justify-between items-center">
        <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">
          My Ratings & Reviews
        </h3>
        <span>
          Sort By:{" "}
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
        </span>
      </div>
      <div className="pt-3 pb-3 px-1 xs:px-3 md:mb-3 md:pt-3 lg:pt-6 md:px-6 lg:px-8">
        {/* per order start  */}
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 lg:gap-8">
          <div className=" md:w-56 flex gap-2 flex-row md:flex-col">
            <img
              className="rounded-[4px] border-[0.2px] border-[#E2E8F0] h-24 md:h-[170px]  lg:h-[190px] mb-2"
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bAczzhRrL._SL1500_.jpg"
              alt=""
            />
            <div>
              <p className="text-black font-inter text-xs font-medium leading-4 mb-2">
                Maybelline New York Superstay Vinyl Ink Liquid
              </p>
              <p className="text-black font-inter text-sm font-bold leading-normal">
                ৳550
              </p>
            </div>
          </div>
          <div className=" w-full">
            <div className="flex flex-wrap gap-2 justify-between">
              {" "}
              <div className="flex items-center gap-5 mb-3 lg:mb-5">
                <StarRating rating={3} totalStars={5} size={24} />
                <p className="text-black font-inter text-base font-medium leading-normal">
                  4.5
                </p>
              </div>
              <p className="text-[#000000CC] font-inter text-sm font-medium leading-normal">
                20 July 2023
              </p>
            </div>
            <div>
              <p className="text-black font-inter text-sm font-semibold leading-5 mb-1">
                “Velvet in bullet.....”
              </p>
              <p className="text-[#000000A6] font-inter text-sm font-normal leading-5 mb-2 lg:mb-4">
                It feels light and weightless and has a matte finish that looks
                fabulous and has a matte finish that looks out. This one feels
                non-sticky and repairs flakiness repairs as is infused ...
                <span className="font-semibold">Read More</span>
              </p>
              <div className="flex gap-2 mb-2 lg:mb-4">
                <img
                  className="rounded-[2px] h-16 w-16 mb-2"
                  src="https://i0.wp.com/www.theluxeminimalist.com/wp-content/uploads/2020/07/Rouge-Hermes-Lipstick-Review5.png?resize=945%2C800&ssl=1"
                  alt=""
                />
                <img
                  className="rounded-[2px] h-16 w-16 mb-2"
                  src="https://image.harrods.com/bobbi-brown-luxe-matte-lip-color_15157169_25816759_600.jpg"
                  alt=""
                />
              </div>
              <Button variant="bordered">View Product</Button>
            </div>
          </div>
        </div>
        {/* per order end */}
      </div>
    </div>
  );
};

export default MyRatingAndReviews;
