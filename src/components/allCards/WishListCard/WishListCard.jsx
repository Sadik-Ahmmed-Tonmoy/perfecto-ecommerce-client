import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMinus, TbPlus } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import Button from "../../ui/Button";

const WishListCard = ({className}) => {
    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    };

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value);
        setCounter(inputValue);
    };

    return (
        <div className={twMerge("border-[0.5px] bg-white rounded p-3", className)}>
            <div className="flex border-b-[0.5px] pb-3 mb-3">
                <div className="me-3">
                    <img
                        className="rounded-md  h-auto w-32"
                        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bAczzhRrL._SL1500_.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <span className="flex items-start justify-between gap-1">
                        <p className="text-black font-inter text-base font-medium leading-5 mb-1">
                            {"Lakme Absolute Skin Dew Color Sensational Ultimattes Satin Li".slice(0, 50) + "..."}
                        </p>

                        <RiDeleteBin6Line size={25} />
                    </span>
                    <div className="flex flex-wrap gap-x-2 mb-1">
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                            Brand: <span className="text-[#000000CC] font-medium">Lakme</span>
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                            Size: <span className="text-[#000000CC] font-medium">3.4ml</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="h-4 w-4 bg-red-500 rounded"></div>{" "}
                        <p className="text-[#000000CC]  font-inter text-xs font-medium leading-normal">Nude Shade Color</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                    <p className="text-black text-sm md:text-base font-bold leading-normal">৳550</p>
                    <p className="text-[#000000A6] text-xs  md:text-xs font-medium line-through">৳550</p>
                </div>
                <Button className>Move to Cart</Button>
              
            </div>
        </div>
    );
};

export default WishListCard;
