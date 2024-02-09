import { RightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import { ScrollRestoration } from "react-router-dom";

const text = `
– Perfecto brings 100% genuine high end & drugstore products which are directly sourced from the brands & authorized distributors for our customers.
`;

const FrequentlyAskedQuestions = () => {
    return (
        <div className="container mx-auto px-[10px] mb-10 md:mb-20">
            <div className="flex justify-center my-3 md:my-6">
                <h3 className="text-black font-inter text-xl font-semibold leading-normal">Frequently Asked Questions</h3>
            </div>
            <div style={{ boxShadow: "0px 0px 24px 0px rgba(228, 237, 240, 0.65)" }} className=" bg-[#FFF] rounded-lg flex justify-center">
                <div className="w-full xs:w-10/12 pt-2 pb-4 px-2">
                    <div className="border-b-[1px]">
                        <Collapse
                            bordered={false}
                            size="small"
                            className="bg-white"
                            items={[
                                {
                                    key: "1",
                                    label: (
                                        <p className="text-black font-inter text-base font-semibold leading-normal">Are the products authentic?</p>
                                    ),
                                    children: <p className="text-[#000000A6] font-inter text-sm font-medium leading-5">{text}</p>,
                                },
                            ]}
                            expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
                            expandIconPosition="end"
                        />
                    </div>
                    <div className="border-b-[1px]">
                        <Collapse
                            bordered={false}
                            size="small"
                            className="bg-white"
                            items={[
                                {
                                    key: "1",
                                    label: (
                                        <p className="text-black font-inter text-base font-semibold leading-normal">How do I place order at Perfecto Store?</p>
                                    ),
                                    children: <p className="text-[#000000A6] font-inter text-sm font-medium leading-5">{text}</p>,
                                },
                            ]}
                            expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
                            expandIconPosition="end"
                        />
                    </div>
                </div>
            </div>
            <ScrollRestoration/>
        </div>
    );
};

export default FrequentlyAskedQuestions;
