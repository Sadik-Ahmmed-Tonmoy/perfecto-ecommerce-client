import React, { useState } from "react";
import SlimSlider from "../../components/SlimSlider/SlimSlider";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CarouselCategoryCard from "../../components/allCards/CarouselCategoryCard/CarouselCategoryCard";
import { ScrollRestoration, useLocation } from "react-router-dom";
import LeftAlignCard from "../../components/allCards/LeftAlignCard/LeftAlignCard";
import BrandCard from "../../components/allCards/BrandCard/BrandCard";
import DiscountCard from "../../components/allCards/DiscountCard/DiscountCard";
import SaveCard from "../../components/allCards/SaveCard/SaveCard";
import IngredientCard from "../../components/allCards/IngredientCard/IngredientCard";
import img2 from "../../assets/card-image/Rectangle 881 (1) (1)-min.png";
import ProductFilterPage from "../ProductFilterPage/ProductFilterPage";
import { Drawer, Pagination, Space } from "antd";
import { IoClose } from "react-icons/io5";
import DropDownForSort from "../ProductFilterPage/DropDownForSort/DropDownForSort";
import DropDownMenuItem from "../ProductFilterPage/DropDownMenuItem/DropDownMenuItem";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import CenterAlignCard from "../../components/allCards/CenterAlignCard/CenterAlignCard";
import centerAlignCardImg from "../../assets/card-image/center-align-card-img.png";
import Button from "../../components/ui/Button";
import { AiOutlineRight } from "react-icons/ai";

const Campaign = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [current, setCurrent] = useState(3);
  const [isCategoryFilter, setIsCategoryFilter] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (page) => {
    setCurrent(page);
  };

  return (
    <div>
      <div className="my-3 container mx-auto px-[10px] ">
        <SlimSlider />
      </div>
      <div className="mb-4 md:mb-10 container mx-auto">
        <CardCarousel
          defaultSlidesToShow={5}
          slidesToShowFor540={1}
          slidesToShowFor640={2}
          slidesToShowFor768={3}
          slidesToShowFor1024={3}
          slidesToShowFor1280={4}
          slidesToShowFor1536={5}
        >
          {numbers.map((item, i) => (
            <div
              key={i}
              className="min-w-min px-[10px]"
              onClick={() => setIsCategoryFilter(true)}
            >
              <CarouselCategoryCard key={i} />
            </div>
          ))}
        </CardCarousel>
      </div>
      {isCategoryFilter ? (
        <ProductFilterPage link={""} topArea={false} />
      ) : (
        <>
          <div className="mb-4 md:mb-10 container mx-auto">
            <h4 className="text-[#000000CC] px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4 font-serif">
              Shop Can’t Miss Beauty
            </h4>
            <CardCarousel
              defaultSlidesToShow={5}
              slidesToShowFor540={1}
              slidesToShowFor640={2}
              slidesToShowFor768={3}
              slidesToShowFor1024={3}
              slidesToShowFor1280={4}
              slidesToShowFor1536={5}
            >
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min px-[10px]">
                  <LeftAlignCard key={i} />
                </div>
              ))}
            </CardCarousel>
          </div>
          <div className="mb-4 md:mb-10  px-[10px] container mx-auto">
            <h4 className="text-[#000000CC] font-serif px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4">
              Deals That Steal The Spotlight
            </h4>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-3">
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min">
                  <BrandCard key={i} image={img2} />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 md:mb-10 container mx-auto">
            <h4 className="text-[#000000CC] font-serif px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4">
              Drool-Worthy Discounts
            </h4>
            <CardCarousel
              defaultSlidesToShow={5}
              slidesToShowFor540={1}
              slidesToShowFor640={2}
              slidesToShowFor768={3}
              slidesToShowFor1024={3}
              slidesToShowFor1280={4}
              slidesToShowFor1536={5}
            >
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min px-[10px]">
                  <DiscountCard key={i} />
                </div>
              ))}
            </CardCarousel>
          </div>
          <div className="mb-4 md:mb-10 container mx-auto">
            <h4 className="text-[#000000CC] font-serif px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4">
              Offers Can’t Miss Beauty
            </h4>
            <CardCarousel
              defaultSlidesToShow={5}
              slidesToShowFor540={1}
              slidesToShowFor640={2}
              slidesToShowFor768={3}
              slidesToShowFor1024={3}
              slidesToShowFor1280={4}
              slidesToShowFor1536={5}
            >
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min px-[10px]">
                  <LeftAlignCard key={i} />
                </div>
              ))}
            </CardCarousel>
          </div>
          <div className="mb-4 md:mb-10 container mx-auto">
            <h4 className="text-[#000000CC] font-serif px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4">
              Splurge & Save
            </h4>
            <CardCarousel
              defaultSlidesToShow={5}
              slidesToShowFor540={1}
              slidesToShowFor640={2}
              slidesToShowFor768={2}
              slidesToShowFor1024={3}
              slidesToShowFor1280={4}
              slidesToShowFor1536={5}
            >
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min px-[10px]">
                  <SaveCard key={i} />
                </div>
              ))}
            </CardCarousel>
          </div>
          <div className="mb-4 md:mb-10 container mx-auto">
            <h4 className="text-[#000000CC] font-serif px-[10px] text-center font-inter text-[20px]  md:text-[32px] font-bold leading-normal mb-2 md:mb-4">
              Shop By Ingredient
            </h4>
            <CardCarousel
              defaultSlidesToShow={5}
              slidesToShowFor540={1}
              slidesToShowFor640={2}
              slidesToShowFor768={2}
              slidesToShowFor1024={3}
              slidesToShowFor1280={4}
              slidesToShowFor1536={5}
            >
              {numbers.map((item, i) => (
                <div key={i} className="min-w-min px-[10px]">
                  <IngredientCard key={i} />
                </div>
              ))}
            </CardCarousel>
            <div className="w-[96%] mx-auto">
              <Button className="w-full mt-5 mb-4 md:mt-14 md:mb-16">
                <span className="flex justify-center items-center gap-2">
                  Shop All Makeup <AiOutlineRight className="mt-1" />
                </span>
              </Button>
            </div>
          </div>
          {/* <PrimaryButton title={"Shop All Makeup"} icon={ */}
        </>
      )}
      {/* ScrollRestoration start */}
      {location?.search ? (
        ""
      ) : (
        <div>
          <ScrollRestoration />
        </div>
      )}
      {/* ScrollRestoration end */}
      {/* <ScrollRestoration /> */}
    </div>
  );
};

export default Campaign;
