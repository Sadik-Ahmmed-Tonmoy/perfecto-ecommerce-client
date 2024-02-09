import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Description from "../Description/Description";
import Ingredients from "../Ingredients/Ingredients";
import HowToUse from "../HowToUse/HowToUse";
import FAQ from "../FAQ/FAQ";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const TabForProductDetails = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTabChange, setSelectedTabChange] = useState("");

  useEffect(() => {
    // Get the existing search parameters
    const searchParams = new URLSearchParams(location.search);
    const selectedTabChangeValue = searchParams.get("open_tab");

    // Set the initial state based on the URL parameters
    setSelectedTabChange(selectedTabChangeValue || "Description");
  }, [location.search]);

  const handleSelectedTabChange = (title) => {
    // Update the selected checkbox state
    // setSelectedTabChange(title);

    // Get the existing search parameters
    const searchParams = new URLSearchParams(location.search);

    // Update the 'open_tab' parameter
    searchParams.set("open_tab", title);

    // Update the URL
    navigate(`/product-details?${searchParams.toString()}`);
  };

  return (
    <div
      className="rounded w-full"
      style={{ boxShadow: "0px 0px 6px 0px #E4EDF0" }}
    >
      {/* header start */}
      <div className="border-b-[1px] flex items-center gap-8  ps-5 overflow-hidden overflow-x-auto slim-scroll">
        <p
          onClick={() => handleSelectedTabChange("Description")}
          className={`text-[#000000A6] text-sm font-medium leading-5 py-4 hover:cursor-pointer ${
            selectedTabChange === "Description" &&
            "border-b-primary-color py-[15px] text-black"
          }`}
        >
          Description
        </p>
        <p
          onClick={() => handleSelectedTabChange("Ingredients")}
          className={`text-[#000000A6] text-sm font-medium leading-5 py-4 hover:cursor-pointer ${
            selectedTabChange === "Ingredients" &&
            "border-b-primary-color py-[15px] text-black"
          }`}
        >
          Ingredients
        </p>
        <p
          onClick={() => handleSelectedTabChange("How to Use")}
          className={`text-[#000000A6] text-sm font-medium leading-5 py-4 hover:cursor-pointer whitespace-nowrap ${
            selectedTabChange === "How to Use" &&
            "border-b-primary-color py-[15px] text-black"
          }`}
        >
          How to Use
        </p>
        <p
          onClick={() => handleSelectedTabChange("FAQ")}
          className={`text-[#000000A6] text-sm font-medium leading-5 py-4 pe-4 hover:cursor-pointer ${
            selectedTabChange === "FAQ" &&
            "border-b-primary-color py-[15px] text-black"
          }`}
        >
          FAQ
        </p>
      </div>
      {/* header end*/}
      {/* body start */}
      <div>
        <div
          className={`${isReadMore ? "h-full" : "max-h-56"} overflow-hidden`}
        >
          {selectedTabChange === "Description" && <Description />}
          {selectedTabChange === "Ingredients" && <Ingredients />}
          {selectedTabChange === "How to Use" && <HowToUse />}
          {selectedTabChange === "FAQ" && <FAQ />}
        </div>

        <div className="border-t-[1px] py-3 flex items-center justify-center gap-2 text-black text-center  text-sm font-semibold leading-5">
          {isReadMore ? (
            <div
              onClick={() => setIsReadMore(false)}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <p className="text-center">Read Less</p>
              <FaAngleUp />
            </div>
          ) : (
            <div
              onClick={() => setIsReadMore(true)}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <p className="text-center">Read More</p>
              <FaAngleDown />
            </div>
          )}
        </div>
      </div>
      {/* body end*/}
    </div>
  );
};

export default TabForProductDetails;
