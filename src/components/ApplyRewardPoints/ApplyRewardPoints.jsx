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
import { twMerge } from "tailwind-merge";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";

const ApplyRewardPoints = () => {
  const { applyRewardPointOpen, setApplyRewardPointOpen } =
    useContext(LogicProviderContext);
  const onClose = () => {
    setApplyRewardPointOpen(false);
  };

 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const hasCartItem = true;
  return (
    <div>
      <Drawer
        title={
          <span className="text-black font-inter text-[24px] font-semibold leading-normal">
            Reward Points
            <span className="text-[#000000A6] font-inter text-base font-normal leading-normal"></span>
          </span>
        }
        placement={"right"}
        width={500}
        onClose={onClose}
        open={applyRewardPointOpen}
        closeIcon={
          <FaArrowLeftLong style={{ fontSize: "24px", color: "black" }} />
        } // Custom close icon
        className="relative"
      >
        <div>
          <div className="flex flex-col justify-between h-[calc(100vh-195px)] overflow-y-auto slim-scroll p-3">
            <div>
              <div className={twMerge("border-[0.5px] bg-white rounded p-3")}>
                <div className="mb-[11px] ">
                  <p className="text-black text-base font-medium">
                    You have total <span className="font-bold">500</span> reward
                    points to redeem
                    {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
                  </p>
                  <label>
                    <span className="flex text-sm font-medium my-3">
                      Reward Points
                      {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
                    </span>
                  </label>
                  <span className="relative">
                    <input
                      {...register("fullName", {
                        required: true,
                        minLength: 8, // Minimum password length of 8 characters
                      })}
                      type="text"
                      placeholder="Enter redeemable points"
                      className="p-3 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black text-opacity-50 text-[14px] font-normal leading-normal tracking-[-0.14px] mb-2"
                    />
                  </span>
                  {errors.fullName && errors.fullName.type === "minLength" && (
                    <p className="text-red-500">
                      Field must be at least 8 characters long
                    </p>
                  )}
                  {errors.fullName && errors.fullName.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <Button className="w-full py-3 mb-2">Redeem Points</Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ApplyRewardPoints;
