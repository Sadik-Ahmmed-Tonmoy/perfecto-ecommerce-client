import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SlimSlider from "../../components/SlimSlider/SlimSlider";
import DropDownMenuItem from "./DropDownMenuItem/DropDownMenuItem";
import DropDownForSort from "./DropDownForSort/DropDownForSort";
import CenterAlignCard from "../../components/allCards/CenterAlignCard/CenterAlignCard";
import centerAlignCardImg from "../../assets/card-image/center-align-card-img.png";
import { Button, Collapse, Drawer, Pagination, Space } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { BsCheck } from "react-icons/bs";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ScrollRestoration, useLocation } from "react-router-dom";
import CenterAlignCardWithSize from "../../components/allCards/CenterAlignCardWithSize/CenterAlignCardWithSize";

const ProductFilterPage = ({ link, topArea = true }) => {
  const [current, setCurrent] = useState(3);
  const location = useLocation();
  const fakeProductCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [brandList, setBrandList] = useState([
    { id: 1, name: "MAC Cosmetics" },
    { id: 2, name: "Maybelline" },
    { id: 3, name: "NARS" },
    { id: 4, name: "Urban Decay" },
    { id: 5, name: "L'Oréal Paris" },
    { id: 6, name: "Estée Lauder" },
    { id: 7, name: "Clinique" },
    { id: 8, name: "Revlon" },
    // Add more brands as needed
  ]);

  const [categoryList, setCategoryList] = useState([
    { id: 1, name: "Face Primer" },
    { id: 2, name: "Concealer" },
    { id: 3, name: "Foundation" },
    { id: 4, name: "Contour" },
    { id: 5, name: "Pressed Powder" },
    { id: 6, name: "Loose Powder" },
    { id: 7, name: "Blush" },
    { id: 8, name: "Bronzer" },
    { id: 9, name: "CC Cream" },
    { id: 10, name: "BB Cream" },
    { id: 11, name: "new Cream" },
    { id: 12, name: "ab Cream" },
    { id: 13, name: "cd Cream" },
  ]);

  const [discountList, setDiscountList] = useState([
    { id: 1, name: "10% off" },
    { id: 2, name: "20% off" },
    { id: 3, name: "30% off" },
    // Add more discount options as needed
  ]);
  const [priceList, setPriceList] = useState([
    { id: 1, name: "Under $10" },
    { id: 2, name: "$10 - $20" },
    { id: 3, name: "$20 - $30" },
    { id: 4, name: "$30 - $40" },
    { id: 5, name: "$40 - $50" },
    { id: 6, name: "$50 - $60" },
    { id: 7, name: "$60 - $70" },
    { id: 8, name: "$70 - $80" },
    { id: 9, name: "$80 - $90" },
    { id: 10, name: "$90 - $100" },
    { id: 11, name: "Over $100" },
  ]);
  const [colorList, setColorList] = useState([
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
    { id: 4, name: "Yellow" },
    { id: 5, name: "Orange" },
    { id: 6, name: "Purple" },
    { id: 7, name: "Pink" },
    { id: 8, name: "Black" },
    { id: 9, name: "White" },
    { id: 10, name: "Grey" },
    { id: 11, name: "Brown" },
    { id: 12, name: "Gold" },
    { id: 13, name: "Silver" },
    { id: 14, name: "Multi" },
  ]);

  const [sizeList, setSizeList] = useState([
    { id: 1, name: "Small" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Large" },
    // Add more size options as needed
  ]);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (page) => {
    setCurrent(page);
  };

  const paginationStyles = {
    borderRadius: "20px", // Adjust the border-radius value as needed
  };

  return (
    <div className="px-[10px] container mx-auto">
      {topArea && (
        <>
          <Breadcrumbs
            className={"mt-2 mb-1 md:my-4"}
            first={"Home"}
            second={"Skin"}
          />
          <h3 className="text-black text-center font-inter text-base md:text-[20px] font-semibold leading-normal mb-1 md:mb-4">
            Buy Skincare Products Online
          </h3>
          <SlimSlider dots={true} />
        </>
      )}
      {/* left side for mobile menu start */}
      <div className="block md:hidden">
        <Drawer
          title="Product Filter"
          placement={"bottom"}
          // width={500}
          height={"75%"}
          closable={false}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <button className="mt-2" onClick={onClose}>
                <IoClose size={22} />
              </button>
            </Space>
          }
        >
          {/* left side menu start */}
          <div
            className="md:w-[47%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] p-2 rounded bg-[#F3F3F3]"
            style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
          >
            <div className="mb-2">
              <DropDownForSort title={"Sort By:"} link={link} />
            </div>
            <DropDownMenuItem
              items={brandList}
              title={"Brand"}
              setSelectedItems={setSelectedBrands}
              link={link}
            />
            <DropDownMenuItem
              items={priceList}
              title={"Price"}
              isSearch={false}
              setSelectedItems={setSelectedBrands}
              link={link}
            />
            <DropDownMenuItem
              items={categoryList}
              title={"Category"}
              setSelectedItems={setSelectedCategory}
              link={link}
            />
            <DropDownMenuItem
              items={discountList}
              title={"Discount"}
              setSelectedItems={setSelectedCategory}
              link={link}
            />
            <DropDownMenuItem
              items={colorList}
              title={"Colors"}
              setSelectedItems={setSelectedCategory}
              link={link}
            />
            <DropDownMenuItem
              items={sizeList}
              title={"Sizes"}
              setSelectedItems={setSelectedCategory}
              link={link}
            />
          </div>
          {/* left side menu end*/}
        </Drawer>
        <div className="z-10">
          <MainButton
            title={<HiOutlineMenuAlt2 />}
            handleSubmit={showDrawer}
            className={"px-4 py-2 mt-3 z-20"}
          />
        </div>
        {/* <Button type="primary" onClick={showDrawer}>
          Open
        </Button> */}
      </div>
      {/* left side for mobile menu end */}
      {/* filter and products start */}
      <div className="flex gap-3 mt-2 md:mt-8">
        {/* left side menu start */}
        <div
          className="hidden md:block md:w-[47%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] p-2 rounded bg-[#F3F3F3]"
          style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
        >
          <div className="mb-2">
            <DropDownForSort title={"Sort By:"} link={link} />
          </div>
          <DropDownMenuItem
            items={brandList}
            title={"Brand"}
            setSelectedItems={setSelectedBrands}
            link={link}
          />
          <DropDownMenuItem
            items={priceList}
            title={"Price"}
            isSearch={false}
            setSelectedItems={setSelectedBrands}
            link={link}
          />
          <DropDownMenuItem
            items={categoryList}
            title={"Category"}
            setSelectedItems={setSelectedCategory}
            link={link}
          />
          <DropDownMenuItem
            items={discountList}
            title={"Discount"}
            setSelectedItems={setSelectedCategory}
            link={link}
          />
          <DropDownMenuItem
            items={colorList}
            title={"Colors"}
            setSelectedItems={setSelectedCategory}
            link={link}
          />
          <DropDownMenuItem
            items={sizeList}
            title={"Sizes"}
            setSelectedItems={setSelectedCategory}
            link={link}
          />
        </div>
        {/* left side menu end*/}
        {/* right side products start*/}
        <div className="w-full">
          <div
            className="rounded bg-white py-3 ps-5 w-full mb-3"
            style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
          >
            <p>5436 Products Found</p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-5 ">
            <CenterAlignCardWithSize img={centerAlignCardImg} />
            {fakeProductCount?.map((item, i) => (
              <CenterAlignCard key={i} img={centerAlignCardImg} />
            ))}
          </div>
          <div className="w-full my-5 lg:my-14 flex flex-col gap-y-2 md:flex-row justify-between items-center">
            <p className="text-sm font-medium">Page 1 of 20</p>
            <Pagination
              current={current}
              onChange={onChange}
              total={50}
              style={paginationStyles}
            />
            <p></p>
          </div>
        </div>
        {/* right side products end*/}
      </div>
      {/* filter and products end */}
      {/* ScrollRestoration start */}
      {location?.search ? (
        ""
      ) : (
        <div>
          <ScrollRestoration />
        </div>
      )}
      {/* ScrollRestoration end */}
    </div>
  );
};

export default ProductFilterPage;
