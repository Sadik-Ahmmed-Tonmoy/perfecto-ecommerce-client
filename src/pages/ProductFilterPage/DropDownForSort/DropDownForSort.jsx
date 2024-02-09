/* eslint-disable react/prop-types */
import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const DropDownForSort = ({ title, link = "/product-filter" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  useEffect(() => {
    // Get the existing search parameters
    const searchParams = new URLSearchParams(location.search);
    const selectedCheckboxValue = searchParams.get("sort_by");

    // Set the initial state based on the URL parameters
    setSelectedCheckbox(selectedCheckboxValue || "Discount");
  }, [location.search]);

  const handleCheckboxChange = (key) => {
    // Update the selected checkbox state
    // setSelectedCheckbox(key);

    // Get the existing search parameters
    const searchParams = new URLSearchParams(location.search);

    // Update the 'sort_by' parameter
    searchParams.set("sort_by", key);

    // Update the URL
    navigate(`${link}?${searchParams.toString()}`);
  };

  return (
    <div className="w-full rounded-sm bg-white">
      <div className="">
        <Collapse
          bordered={false}
          size="small"
          className="bg-white"
          items={[
            {
              key: "1",
              label: (
                <p className="ps-2 text-black font-inter text-base font-medium leading-normal">
                  {title} {selectedCheckbox}
                </p>
              ),
              children: (
                <div>
                  <label
                    className="hover:cursor-pointer flex items-center gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                    onClick={() => handleCheckboxChange("Popularity")}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className={`rounded-full h-4 w-4 ${
                          selectedCheckbox === "Popularity"
                            ? "bg-[#5DC9F4] text-white"
                            : "bg-white"
                        } border border-[#0094CF] appearance-none`}
                      />
                      <BsCheck
                        size={16}
                        className="absolute top-0 text-white"
                      />
                    </div>
                    Popularity
                  </label>

                  <label
                    className="hover:cursor-pointer flex items-center gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                    onClick={() => handleCheckboxChange("Discount")}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className={`rounded-full h-4 w-4 ${
                          selectedCheckbox === "Discount"
                            ? "bg-[#5DC9F4] text-white"
                            : "bg-white"
                        } border border-[#0094CF] appearance-none`}
                      />
                      <BsCheck
                        size={16}
                        className="absolute top-0 text-white"
                      />
                    </div>
                    Discount
                  </label>
                  <label
                    className="hover:cursor-pointer flex items-center gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                    onClick={() => handleCheckboxChange("Name")}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className={`rounded-full h-4 w-4 ${
                          selectedCheckbox === "Name"
                            ? "bg-[#5DC9F4] text-white"
                            : "bg-white"
                        } border border-[#0094CF] appearance-none`}
                      />
                      <BsCheck
                        size={16}
                        className="absolute top-0 text-white"
                      />
                    </div>
                    Name
                  </label>
                  <label
                    className="hover:cursor-pointer flex items-center gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                    onClick={() => handleCheckboxChange("Customer Top Rated")}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className={`rounded-full h-4 w-4 ${
                          selectedCheckbox === "Customer Top Rated"
                            ? "bg-[#5DC9F4] text-white"
                            : "bg-white"
                        } border border-[#0094CF] appearance-none`}
                      />
                      <BsCheck
                        size={16}
                        className="absolute top-0 text-white"
                      />
                    </div>
                    Customer Top Rated
                  </label>
                  <label
                    className="hover:cursor-pointer flex items-center gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min ms-1 mb-3"
                    onClick={() => handleCheckboxChange("New Arrivals")}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className={`rounded-full h-4 w-4 ${
                          selectedCheckbox === "New Arrivals"
                            ? "bg-[#5DC9F4] text-white"
                            : "bg-white"
                        } border border-[#0094CF] appearance-none`}
                      />
                      <BsCheck
                        size={16}
                        className="absolute top-0 text-white"
                      />
                    </div>
                    New Arrivals
                  </label>
                </div>
              ),
            },
          ]}
          expandIcon={({ isActive }) => (
            <DownOutlined
              className="text-black font-bold"
              rotate={isActive ? 180 : 0}
            />
          )}
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};

export default DropDownForSort;
