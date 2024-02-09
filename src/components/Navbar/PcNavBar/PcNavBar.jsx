/* eslint-disable react/prop-types */
import { BiSearchAlt2 } from "react-icons/bi";
import logo from "../../../assets/logo/logo.png";
import { useForm } from "react-hook-form";
import "./PcNavBar.scss";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import DropDownBtn from "../../DropDownBtn/DropDownBtn";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LogicProviderContext } from "../../../providers/LogicProvider";
import CartDrawer from "../../CartDrawer/CartDrawer";
import DropDownWithSearchAndList from "../../DropDownWithSearchAndList/DropDownWithSearchAndList";
import DropDownWithMultilevelSideMenu from "../../DropDownWithMultilevelSideMenu/DropDownWithMultilevelSideMenu";
import { FloatButton } from "antd";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import MyAccountSideMenu from "../../../pages/MyAccount/MyAccountSideMenu/MyAccountSideMenu";
import CategoryTitle from "./CategoryTitle/CategoryTitle";
import useAuthUser from "../../../hooks/useAuthUser";

const PcNavBar = ({ menuData }) => {
    const { open, setOpen, setWishListDrawerOpen } = useContext(LogicProviderContext);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [accountDropDown, setAccountDropDown] = useState(false);
    const { userData } = useAuthUser();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="pc-navbar relative">
            {/* navbar-first-row start */}
            <div className="navbar-first-row px-[10px]  container mx-auto">
                <div className="logo gap-3 lg:gap-8">
                    <Link to={"/"}>
                        <div className="h-10 w-44">
                            <img src={logo} className="max-h-full w-full" alt="" />
                        </div>
                    </Link>
                    <DropDownWithSearchAndList title={"Brands"} />
                    <Link to={"/beauty-advice"}>
                        <h5 className="whitespace-nowrap">Beauty Advice</h5>
                    </Link>
                    {/* hover brand list start */}
                    {/* <div className="hover:cursor-pointer"  onMouseEnter={() => setIsBrandOpen(true)} onMouseLeave={() => setIsBrandOpen(false)}>
                        <h5 className="hover:cursor-pointer bg-red-500 py-10">Brands</h5>
                        <div  className={`border absolute z-10 right-20 top-20 ${isBrandOpen ? "block" : "hidden"} w-full container `}>asdas</div>
                    </div> */}
                    {/* hover brand list end*/}
                </div>

                <div className="right-side lg:w-8/12">
                    <div className="search-form w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("search")} placeholder="Search for products..." className="input w-full" />
                            <button className="" type="submit">
                                <BiSearchAlt2 className="text-[#00000099]" size={20} />
                            </button>
                        </form>
                    </div>
                    <div className="right-side-options ">
                        {userData?.status === true ? (
                            <div
                                className="relative pb-2"
                                onMouseEnter={() => setAccountDropDown(true)}
                                onMouseLeave={() => setAccountDropDown(false)}
                            >
                                <Link to={"/my-account/my-profile"}>
                                    <button>
                                        <BsPerson className="w-6 h-6 text-[#000000]" />
                                        Account
                                    </button>
                                </Link>
                                <div
                                    className={`absolute -left-10 top-11 bg-white z-10 ${accountDropDown ? "block" : "hidden"} `}
                                    style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
                                >
                                    <div className="relative">
                                        <div
                                            style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
                                            className={` ms-10 bg-white h-10 w-10  rotate-45`}
                                        ></div>
                                        <div
                                            className="absolute bg-white top-0 w-56 rounded-ss-md rounded-se-md "
                                            style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
                                        >
                                            <MyAccountSideMenu />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className=" pb-2">
                            <Link to={"/login-with-email"}>
                                <button>
                                    <BsPerson className="w-6 h-6 text-[#000000]" />
                                    Login
                                </button>
                            </Link>
                         
                        </div>
                        )}

                        <button className="pb-2" onClick={() => setWishListDrawerOpen(true)}>
                            <AiOutlineHeart className="w-6 h-6 text-[#000000]" />
                            Wishlist
                        </button>

                        <button
                            onClick={() => setOpen(true)}
                            className="pb-2 text-[#000000D9] text-[10px] font-medium leading-normal tracking-tighter  text-center"
                        >
                            <MdOutlineShoppingBag className="w-6 h-6 container text-[#000000D9]" />
                            My Bag
                        </button>

                        {/* floating button start */}
                        <div
                            onClick={() => setOpen(true)}
                            className="absolute top-[200%] right-0 rounded-ss-lg rounded-es-lg overflow-hidden hover:cursor-pointer"
                        >
                            <div className="bg-[#192038]  py-3 px-4 flex flex-col items-center">
                                <PiShoppingBagOpenFill size={35} className="text-white" />
                                <p className="text-white font-Inter text-sm font-medium leading-normal tracking-[-0.42px]">3 Items</p>
                            </div>
                            <div className="bg-[#0094CF]  py-3 px-4 flex flex-col items-center">
                                <p className="text-white font-Inter text-sm font-medium leading-normal tracking-[-0.42px]">৳ 2,247</p>
                            </div>
                        </div>
                        {/* floating button end*/}
                        {/* <div className="bg-red-500 ">
                            <FloatButton
                                shape="square"
                                style={{
                                    right: 0,
                                    top: 20
                                    
                                }}
                                tooltip={<div>Documents</div>}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* navbar-first-row end */}
            {/* border */}
            <div className="border-t-[0.2px] border-b-[0.2px] ">
                {/* navbar-second-row start */}
                <div className="navbar-second-row  container mx-auto">
                    {/* left side start */}
                    <div className="left-side relative " onMouseEnter={() => setIsBrandOpen(true)} onMouseLeave={() => setIsBrandOpen(false)}>
                        {/* <div className={`absolute  w-full flex justify-center ${isBrandOpen ? "block" : "hidden"}`}>
                            <img src={NavbarHoverIcon} alt="" />
                        </div> */}

                        <div className=" flex items-center">
                            <CategoryTitle title={"Makeup"} />
                            <CategoryTitle title={"Skin"} />
                            <CategoryTitle title={"Hair"} />
                            <CategoryTitle title={"Personal Care"} />
                            <CategoryTitle title={"Mom & Baby"} />
                            <CategoryTitle title={"Natural"} />
                        </div>
                        <DropDownWithMultilevelSideMenu menuData={menuData} isBrandOpen={isBrandOpen} />
                    </div>
                    {/* left side end */}
                    {/* right side start */}
                    <div className="right-side ">
                        <Link to={"/campaign"}>
                            <button className="bg-[#3734E2]">Puja Sale</button>
                        </Link>
                        <Link to={"/campaign"}>
                            <button className="bg-[#D90068]">Buy 1 Get 1</button>
                        </Link>
                        <Link to={"/campaign"}>
                            <button className="bg-[#9747FF]">Clearance Sale</button>
                        </Link>
                    </div>
                    {/* right side end */}
                </div>
                {/* navbar-second-row end */}
            </div>
        </div>
    );
};

export default PcNavBar;
