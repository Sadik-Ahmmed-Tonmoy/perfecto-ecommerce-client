import { Icon } from "@iconify/react";
import { Drawer } from "antd";
import React, { useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartCard from "../allCards/CartCard/CartCard";
import MainButton from "../Buttons/MainButton/MainButton";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { LogicProviderContext } from "../../providers/LogicProvider";
import Lottie from "lottie-react";
import cartLottie from "../../assets/LottieAnimations/emptyCart.json";
import WishListCard from "../allCards/WishListCard/WishListCard";

const WishListDrawer = () => {
    const { wishListDrawerOpen, setWishListDrawerOpen,  } = useContext(LogicProviderContext); 
    const onClose = () => {
        setWishListDrawerOpen(false);
    };

    const hasCartItem = true;
    return (
        <div>
            <Drawer
                title={
                    <span className="text-black font-inter text-[24px] font-semibold leading-normal">
                        Wishlist <span className="text-[#000000A6] font-inter text-base font-normal leading-normal">(6 Items)</span>
                    </span>
                }
                placement={"right"}
                width={500}
                onClose={onClose}
                open={wishListDrawerOpen}
                closeIcon={<FaArrowLeftLong style={{ fontSize: "24px", color: "black" }} />} // Custom close icon
                className="relative"
            >
                <div>
                    {hasCartItem ? (
                        // if any item is added to cart start
                        <div className="flex flex-col justify-between h-[calc(100vh-195px)] overflow-y-auto slim-scroll p-3">
                            <div>
                                <WishListCard className={"mb-3"} />
                                <WishListCard className={"mb-3"} />

                                {/* <div className="border-[0.5px] bg-white rounded flex items-center justify-between w-full mb-3 p-3">
                                    <div className="flex items-center  gap-3">
                                        {" "}
                                        <div className="bg-[#d4f3ff] rounded-full p-2 h-min">
                                            <Icon icon="mdi:coupon-outline" width="24" height="24" className="text-[#0094CF]" />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-wrap gap-x-2 justify-between ">
                                                <p className="text-black font-inter text-sm font-medium leading-normal">Coupons</p>
                                            </div>
                                            <p className="text-[#0094CF] font-inter text-sm font-medium leading-normal">Applied coupon</p>
                                        </div>
                                    </div>
                                    <p className="text-black text-right font-inter text-sm font-semibold leading-normal">-৳ 550</p>
                                </div>
                                <div className="border-[0.5px] bg-white rounded flex items-center justify-between w-full mb-3 p-3">
                                    <div className="flex items-center  gap-3">
                                        {" "}
                                        <div className="bg-[#d4f3ff] rounded-full p-[6px] h-min">
                                            <Icon icon="mdi:star-circle-outline" width="28" height="28" className="text-[#0094CF]" />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-wrap gap-x-2 justify-between ">
                                                <span className="text-black font-inter text-sm font-medium leading-normal flex items-center gap-[6px]">
                                                    <p>Reward Points</p>{" "}
                                                    <Icon
                                                        icon="zondicons:exclamation-outline"
                                                        className="text-[#00000080]"
                                                        width="15"
                                                        height="15"
                                                        rotate={2}
                                                    />
                                                </span>
                                            </div>
                                            <p className="text-[#0094CF] font-inter text-sm font-medium leading-normal">Redeem your reward points!</p>
                                        </div>
                                    </div>
                                    <p className="text-black text-right font-inter text-sm font-semibold leading-normal">-৳ 550</p>
                                </div>
                                <div className="border-[0.5px] bg-white rounded   w-full mb-3 p-3">
                                    <h4 className="text-black font-inter text-base font-semibold leading-normal mb-3">Order Summary</h4>
                                    <div className="border-b-[0.5px] mb-2">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-black font-inter text-sm font-medium leading-normal">
                                                Items Subtotal{" "}
                                                <span className="text-[#000000A6] font-inter text-sm font-normal leading-normal">(3 Items)</span>
                                            </p>
                                            <p className="text-black text-right font-inter text-sm font-medium leading-normal">৳ 1,650</p>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-black font-inter text-sm font-medium leading-normal">Discount</p>
                                            <p className="text-black text-right font-inter text-sm font-medium leading-normal">-৳ 250</p>
                                        </div>
                                        <div className="flex justify-between items-center mb-3">
                                            <p className="text-black font-inter text-sm font-medium leading-normal">Shipping Fee</p>
                                            <p className="text-black text-right font-inter text-sm font-medium leading-normal">৳ 100</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-inter text-base font-semibold leading-normal">Total</p>
                                        <p className="text-black text-right font-inter text-base font-semibold leading-normal">৳ 1,500</p>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div
                                className="bg-white absolute bottom-0 left-0 w-full p-4"
                                style={{ boxShadow: "0px 0px 24px 0px rgba(228, 237, 240, 0.65)" }}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h5 className="text-[#000000CC] font-inter text-base font-normal leading-normal">Grand total</h5>
                                        <h4 className="text-black font-inter text-[26px] font-bold leading-normal">৳550</h4>
                                    </div>
                                    <MainButton
                                        title={"Proceed"}
                                        handleSubmit={onClose}
                                        icon={<GoArrowRight size={20} />}
                                        to={"/checkout"}
                                        className={"py-3 px-12"}
                                    />
                                </div>
                            </div> */}
                        </div>
                    ) : (
                        // if any item is added to cart end

                        <div className="flex justify-center">
                            <div>
                            <Lottie
                  className="h-36 "
                  animationData={cartLottie}
                  loop={true}
                />
                                <h4 className="text-black font-inter text-2xl font-semibold leading-normal mb-4 text-center">Your Shopping Bag is Empty</h4>
                                <p className="text-center mb-8">Looks like you haven’t made your choice yet, add all your favorite products</p>
                                <div className="flex justify-center">
                                    <div className="w-10/12">
                                        <MainButton title={"Start Shopping"} className={"w-full"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default WishListDrawer;
