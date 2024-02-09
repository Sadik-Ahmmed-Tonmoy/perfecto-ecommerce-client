import { Divider } from "antd";
import React, { useContext } from "react";
import { FaArrowLeftLong, FaStarOfLife } from "react-icons/fa6";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { useForm } from "react-hook-form";
import { Input } from "antd";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { LogicProviderContext } from "../../providers/LogicProvider";
const { TextArea } = Input;

const Checkout = () => {
  const { open, setOpen, setWishListDrawerOpen } =
    useContext(LogicProviderContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/order-confirmed");
  };

  return (
    <div className="container mx-auto px-[10px] mb-10 md:mb-20">
      <div className="flex justify-between my-3 md:my-6">
        <h3 className="text-black font-inter text-2xl md:text-[30px] font-semibold leading-10">
          Checkout
        </h3>
        <span
          onClick={() => setOpen(true)}
          className="flex gap-1 items-center text-[#0094CF] font-inter text-sm font-medium leading-normal"
        >
          <FaArrowLeftLong />
          <p>Back to Cart</p>
        </span>
      </div>
      <div
        style={{ boxShadow: "0px 0px 24px 0px rgba(228, 237, 240, 0.65)" }}
        className=" bg-[#FFF] rounded-lg flex flex-col md:flex-row"
      >
        {/* left side start */}
        <div className="w-full md:w-6/12 md:border-e-[0.5px] border-[#ECECEC] py-4 px-2 xs:py-6 xs:px-5 lg:py-[30px] lg:px-[32px]">
          <h3 className="text-black font-inter text-[20px] font-semibold leading-[20px] mb-4">
            Shipping Information
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mb-5">
                <label>
                  <span className="flex text-sm font-medium mb-3">
                    Full Name
                    <FaStarOfLife size={6} className="text-[#F40F6F]" />
                  </span>
                </label>
                <input
                  {...register("fullName", {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^[A-Za-z\s\-,'.]+$/,
                  })}
                  type="number" // Change type to text to allow leading zeros
                  placeholder="Enter your full name"
                  className="p-2 w-full rounded-sm bg-white border-[0.5px] text-[14px] border-[#bfbfbf]"
                />
                {errors.fullName && errors.fullName.type === "required" && (
                  <span className="text-red-600">Full Name is required</span>
                )}
                {errors.fullName && errors.fullName.type === "minLength" && (
                  <span className="text-red-600">
                    Full Name should be at least 2 characters long
                  </span>
                )}
                {errors.fullName && errors.fullName.type === "maxLength" && (
                  <span className="text-red-600">
                    Full Name should not exceed 50 characters
                  </span>
                )}
                {errors.fullName && errors.fullName.type === "pattern" && (
                  <span className="text-red-600">
                    Please enter a valid Full Name
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div className="mb-5">
                  <label>
                    <span className="flex text-sm font-medium mb-3">
                      Phone Number
                      <FaStarOfLife size={6} className="text-[#F40F6F]" />
                    </span>
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /^0\d{10}$/, // Regular expression for 11 digits starting with 0
                    })}
                    type="number" // Change type to text to allow leading zeros
                    placeholder="Phone number"
                    className="p-2 w-full rounded-sm bg-white border-[0.5px] text-[14px] border-[#bfbfbf]"
                  />
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="text-red-500">
                      Phone number must start with 0 and be 11 digits
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="mb-5">
                  <label>
                    <span className="flex text-sm font-medium mb-3">
                      Email (Optional)
                      {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
                    </span>
                  </label>
                  <input
                    {...register("email", {
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for basic email format validation
                    })}
                    // onChange={() => setErrorFromAPI(null)}
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black text-opacity-50 text-[14px] font-normal leading-normal  tracking-[-0.14px]"
                  />
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="text-red-500">
                      Please enter a valid email address
                    </p>
                  )}
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="mb-5">
                  <label>
                    <span className="flex text-sm font-medium mb-3">
                      District / State
                      <FaStarOfLife size={6} className="text-[#F40F6F]" />
                    </span>
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /^0\d{10}$/, // Regular expression for 11 digits starting with 0
                    })}
                    type="number" // Change type to text to allow leading zeros
                    placeholder="Phone number"
                    className="p-2 w-full rounded-sm bg-white border-[0.5px] text-[14px] border-[#bfbfbf]"
                  />
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="text-red-500">
                      Phone number must start with 0 and be 11 digits
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="mb-5">
                  <label>
                    <span className="flex text-sm font-medium mb-3">
                      City
                      <FaStarOfLife size={6} className="text-[#F40F6F]" />
                    </span>
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /^0\d{10}$/, // Regular expression for 11 digits starting with 0
                    })}
                    type="number" // Change type to text to allow leading zeros
                    placeholder="Phone number"
                    className="p-2 w-full rounded-sm bg-white border-[0.5px] text-[14px] border-[#bfbfbf]"
                  />
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p className="text-red-500">
                      Phone number must start with 0 and be 11 digits
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>

              <div className="mb-5 md:mb-9">
                <label>
                  <span className="text-sm flex font-medium mb-3 text-black">
                    Address
                    <FaStarOfLife size={6} className="text-[#F40F6F]" />
                  </span>
                </label>
                <input
                  type="text"
                  {...register("b_address", {
                    required: true,
                    minLength: 8,
                  })}
                  placeholder="Enter your detailed address"
                  className="p-2 w-full rounded-sm bg-white border-[0.5px] text-[14px] border-[#bfbfbf]"
                />
                {errors.b_address && errors.b_address.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.b_address && errors.b_address.type === "minLength" && (
                  <span className="text-red-600">
                    Address must be at least 8 characters
                  </span>
                )}
              </div>
            </div>
          </form>
          <div className="flex items-center gap-2 mb-2 md:mb-8">
            <input type="checkbox" />
            <p className="text-[#000000CC] font-inter text-sm font-medium leading-normal tracking-[-0.14px]">
              Save this information for next time
            </p>
          </div>
          <div>
            <h3 className="text-black font-inter text-xl font-semibold leading-[40px] md:mb-3">
              Choose Shipping Method
            </h3>
            <div className="flex items-center gap-2 mb-1 md:mb-3">
              <input type="radio" className="mt-[2px]" />
              <p className="text-black font-inter text-sm font-semibold leading-normal">
                Inside Dhaka{" "}
                <span className="whitespace-nowrap">
                  (Delivery charge: ৳ 60)
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2 md:mb-6">
              <input type="radio" className="mt-[2px]" />
              <p className="text-black font-inter text-sm font-normal leading-normal">
                Outside Dhaka{" "}
                <span className="whitespace-nowrap">
                  (Delivery charge: ৳ 100)
                </span>
              </p>
            </div>
            <div>
              <p className="text-black font-inter text-sm font-medium leading-normal mb-1 md:mb-3">
                Order Notes (Optional)
              </p>

              <textarea
                name="orderNotes"
                {...register("orderNotes", {
                  required: true,
                })}
                placeholder="Write your message"
                rows="4"
                className="border text-[14px] rounded w-full p-2"
              ></textarea>
            </div>
          </div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="w-full md:w-6/12 p-2 xs:p-5 s lg:p-8">
          <div className="p-3 md:p-4 bg-[#EEFAFF] rounded-md">
            <div className="bg-[#fff] rounded-4px] py-2 px-2 xs:py-3 xs:px-3 lg:py-5 lg:px-6 mb-4 rounded-[4px]">
              <h3 className="text-black font-inter text-xl font-semibold leading-normal md:mb-2">
                Your Order Summary
              </h3>
              {/* per item start */}
              <div className="flex items-center border-b-[0.3px]  py-3">
                <div className="w-full">
                  <p className="text-[#000000CC] font-inter text-sm font-medium leading-[18px] tracking-[-0.14px] mb-[6px] w-11/12">
                    Lakme Absolute Skin Dew Color Sensational Ultimattes Satin
                    Li...
                  </p>
                  <div className="flex items-center">
                    <span className="text-[#000000a6] font-inter text-xs font-normal leading-normal flex items-center gap-1">
                      Qty:{" "}
                      <p className="text-black font-inter text-xs font-semibold leading-normal">
                        1
                      </p>
                    </span>{" "}
                    <Divider type="vertical" />
                    <span className="text-[#000000A6] font-inter text-xs font-normal leading-normal flex items-center gap-1">
                      Size:{" "}
                      <p className="text-[#000000CC] font-inter text-xs font-medium leading-normal">
                        3.4ml
                      </p>
                    </span>
                  </div>
                </div>
                <p className="text-[#000000CC] text-right font-inter text-sm font-semibold leading-normal whitespace-nowrap">
                  ৳ 1,450
                </p>
              </div>
              {/* per item end*/}
              {/* per item start */}
              <div className="flex items-center border-b-[0.3px] py-3">
                <div className="w-full">
                  <p className="text-[#000000CC] font-inter text-sm font-medium leading-[18px] tracking-[-0.14px] mb-[6px] w-11/12">
                    Lakme Absolute Skin Dew Color Sensational Ultimattes Satin
                    Li...
                  </p>
                  <div className="flex items-center">
                    <span className="text-[#000000a6] font-inter text-xs font-normal leading-normal flex items-center gap-1">
                      Qty:{" "}
                      <p className="text-black font-inter text-xs font-semibold leading-normal">
                        1
                      </p>
                    </span>{" "}
                    <Divider type="vertical" />
                    <span className="text-[#000000A6] font-inter text-xs font-normal leading-normal flex items-center gap-1">
                      Size:{" "}
                      <p className="text-[#000000CC] font-inter text-xs font-medium leading-normal">
                        3.4ml
                      </p>
                    </span>
                  </div>
                </div>
                <p className="text-[#000000CC] text-right font-inter text-sm font-semibold leading-normal whitespace-nowrap">
                  ৳ 1,450
                </p>
              </div>
              {/* per item end*/}

              <div className="border-b-[0.3px]">
                <div className="flex justify-between my-1 xs:my-3">
                  <p className="text-black font-inter text-sm md:text-base font-medium leading-normal">
                    Items Subtotal
                  </p>
                  <p className="text-black text-right font-inter text-sm md:text-base font-semibold leading-normal">
                    ৳ 1,450
                  </p>
                </div>
                <div className="flex justify-between my-1 xs:my-3">
                  <p className="text-black font-inter text-sm md:text-base font-medium leading-normal">
                    Shipping Fee
                  </p>
                  <p className="text-black text-right font-inter text-sm md:text-base font-semibold leading-normal">
                    ৳ 60
                  </p>
                </div>
              </div>

              <div className="flex justify-between my-2 xs:my-3">
                <p className="text-black font-inter text-lg font-semibold leading-normal tracking-[-0.18px]">
                  Grand Total
                </p>
                <p className="text-black text-right font-inter text-lg font-bold leading-normal">
                  ৳ 1,510
                </p>
              </div>
            </div>
            <div className="bg-[#fff] rounded-4px] pt-2 px-2 md:pt-5 md:px-6 rounded-[4px] mb-[17px]">
              <h3 className="text-black font-inter text-xl font-semibold leading-normal md:mb-2">
                Choose Payment Method
              </h3>
              <div className="flex items-start gap-2 border-b-[0.3px] py-3">
                <input type="radio" className="mt-2" />
                <div>
                  <p className="text-black font-inter xs:text-lg font-medium leading-normal">
                    Online payment via SslCommerz
                  </p>
                  <p className="text-[#00000099] font-inter text-xs font-normal leading-[18px]">
                    The largest payment gateway aggregator in Bangladesh and a
                    pioneer in the FinTech industry since 2010
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 py-3">
                <input type="radio" className="mt-2" />
                <div>
                  <p className="text-black font-inter xs:text-lg font-medium leading-normal">
                    Cash on delivery (COD)
                  </p>
                  <p className="text-[#00000099] font-inter text-xs font-normal leading-[18px]">
                    Pay with cash upon delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <input type="checkbox" className="mt-[6px]" />
              <p className="text-[#000000CC] font-inter text-base font-normal leading-normal">
                I’ve read and accept the{" "}
                <span className="text-black font-semibold">T&Cs</span> and{" "}
                <span className="text-black font-semibold">
                  {" "}
                  Privacy Policy
                </span>
              </p>
            </div>
            <Link to={"/order-confirmed"}>
              <Button
                title={"Place Order"}
                type={"submit"}
                className={"mb-2 py-3 w-full "}
              >
                Place Order
              </Button>
            </Link>
          </div>
        </div>
        {/* right side end*/}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Checkout;
