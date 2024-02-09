import React from "react";
import { Link } from "react-router-dom";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const BrandPageForMobile = () => {
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
        <div className="container mx-auto px-[10px] overflow-hidden overflow-y-auto slim-scroll">
            {/* right side start */}
            <div className="bg-[#F5F5F5] w-full">
                <div className="border-b-[1px] py-3">
                    <h4 className="text-center">Popular Brands</h4>
                </div>
                {/* brand images start */}
                <div className="grid grid-cols-3 gap-5 p-8">
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
            {/* left side start */}
            <div className="bg-white w-full">
               
                <div className="relative">
                    <div className=" max-h-[calc(100vh-60vh)] overflow-hidden overflow-y-auto slim-scroll">
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
                                <h5  className="my-4 text-black  text-lg font-medium leading-normal">
                                    A
                                </h5>
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
                            <div  id="C" className="px-5 bg-white">
                                <h5 className="my-4 text-black  text-lg font-medium leading-normal">
                                    C
                                </h5>
                                <div className="mt-2 mb-5">
                                    <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                    <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                    <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                    <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                    <p className="text-[#00000080] text-sm font-normal leading-normal mb-2">Brand</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col absolute top-2 right-2 ">
                            {alphabetList.map((item, index) => (
                                // <p className="text-[10px] leading-[11px] " key={index}>{item}</p>
                                <ScrollButton key={index} to={item} name={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* left side end*/}
        </div>
    );
};

export default BrandPageForMobile;
