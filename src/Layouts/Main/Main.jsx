import React from "react";
import "../../scss/styles.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Main.css";

const Main = () => {
    return (
        <div className="overflow-hidden">
            <div className="fixed z-20 w-full bg-white">
                <Navbar />
            </div>
            <div className="pt-[95px] md:pt-[128px] lg:pt-[108px] ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
