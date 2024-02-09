import React, { useState } from "react";
import NavbarHoverIcon from "../../../../assets/NavbarHoverIcon/NavbarHoverIcon.svg";

const CategoryTitle = ({title}) => {
    const [CategoryTitle, setCategoryTitle] = useState(false);
    return (
        <div onMouseEnter={() => setCategoryTitle(true)} onMouseLeave={() => setCategoryTitle(false)} className="relative ">
            <div className={`absolute  w-full flex justify-center ${CategoryTitle ? "block" : "hidden"}`}>
                <img src={NavbarHoverIcon} alt="" />
            </div>
            <h5
                className={`hover:cursor-pointer whitespace-nowrap py-3 px-3 text-center text-sm font-medium leading-normal tracking-tighter text-[#000000A6] hover:text-[#5DC9F4]`}
            >
                {title}
            </h5>
        </div>
    );
};

export default CategoryTitle;
