import React, { useState } from "react";
import AlphabetList from "react-alphabet-list";
import { useForm } from "react-hook-form";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { Tag, Tooltip } from "antd";
import searchIcon from "../../assets/DropDownWithSearchAndList/ion_search.svg";
import "./DropDownWithSearchAndList.css";
import ScrollButton from "../ScrollButton/ScrollButton";

const DropDownWithSearchAndList = ({ title }) => {
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    // const data = [{ name: "anything" }];
    // const nameKey = "name";

    const alphabetList = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    return (
        <div className="relative" onMouseEnter={() => setIsBrandOpen(true)} onMouseLeave={() => setIsBrandOpen(false)}>
            <div className="hover:cursor-pointer relative">
                <h5 className="hover:cursor-pointer py-5">{title}</h5>
            </div>

            <div
                style={{ boxShadow: "0px 4px 20px 0px rgba(36, 52, 58, 0.10)" }}
                className={`md:w-[746px] lg:w-[1000px] xl:w-[1202px] md:-left-[207px] lg:-left-[206px] xl:-left-[180px] 2xl:-left-14 absolute z-10 flex top-[56px] rounded overflow-hidden ${
                    isBrandOpen ? "block" : "hidden"
                }  `}
            >
                {/* left side start */}
                <div className="bg-white w-5/12">
                    <div className="border-b-[1px] p-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register("search")}
                                    placeholder="Search Brands"
                                    className="input w-full ps-9 py-[6px] bg-[#F5F5F5] rounded-sm"
                                />
                                <button className="absolute top-[10px] left-2" type="submit">
                                    <img src={searchIcon} alt="" />
                                    {/* <IoSearch className="text-[#00000099]" size={20} /> */}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="relative">
                        <div className=" max-h-[330px] overflow-hidden overflow-y-auto slim-scroll">
                            <div className="">
                                <div className="px-5 bg-white">
                                    <h5 className="my-4 text-black  text-lg font-medium leading-normal">Top Brands</h5>
                                    <div className="mt-2 mb-5">
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Top Brands</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Top Brands</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Top Brands</p>
                                    </div>
                                </div>
                                <div id="A" className="px-5 bg-white">
                                    <h5 className="my-4 text-black  text-lg font-medium leading-normal">A</h5>
                                    <div className="mt-2 mb-5">
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">A Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">A Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">A Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">A Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">A Brand</p>
                                    </div>
                                </div>
                                <div id="B" className="px-5 bg-white">
                                    <h5 className="my-4 text-black  text-lg font-medium leading-normal">B</h5>
                                    <div className="mt-2 mb-5">
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">B Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">B Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">B Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">B Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">B Brand</p>
                                    </div>
                                </div>
                                <div id="C" className="px-5 bg-white">
                                    <h5 className="my-4 text-black  text-lg font-medium leading-normal">C</h5>
                                    <div className="mt-2 mb-5">
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                        <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col absolute top-2 right-2 overflow-hidden overflow-y-auto slim-scroll">
                                {alphabetList.map((item, index) => (
                                    // <p className="text-[10px] leading-[11px] " key={index}>{item}</p>
                                    <ScrollButton key={index} to={item} name={item} isBrandOpen={isBrandOpen} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* left side end*/}
                {/* right side start */}
                <div className="bg-[#F5F5F5] w-full">
                    <div className="border-b-[1px] py-3">
                        <h4 className="text-center">Popular Brands</h4>
                    </div>
                    {/* brand images start */}
                    <div className="grid grid-cols-5 gap-5 p-8">
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/cDGrjGF/image-140.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/F7V86PS/image-138.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/f2nyMt0/image-137.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/mGstQCS/image-136.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/YRTj4Jj/image-135.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/PZXntHQ/image-134.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/cDGrjGF/image-140.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/F7V86PS/image-138.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/f2nyMt0/image-137.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/mGstQCS/image-136.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/YRTj4Jj/image-135.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                        <Link to={"/product-filter"}>
                            <img src="https://i.ibb.co/PZXntHQ/image-134.png" className="hover:cursor-pointer" alt="" />
                        </Link>
                    </div>
                    {/* brand images end*/}
                </div>
                {/* right side end*/}
            </div>
        </div>
    );
};

export default DropDownWithSearchAndList;
