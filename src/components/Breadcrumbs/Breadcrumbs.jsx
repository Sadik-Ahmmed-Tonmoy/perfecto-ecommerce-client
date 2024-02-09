/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./Breadcrumbs.css";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Breadcrumbs = ({ first, second, third, className, isShadow}) => {
    const location = useLocation();
    const isCategory = location.pathname.includes("category");
    return (
        <div className={twMerge("text-sm w-full overflow-x-auto text-black", className)}>
            <ul className={`${isCategory && "shadow"} ${isShadow && "shadow"} flex items-center gap-x-2 whitespace-nowrap min-h-min`}>
                {first && (
                    <li className="text-xs font-normal tracking-[-0.12px] hover:cursor-pointer">
                        <span className="text-black">{first}</span>
                    </li>
                )}
                {second && (
                    <>
                        {" "}
                        <li className=" text-xs font-normal tracking-[-0.12px] hover:cursor-pointer">
                            <AiOutlineRight size={8} />
                        </li>
                        <li className="opacity-80 text-[#00000099] text-xs font-normal tracking-[-0.12px]">{second}</li>
                    </>
                )}
                {third && (
                    <>
                        {" "}
                        <li className=" text-xs font-normal tracking-[-0.12px] hover:cursor-pointer">
                            <AiOutlineRight size={8} />
                        </li>
                        <li className="opacity-80 text-[#00000099] text-xs font-normal tracking-[-0.12px]">{third}</li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
