import { ClockCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { Divider, Modal, Timeline } from "antd";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SearchSelectLabelLess } from "../../../components/SearchSelectLabelLess/SearchSelectLabelLess";
import Button from "../../../components/ui/Button";
AOS.init();

const MyOrderDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const demoList = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "disabled",
      label: "Disabled",
    },
  ];

  const [cancellationSelectedValue, setCancellationSelectedValue] = useState(
    {}
  );

  return (
    <>
      <div
        style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }}
        className="rounded-lg bg-white"
      >
        <div className="py-3 px-3 md:py-2 lg:py-5 md:px-6 lg:px-8 flex flex-wrap justify-between border-b-[0.5px] border-[#ECECEC]">
          <h3 className="text-black text-opacity-80 font-inter font-semibold leading-[33.5px]">
            Estimated Delivery: 04 Nov, 2023
          </h3>
          <Button onClick={showModal}>Cancel Order</Button>
          <Modal
            title="Cancel Order"
            open={isModalOpen}
            onCancel={handleCancel}
            okButtonProps={{
              hidden: true,
            }}
            cancelButtonProps={{
              hidden: true,
            }}
          >
            <div className="w-full px-5">
              <h5 className="text-black font-Inter text-base font-medium leading-normal mb-1">
                Order cancel request
              </h5>
              <p className="text-[#000000CC] font-Inter text-sm font-normal leading-[20px] mb-5">
                We do our best to honor cancellation requests. We’ll send an
                email to let you know if your order’s been cancelled.
              </p>
              <p className="text-black text-sm font-medium mb-3">
                Reason for cancellation
              </p>
              <SearchSelectLabelLess
                placeholder={"Select reason"}
                data={demoList}
                required={true}
                isClearable={false}
                handleChange={(e) => {
                  if (e) {
                    setCancellationSelectedValue({
                      cancel_id: e.value,
                      cancel_reason: e.label,
                    });
                  }
                }}
                name="cancellationSelectedValue"
              />
              <Button className=" mt-2 mb-6">Confirm</Button>
            </div>
          </Modal>
        </div>
        {/* mobile horizontal time start */}
        <div className="flex items-center lg:hidden mt-2 mb-14 w-9/12 mx-auto text-xs ps-[1px]">
          <div className="border-[3px] border-[#52c41a] p-[2px] h-2 w-2 rounded-full relative">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              className="absolute top-2 -left-[1000%] text-center"
            >
              <>
                <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight">
                  Ordered
                </p>
                <p className="text-[#000000CC] font-inter font-normal leading-normal whitespace-nowrap">
                  24 Nov, 2023
                </p>
              </>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="border border-[#52c41a] h-0 w-full"
          ></div>
          <div className="border-[3px] border-[#1677ff] p-[2px] h-2 w-2 rounded-full relative">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1300"
              className="absolute top-2 -left-[750%] text-center"
            >
              <>
                <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight">
                  Processing
                </p>
              </>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="border h-0 w-full"
          ></div>
          <div className="border-[3px] border-[#bfbfbf] p-[2px] h-2 w-2 rounded-full relative">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1800"
              className="absolute top-2 -left-[600%] text-center"
            >
              <>
                <p>Shipped</p>
              </>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="border h-0 w-full"
          ></div>
          <div className="border-[3px] border-[#bfbfbf] p-[2px] h-2 w-2 rounded-full relative">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="2200"
              className="absolute top-2 -left-[1100%] text-center"
            >
              <>
                <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight">
                  Estimated Delivery
                </p>
                <p className="text-[#000000CC] font-inter font-normal leading-normal whitespace-nowrap">
                  24 Nov, 2023
                </p>
              </>
            </div>
          </div>
        </div>
        {/* mobile horizontal time end */}
        <div className="py-3 px-1 xs:px-3 md:mb-3 md:py-3 lg:py-6 md:px-6 lg:px-8">
          {/* order details start  */}
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="lg:w-6/12">
              <div>
                {/* <Timeline
                                    pending="Recording..."
                                    items={[
                                        {
                                            color: "green",
                                            children: (
                                                <>
                                                    <p className="text-[#000000CC] font-inter text-base font-medium leading-normal tracking-tight">
                                                        Ordered
                                                    </p>
                                                    <p className="text-[#000000CC] font-inter text-sm font-normal leading-normal">24 Nov, 2023</p>
                                                </>
                                            ),
                                        },
                                        {
                                            //   color: 'green',
                                            // pending:true,

                                            children: (
                                                <>
                                                    <p className="text-[#000000CC] font-inter text-base font-medium leading-normal tracking-tight">
                                                        Processing
                                                    </p>
                                                    <p className="text-[#000000CC] font-inter text-sm font-normal leading-normal">
                                                        <br />
                                                    </p>
                                                </>
                                            ),
                                        },
                                        {
                                            color: "gray",
                                            children: (
                                                <>
                                                    <p>Shipped</p>
                                                    <p>
                                                        <br />
                                                    </p>
                                                </>
                                            ),
                                        },
                                        {
                                            color: "#00CCFF",
                                            dot: <SmileOutlined />,
                                            children: (
                                                <>
                                                    <p className="text-[#000000CC] font-inter text-base font-medium leading-normal tracking-tight">
                                                        Estimated Delivery
                                                    </p>
                                                    <p className="text-[#000000CC] font-inter text-sm font-normal leading-normal">24 Nov, 2023</p>
                                                </>
                                            ),
                                        },
                                    ]}
                                /> */}
                {/* vertical timeline for pc start */}
                <div className="hidden lg:block mt-5 mb-12">
                  <div className="flex flex-col items-center ps-[1px] w-min h-64">
                    <div className="border-[3px] border-[#52c41a] p-[2px] h-2 w-2 rounded-full relative">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="absolute -top-5 left-6"
                      >
                        <>
                          <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight">
                            Ordered
                          </p>
                          <p className="text-[#000000CC] font-inter text-sm font-normal leading-normal whitespace-nowrap">
                            24 Nov, 2023
                          </p>
                        </>
                      </div>
                    </div>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="border border-[#52c41a] h-full w-[1px]"
                    ></div>
                    <div className="border-[3px] border-[#1677ff] p-[2px] h-2 w-2 rounded-full relative">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        className="absolute -top-3 left-6 text-center"
                      >
                        <>
                          <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight">
                            Processing
                          </p>
                        </>
                      </div>
                    </div>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="border h-full w-[1px]"
                    ></div>
                    <div className="border-[3px] border-[#bfbfbf] p-[2px] h-2 w-2 rounded-full relative">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1800"
                        className="absolute -top-3 left-6 text-center"
                      >
                        <>
                          <p>Shipped</p>
                        </>
                      </div>
                    </div>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="border h-full w-[1px]"
                    ></div>
                    <div className="border-[3px] border-[#bfbfbf] p-[2px] h-2 w-2 rounded-full relative">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="2200"
                        className="absolute -top-5 left-6"
                      >
                        <>
                          <p className="text-[#000000CC] font-inter font-medium leading-normal tracking-tight whitespace-nowrap">
                            Estimated Delivery
                          </p>
                          <p className="text-[#000000CC] font-inter text-sm  font-normal leading-normal whitespace-nowrap">
                            24 Nov, 2023
                          </p>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
                {/* vertical timeline for pc end*/}
              </div>
              <Divider className="hidden lg:block -mt-2" />
              <div className="-mt-7 lg:-mt-2">
                <h5 className="text-black  text-base font-semibold leading-normal tracking-[-0.16px] mb-2">
                  Shipping Address
                </h5>
                <p className="text-[#000000A6] font-inter text-sm font-medium leading-[22px]">
                  District: <span className="text-[#000000CC] ">Dhaka</span>{" "}
                </p>
                <p className="text-[#000000A6] font-inter text-sm font-medium leading-[22px]">
                  City: <span className="text-[#000000CC] ">Dhaka</span>{" "}
                </p>
                <p className="text-[#000000A6] font-inter text-sm font-medium leading-[22px]">
                  Address:{" "}
                  <span className="text-[#000000CC] ">
                    Dhanmondi 32, Kalabagan, Dhaka -1200
                  </span>{" "}
                </p>
              </div>
              <div className="-mt-2">
                {" "}
                <Divider />
              </div>
              <div className="-mt-2">
                <h5 className="text-black  text-base font-semibold leading-normal tracking-[-0.16px] mb-2">
                  Payment Method
                </h5>
                <p className="text-[#000000A6] font-inter text-sm font-medium leading-[22px]">
                  Online payment via SslCommerz
                  {/* <span className="text-[#000000CC] ">Dhaka</span>{" "} */}
                </p>
              </div>
            </div>
            {/* right side start */}
            <div className="lg:w-6/12 border-[1px] rounded-lg pt-5">
              <div className="border-b-[1px] px-4">
                <h5 className="text-black font-inter text-base font-semibold leading-normal tracking-[-0.16px] mb-1">
                  Order #635465 -EU
                </h5>
                <p className="text-[#000000A6] font-inter text-sm font-medium leading-normal tracking-tighter mb-4">
                  Ordered: 24 Nov, 2023
                </p>
              </div>
              <div className="px-2 md:px-4 max-h-[330px] overflow-hidden overflow-y-auto">
                {/* per order start */}
                <div className="flex gap-2 sm:gap-4 w-full border-b py-2 sm:py-3 md:py-4">
                  <img
                    className="rounded-[4px] border-[0.2px]  h-16 md:h-24 w-16 md:w-24"
                    src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/kids-group-pdp.png"
                    alt=""
                  />
                  <div className="w-full h-full">
                    <div className="flex flex-col justify-between ">
                      <p className="text-black mb-1 text-sm xs:text-base tracking-tighter font-medium leading-[14px]">
                        Lakme Absolute Skin Dew Color Sensational
                      </p>
                      <div className="flex flex-wrap gap-x-2">
                        {" "}
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Size:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3.4ml
                          </span>
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Qty:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-2 items-center md:mb-1">
                        <p className="text-black text-xs md:text-base font-bold leading-normal">
                          ৳550
                        </p>
                        <p className="text-[#000000A6] text-[10px]  md:text-xs font-medium line-through">
                          ৳550
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="text-[#02792A]  text-[10px] md:text-xs font-semibold leading-normal ">
                          (-25% Off)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* per order end */}
                {/* per order start */}
                <div className="flex gap-2 sm:gap-4 w-full border-b py-2 sm:py-3 md:py-4">
                  <img
                    className="rounded-[4px] border-[0.2px]  h-16 md:h-24 w-16 md:w-24"
                    src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/kids-group-pdp.png"
                    alt=""
                  />
                  <div className="w-full h-full">
                    <div className="flex flex-col justify-between ">
                      <p className="text-black mb-1 text-sm xs:text-base tracking-tighter font-medium leading-[14px]">
                        Lakme Absolute Skin Dew Color Sensational
                      </p>
                      <div className="flex flex-wrap gap-x-2">
                        {" "}
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Size:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3.4ml
                          </span>
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Qty:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-2 items-center md:mb-1">
                        <p className="text-black text-xs md:text-base font-bold leading-normal">
                          ৳550
                        </p>
                        <p className="text-[#000000A6] text-[10px]  md:text-xs font-medium line-through">
                          ৳550
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="text-[#02792A]  text-[10px] md:text-xs font-semibold leading-normal ">
                          (-25% Off)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* per order end */}
                {/* per order start */}
                <div className="flex gap-2 sm:gap-4 w-full border-b py-2 sm:py-3 md:py-4">
                  <img
                    className="rounded-[4px] border-[0.2px]  h-16 md:h-24 w-16 md:w-24"
                    src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/kids-group-pdp.png"
                    alt=""
                  />
                  <div className="w-full h-full">
                    <div className="flex flex-col justify-between ">
                      <p className="text-black mb-1 text-sm xs:text-base tracking-tighter font-medium leading-[14px]">
                        Lakme Absolute Skin Dew Color Sensational
                      </p>
                      <div className="flex flex-wrap gap-x-2">
                        {" "}
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Size:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3.4ml
                          </span>
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="whitespace-nowrap text-[#000000A6] text-opacity-65 font-inter text-xs font-normal leading-normal">
                          Qty:{" "}
                          <span className="text-[#000000CC] font-medium">
                            3
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-2 items-center md:mb-1">
                        <p className="text-black text-xs md:text-base font-bold leading-normal">
                          ৳550
                        </p>
                        <p className="text-[#000000A6] text-[10px]  md:text-xs font-medium line-through">
                          ৳550
                        </p>
                        <div className="border-[0.1px] h-4"></div>
                        <p className="text-[#02792A]  text-[10px] md:text-xs font-semibold leading-normal ">
                          (-25% Off)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* per order end */}
              </div>
              <div className="p-2 md:p-3 border-b mx-2 md:mx-4">
                <div className="flex justify-between md:mb-2">
                  <p className="text-[#000000CC] font-inter text-sm md:text-base font-medium leading-normal">
                    Items Subtotal
                  </p>
                  <p className="text-[#000000CC] text-right font-inter text-sm md:text-base font-semibold leading-normal">
                    ৳ 1,450
                  </p>
                </div>
                <div className="flex justify-between md:mb-2">
                  <p className="text-[#000000CC] font-inter text-sm md:text-base font-medium leading-normal">
                    Shipping Fee
                  </p>
                  <p className="text-[#000000CC] text-right font-inter text-sm md:text-base font-semibold leading-normal">
                    ৳ 100
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#000000CC] font-inter text-sm md:text-base font-medium leading-normal">
                    Discount
                  </p>
                  <p className="text-[#000000CC] text-right font-inter text-sm md:text-base font-semibold leading-normal">
                    -৳ 250
                  </p>
                </div>
              </div>
              <div className="p-2 md:p-4 mx-2 md:mx-4">
                <div className="flex justify-between mb-2">
                  <p className="text-[#000000CC] font-inter text-base md:text-lg font-semibold leading-[-0.18px]">
                    Grand Total
                  </p>
                  <p className="text-black text-right font-inter text-base md:text-lg font-bold leading-normal">
                    ৳ 1,550
                  </p>
                </div>
              </div>
            </div>
            {/* right side end*/}
          </div>
          {/* order details end */}
        </div>
      </div>
    </>
  );
};

export default MyOrderDetails;
