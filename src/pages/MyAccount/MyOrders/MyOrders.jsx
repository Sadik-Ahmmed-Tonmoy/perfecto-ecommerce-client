import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const MyOrders = () => {
    return (
        <>
            <div style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }} className="rounded-lg bg-white">
                <div className="py-3 ps-3 md:py-2 lg:py-5 md:ps-6 lg:ps-8 border-b-[0.5px] border-[#ECECEC]">
                    <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Orders</h3>
                </div>
                <div className="py-3 px-1 xs:px-3 md:mb-3 md:py-3 lg:py-6 md:px-6 lg:px-8">
                    {/* per order start  */}
                    <div className="border rounded-lg border-[#E2E8F0]">
                        <div className="border-b-[0.5px] border-[#ECECEC] py-2 md:oy-2 lg:py-4 px-2 xs:px-4 lg:px-8">
                            <div className="flex justify-between items-center ">
                                <div>
                                    <p className="text-[#000000A6] font-inter text-[10px] xs:text-xs md:text-sm font-medium leading-normal">Status</p>
                                    <p className="text-black font-inter text-[10px] xs:text-sm md:text-base font-semibold leading-normal tracking-[-0.16px]">
                                        Shipped
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#000000A6] font-inter text-[10px] xs:text-xs md:text-sm font-medium leading-normal">
                                        Order Number
                                    </p>
                                    <p className="text-black font-inter text-[10px] xs:text-sm md:text-base font-semibold leading-normal tracking-[-0.16px]">
                                        #351465-EU
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#000000A6] font-inter text-[10px] xs:text-xs md:text-sm font-medium leading-normal">
                                        Total Amount
                                    </p>
                                    <p className="text-black font-inter text-[10px] xs:text-sm md:text-base font-semibold leading-normal tracking-[-0.16px]">
                                        ৳ 1450.00
                                    </p>
                                </div>
                                <div>
                                    <Link to={"/my-account/my-orders/order-details"}>
                                        <Button
                                            className={
                                                ""
                                            }
                                        >
                                            <span className="hidden xs:block">See Details</span>
                                            <span className="block xs:hidden">
                                                <FaAngleRight />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 md:py-4 px-2 xs:px-4 lg:px-8">
                            <p className="mb-3 md:mb-6 text-black font-inter text-sm md:text-base font-medium leading-normal">
                                Estimated Delivery: 04 Nov, 2023{" "}
                            </p>
                            <div className="flex justify-between">
                                <div className="flex gap-4 w-full">
                                    <img
                                        className="rounded-[4px] border-[0.2px] border-[#CECECE] h-16 md:h-24 w-16 md:w-24"
                                        src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/kids-group-pdp.png"
                                        alt=""
                                    />
                                    <div className="flex flex-col md:flex-row justify-between gap-1 w-full">
                                        <div className="flex flex-col justify-between ">
                                            <p className="text-black text-sm xs:text-base md:text-lg font-medium leading-5">
                                                Lakme Absolute Skin Dew Color Sensational Ultimattes Satin Lipstick
                                            </p>
                                            <div className="flex flex-wrap gap-x-2">
                                                {" "}
                                                <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                                                    Brand: <span className="text-[#000000CC] font-medium">Lakme</span>
                                                </p>
                                                <div className="border-[0.1px] h-4"></div>
                                                <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                                                    Size: <span className="text-[#000000CC] font-medium">3.4ml</span>
                                                </p>
                                            </div>
                                            <dix className="text-[#000000A6] flex items-center gap-5 text-opacity-65 font-inter text-xs font-normal leading-normal">
                                                <p>
                                                    {" "}
                                                    Qty: <span className="text-[#000000CC] font-medium">1</span>
                                                </p>
                                                <div className="flex gap-2 items-center md:mb-1 md:hidden">
                                                    <p className="text-[#000000A6] text-[10px]  md:text-xs font-medium line-through">৳550</p>
                                                    <p className="text-black text-xs md:text-base font-bold leading-normal">৳550</p>
                                                </div>
                                            </dix>
                                        </div>
                                        <div>
                                            <div className="hidden md:flex gap-2 items-center md:mb-1">
                                                <p className="text-[#000000A6] text-[10px]  md:text-xs font-medium line-through">৳550</p>
                                                <p className="text-black text-xs md:text-base font-bold leading-normal">৳550</p>
                                            </div>
                                            <p className="text-[#02792A]  text-[10px] md:text-xs font-semibold leading-normal ">(-25% Off)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* per order end */}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
