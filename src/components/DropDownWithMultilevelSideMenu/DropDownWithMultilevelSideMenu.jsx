import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavbarHoverIcon from "../../assets/NavbarHoverIcon/NavbarHoverIcon.svg";
import { Link } from "react-router-dom";

const DropDownWithMultilevelSideMenu = ({ isBrandOpen, setIsBrandOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-10">
      {/* <div className={`absolute  w-full flex justify-center ${isBrandOpen ? "block" : "hidden"}`}>
                <img src={NavbarHoverIcon} alt="" />
            </div>
            <div className="hover:cursor-pointer relative">
                <h5 className={`hover:cursor-pointer py-3 px-2 text-center text-sm font-medium leading-normal tracking-tighter ${isBrandOpen ? "text-[#5DC9F4]" : "text-[#000000A6]"}`}>{title}</h5>
            </div> */}

      <div
        style={{ boxShadow: "0px 4px 20px 0px rgba(36, 52, 58, 0.10)" }}
        className={`md:w-[758px] lg:w-[1016px] xl:w-[1270px] 2xl:w-[1526px] absolute z-10 flex top-11 left-0 rounded slim-scroll max-h-[calc(100vh-150px)] overflow-hidden overflow-y-auto bg-white ${
          isBrandOpen ? "block" : "hidden"
        } `}
      >
        {/* menu Items start */}
        <div className="grid grid-cols-4 lg:grid-cols-6 w-full">
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-white">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Face
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Concealer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Loose Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Blush
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Bronzer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  BB & CC Cream
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Highlighter
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Setting Spray
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Makeup Remover
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-[#EEFAFF]">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Eyes
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Kajal
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Eyeliner
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Mascara
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Eye Shadow
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Eye Brow Enhancers
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Eye Makeup Remover
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Eye Primer
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-white">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Lips
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Liquid Lipsticks
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Lipstick{" "}
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Lip Crayon{" "}
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Lip Liner
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Lip Balm
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Loose Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Blush
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Bronzer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  BB & CC Cream
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Highlighter
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Setting Spray
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Makeup Remover
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-[#EEFAFF]">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Nails
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Concealer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-white">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Tools & Brushes
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Concealer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Loose Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Blush
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Bronzer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  BB & CC Cream
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Highlighter
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Setting Spray
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Makeup Remover
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-[#EEFAFF]">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Top Brands
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-white">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Face
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Concealer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Loose Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Blush
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Bronzer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  BB & CC Cream
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Highlighter
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Setting Spray
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Makeup Remover
                </p>
              </Link>
            </div>
          </div>
          <div onClick={() => setIsBrandOpen(false)} className="px-5 bg-[#EEFAFF]">
            <Link to={"/product-filter"}>
              <h5 className="my-4 text-black  text-lg font-medium leading-normal hover:cursor-pointer">
                Nails
              </h5>
            </Link>
            <div className="mt-2 mb-5 max-h-[calc(100vh-70vh)] overflow-hidden overflow-y-auto slim-scroll">
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Face Primer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Foundation
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Contour
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Concealer
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
              <Link to={"/product-filter"}>
                <p className="text-[#00000080] text-sm font-normal leading-normal hover:cursor-pointer mb-2">
                  Pressed Powder
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* menu Items end */}
      </div>
    </div>
  );
};

export default DropDownWithMultilevelSideMenu;
