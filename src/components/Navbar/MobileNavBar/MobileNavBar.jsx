import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./MobileNavBar.scss";
import logo from "../../../assets/logo/logo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Drawer, Space } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../ui/Button";
import { IoClose } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import MultiLayerMenu from "../../MultiLayerMenu/MultiLayerMenu";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LogicProviderContext } from "../../../providers/LogicProvider";
import useAuthUser from "../../../hooks/useAuthUser";

const MobileNavBar = () => {
    const { open, setOpen, wishListDrawerOpen, setWishListDrawerOpen } = useContext(LogicProviderContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const {userData} = useAuthUser()
    const onClose = () => {
        setMenuOpen(false);
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    // const userData = false;
    const menuData = [
        {
            name: "Health & Beauty",
            sub_items: [
                {
                    name: "Skin Care",
                    sub_sub_items: [
                        { name: "Facewash", link: "/" },
                        { name: "Face Mask", link: "/" },
                        { name: "Serum", link: "/" },
                        { name: "Skin Toner", link: "/" },
                        { name: "Sunscreen", link: "/" },
                        { name: "Lip Bum", link: "/" },
                    ],
                },
                {
                    name: "Hair Care",
                    sub_sub_items: [
                        { name: "Shampoo", link: "/" },
                        { name: "Conditioner", link: "/" },
                        { name: "Hair Serum", link: "/" },
                        { name: "Hair Mask", link: "/" },
                        { name: "Hair Oil", link: "/" },
                    ],
                },
                {
                    name: "Bath & Body",
                    sub_sub_items: [
                        { name: "Body Wash", link: "/" },
                        { name: "Bath Bombs", link: "/" },
                    ],
                },
                {
                    name: "Fragrances",
                    sub_sub_items: [
                        { name: "Perfumes", link: "/" },
                        { name: "Colognes", link: "/" },
                        { name: "Body Sprays", link: "/" },
                        { name: "Essential Oils", link: "/" },
                        { name: "Scented Candles", link: "/" },
                    ],
                },
                {
                    name: "Personal Care",
                    sub_sub_items: [
                        {
                            name: "Hygiene Products",
                            link: "/",
                        },
                        { name: "Dental Care", link: "/" },
                    ],
                },
                {
                    name: "Hair Care",
                    sub_sub_items: [
                        { name: "Shampoo", link: "/" },
                        { name: "Conditioner", link: "/" },
                        { name: "Hair Serum", link: "/" },
                        { name: "Hair Mask", link: "/" },
                        { name: "Hair Oil", link: "/" },
                    ],
                },
            ],
        },
        {
            name: "Electronics",
            sub_items: [
                {
                    name: "Home Appliances",
                    sub_sub_items: [
                        {
                            name: "Kitchen Appliances",
                            link: "/",
                        },
                        { name: "Electronics", link: "/" },
                    ],
                },
                {
                    name: "Computer Accessories",
                    sub_sub_items: [
                        { name: "Laptops", link: "/" },
                        {
                            name: "Computer Accessories",
                            link: "/",
                        },
                    ],
                },
                {
                    name: "Gadgets and Wearables",
                    sub_sub_items: [
                        {
                            name: "Electronics Gadgets",
                            link: "/",
                        },
                        {
                            name: "Wearable Technology",
                            link: "/",
                        },
                    ],
                },
            ],
        },
        {
            name: "Beauty",
            sub_items: [
                {
                    name: "Personal Care",
                    sub_sub_items: [
                        {
                            name: "Grooming Appliances",
                            link: "/",
                        },
                        {
                            name: "Skincare Electronics",
                            link: "/",
                        },
                    ],
                },
                {
                    name: "Cosmetics and Tools",
                    sub_sub_items: [
                        {
                            name: "Makeup",
                            link: "/",
                        },
                        {
                            name: "Beauty Tools",
                            link: "/",
                        },
                    ],
                },
                {
                    name: "Health Devices",
                    sub_sub_items: [
                        {
                            name: "Medical Devices",
                            link: "/",
                        },
                        {
                            name: "Health Wearables",
                            link: "/",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="mobile-navbar pt-2 pb-3 px-2">
            <div className="first-row">
                <div className="" onClick={() => setMenuOpen(true)}>
                    <HiOutlineMenuAlt1 size={20} />
                </div>
                <Drawer
                    // title="Basic Drawer"
                    placement="left"
                    width="90%"
                    closable={false}
                    onClose={onClose}
                    open={menuOpen}
                    closeIcon={<FaArrowLeftLong style={{ fontSize: "24px", color: "black" }} />}
                    // extra={
                    //   <Space>
                    //     <Button onClick={onClose}>Cancel</Button>
                    //     <Button type="primary" onClick={onClose}>
                    //       OK
                    //     </Button>
                    //   </Space>
                    // }
                >
                    <div>
                        {/* drawer header start */}
                        <div className="flex items-center justify-between border-b-[1px] px-2 py-3">
                            <div className="h-5 w-28">
                                <img src={logo} className="max-h-full w-full object-cover" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setWishListDrawerOpen(true);
                                    }}
                                    variant="ghost"
                                >
                                    <AiOutlineHeart className="w-6 h-6 text-[#000000]" />
                                </Button>
                                <div onClick={onClose}>
                                    <IoClose size={25} />
                                </div>
                            </div>
                        </div>
                        {/* drawer header end */}
                        {/* drawer body start */}
                        {/* account start */}
                        {userData?.status === true ? (
                            <div className="mx-auto my-2">
                                <Link to={"/my-account/my-profile"}>
                                <div onClick={onClose} className="mx-auto rounded-full border border-black p-1 w-min h-min">
                                    <BsPerson className="font-semibold text-black " size={18} />
                                </div>
                                <p className="text-center text-black -mt- text-xs">Profile</p>
                                </Link>
                            </div>
                        ) : (
                            <div className="mx-auto my-2">
                                <div onClick={onClose} className="mx-auto rounded-full border border-black p-1 w-min h-min">
                                    <Link to={"/login-with-email"}>
                                        <BsPerson className="font-semibold text-black " size={18} />
                                    </Link>
                                </div>
                                <p className="text-center text-black -mt- text-xs">Login</p>
                            </div>
                        )}
                        <div className="flex flex-col justify-start items-start px-2 py-3">
                            <div className="mb-3 flex flex-col justify-start items-start gap-1">
                                <button className="text-red-500 text-base font-semibold ">Puja Sale</button>
                                <button className="text-[#9747ff] text-base font-semibold ">Buy 1 Get 1</button>
                                <button className="text-green-500 text-base font-semibold">Clearance Sale</button>
                            </div>
                            <div onClick={onClose} className="border-t-[1px]  w-full py-3 text-base font-semibold">
                                <Link to={"/brand-page-for-mobile"}>
                                    <p>Brands</p>
                                </Link>
                            </div>
                            <div className="border-t-[1px]  w-full py-3 text-base font-semibold">
                                Category
                                <MultiLayerMenu menuData={menuData} onClose={onClose} />
                            </div>
                            <div className="border-t-[1px]  w-full py-3 text-base font-semibold">Terms & Conditions</div>
                            <div className="border-t-[1px]  w-full py-3 text-base font-semibold">Return & Refund Policy</div>
                        </div>
                        {/* drawer body end */}
                    </div>
                </Drawer>
                <div className="h-8 w-44">
                    <img src={logo} className="max-h-full w-full object-cover" alt="" />
                </div>
                <div onClick={() => setOpen(true)}>
                    <MdOutlineShoppingBag size={20} />
                </div>
            </div>
            <div className="second-row">
                <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("search")} placeholder="Search for products..." className="input" />
                    <button type="submit">
                        <BiSearchAlt2 className="" size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MobileNavBar;
