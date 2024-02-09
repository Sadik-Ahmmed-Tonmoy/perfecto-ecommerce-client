import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoYoutube, IoPhonePortraitOutline } from "react-icons/io5";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import { TbCertificate, TbTag } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/footer/footerLogo.svg";
import playStoreImg from "../../assets/footer/playstore.svg";
import { CiInstagram } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="">
      {/* top footer start */}

      <div className="bg-[#8D8D95] py-4 sm:py-9">
        <div className="px-[10px] container mx-auto flex flex-wrap gap-y-4 justify-between items-center  ">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <IoPhonePortraitOutline className="text-white" size={20} />
              <p className="text-white font-inter text-xs font-semibold leading-normal tracking-tighter">
                Experience The Perfecto Mobile App
              </p>
            </div>

            <div className="flex gap-2">
              <div
                style={{ boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.26)" }}
                className="border border-white rounded bg-black flex items-center gap-2 p-[6px] w-fit"
              >
                <img className="" src={playStoreImg} alt="" />
                <div>
                  <p className="text-white font-poppins text-[8px] font-normal leading-normal -mb-1">
                    Get it on
                  </p>
                  <p className="text-white font-poppins text-sm font-medium leading-normal tracking-[-0.28px]">
                    Google Play
                  </p>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.26)" }}
                className="border border-white rounded bg-black flex items-center gap-2 p-[6px] w-fit"
              >
                <FaApple size={27} className="text-white" />
                <div>
                  <p className="text-white font-poppins text-[8px] font-normal leading-normal -mb-1">
                    Get it on
                  </p>
                  <p className="text-white font-poppins text-sm font-medium leading-normal tracking-[-0.28px]">
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-2">
            <FaPhone className="text-white" />
            <div>
              <p className="text-[#FFFFFFCC] text-xs font-semibold leading-normal">
                For any help, you may Call Us at
              </p>
              <p className="text-[#FFFFFFCC] text-sm font-semibold leading-normal">
                +880-524987774
              </p>
              <p className="text-[#FFFFFFCC] text-xs font-semibold leading-normal">
                (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* top footer end*/}
      {/* main Footer start */}
      <div className="bg-[#0A0A0A] py-9 ">
        <div className="px-[12px] container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-5">
          <div className="">
            <Link to={"/"}>
              <div className="h-5 w-32 sm:h-10 sm:w-44 mb-4 sm:mb-4 -ms-2 sm:ms-0">
                <img src={logo} className="max-h-full w-full" alt="" />
              </div>
            </Link>
            <Link to={"/who-we-are"}>
              <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
                Who We Are
              </p>
            </Link>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Careers
            </p>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Authenticity
            </p>
          </div>
          <div>
            <h5 className="text-primary-color mb-4 sm:mb-8">Help</h5>
            <Link to={"/contact-us"}>
              <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
                Contact Us
              </p>
            </Link>
            <Link to={"/frequently-asked-questions"}>
              <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
                Frequently Asked Questions
              </p>
            </Link>
            <Link to={"/store-and-event-location"}>
              <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
                Store Locator
              </p>
            </Link>
            {/* <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Cancellation & Return
            </p>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Shipping & Delivery
            </p>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Sell On Perfecto
            </p> */}
          </div>
          <div>
            <h5 className="text-primary-color mb-4 sm:mb-8">Inspire Me</h5>
            <Link to={"/buying-guides"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Buying Guides
            </p>
            </Link>
            <Link to={"/beauty-advice"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
              Beauty Advice
            </p>
            </Link>
          </div>
          <div>
            <h5 className="text-primary-color mb-4 sm:mb-8">All Routes</h5>
            <Link to={"/login-with-email"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
             Login
            </p>
            </Link>
            <Link to={"/login-with-phone"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
             Login with phone
            </p>
            </Link>
            <Link to={"/sign-up"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
             Sign up
            </p>
            </Link>
            <Link to={"/product-details-with-size"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
            Product Details With Size
            </p>
            </Link>
            <Link to={"/product-details-with-offer"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
            Product Details With Offer
            </p>
            </Link>
            <Link to={"/all-review"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
            All Review
            </p>
            </Link>
            
            <Link to={"/all-review-with-no-review"}>
            <p className="text-[#FFFFFF] text-sm font-medium leading-normal tracking-[-0.14px] hover:cursor-pointer mb-2">
            All review with no review
            </p>
            </Link>
         
          </div>
        </div>
      </div>
      {/* main Footer end */}
      {/* bottom footer start */}
      <div className="bg-white py-7 md:py-14">
        <div className="px-[10px] container mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-4 ">
          {/* per item start */}
          <div className="flex items-start gap-3">
            <div className="bg-primary-color p-3 rounded-full">
              <LiaTruckMovingSolid size={25} className="text-white" />
            </div>
            <div>
              <h5 className="border-b-[1px] pb-[1px] mb-1 text-black font-inter text-sm font-bold leading-normal">
                Nation Wide Shipping
              </h5>
              <p className="text-[#00000080] text-[11px] font-medium leading-[14px] mb-[2px]">
                Inside Dhaka Within 2 Days
              </p>
              <p className="text-[#00000080] text-[11px] font-medium leading-[14px]">
                Outside Dhaka Within 3 Days
              </p>
            </div>
          </div>
          {/* per item end */}
          {/* per item start */}
          <div className="flex items-start gap-3">
            <div className="bg-primary-color p-3 rounded-full">
              <TbCertificate size={25} className="text-white" />
            </div>
            <div>
              <h5 className="border-b-[1px] pb-[1px] mb-1 text-black font-inter text-sm font-bold leading-normal">
                Secure Payment Method
              </h5>
              <p className="text-[#00000080] text-[11px] font-medium leading-[14px] mb-[2px]">
                100% secure online payment method
              </p>
            </div>
          </div>
          {/* per item end */}
          {/* per item start */}
          <div className="flex items-start gap-3">
            <div className="bg-primary-color p-3 rounded-full">
              <SlBadge size={25} className="text-white" />
            </div>
            <div>
              <h5 className="border-b-[1px] pb-[1px] mb-1 text-black font-inter text-sm font-bold leading-normal">
                100% Authentic
              </h5>
              <p className="text-[#00000080] text-[11px] font-medium leading-[14px] mb-[2px]">
                Products Sourced Directly
              </p>
            </div>
          </div>
          {/* per item end */}
          {/* per item start */}
          <div className="flex items-start gap-3">
            <div className="bg-primary-color p-3 rounded-full">
              <TbTag size={25} className="text-white" />
            </div>
            <div>
              <h5 className="border-b-[1px] pb-[1px] mb-1 text-black font-inter text-sm font-bold leading-normal">
                1900+ Brands
              </h5>
              <p className="text-[#00000080] text-[11px] font-medium leading-[14px] mb-[2px]">
                1.2 Lakh+ Products
              </p>
            </div>
          </div>
          {/* per item end */}
          {/* per item start */}
          <div className="flex items-start gap-3 mx-auto">
            {/* <div className="bg-primary-color p-3 rounded-full">
              <TbTag size={25} className="text-white" />
            </div> */}
            <div>
              <h5 className="pb-[1px] mb-1 text-black font-inter text-sm font-bold leading-normal whitespace-nowrap">
                Show us some love ❤ on social media
              </h5>
              <div className="flex justify-evenly items-center">
                <div className="bg-primary-color p-2 rounded-full">
                  <FaFacebookF size={15} className="text-white" />
                </div>
                <div className="bg-primary-color p-2 rounded-full">
                  <FaTwitter size={15} className="text-white" />
                </div>
                <div className="bg-primary-color p-2 rounded-full">
                  <SiInstagram size={15} className="text-white" />
                </div>
                <div className="bg-primary-color p-2 rounded-full">
                  <IoLogoYoutube size={15} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* per item end */}
        </div>
      </div>
      {/* bottom footer end */}
      {/* privacy and copyright start */}
      <div className="bg-primary-color py-4 px-2">
        <div className="flex justify-center items-center gap-8 mb-4">
          <p className="text-white text-[10px] font-medium leading-normal tracking-[0.2px] text-center">
            Terms & Conditions
          </p>
          <p className="text-white text-[10px] font-medium leading-normal tracking-[0.2px] text-center">
            Shipping Policy
          </p>
          <p className="text-white text-[10px] font-medium leading-normal tracking-[0.2px] text-center">
            Cancellation Policy
          </p>
          <p className="text-white text-[10px] font-medium leading-normal tracking-[0.2px] text-center">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="text-white text-[10px] font-medium leading-normal tracking-[0.2px] text-center">
            © 2023 Perfecto. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* privacy and copyright end */}
    </div>
  );
};

export default Footer;
