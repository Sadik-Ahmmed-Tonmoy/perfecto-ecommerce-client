import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";
import { SearchSelectLabelLess } from "../../../components/SearchSelectLabelLess/SearchSelectLabelLess";
import Button from "../../../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import showToast from "../../../utilities/showToast";
import useUserAddress from "../../../hooks/useUserAddress";
import { BsCheck } from "react-icons/bs";

const EditAddress = () => {
    const [isEmailErrorFromApi, setIsEmailErrorFromApi] = useState("");
    const [isPhoneErrorFromApi, setIsPhoneErrorFromApi] = useState("");
    const [isResponseLoading, setIsResponseLoading] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState(false);
    const { userAddress, refetchAddress } = useUserAddress();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const { id} = useParams();
    console.log(id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        let status;
        if (userAddress?.data && userAddress?.data?.length < 1) {
            status = 1;
        } else {
            status = selectedCheckboxes === true ? 1 : 0;
        }
        const dataWithFakeDistrictAndCity = {...data, district_id: 1, city_id: 1, status: status }
        setIsResponseLoading(true);
        axiosSecure
            .post(`edit_address/${id}`, dataWithFakeDistrictAndCity)
            .then((res) => {
                if (res.data.status === true) {
                 
                    setIsResponseLoading(false);
                    // addTokenToLocalStorage(res.data.data.token);
                    showToast(res?.data?.message);
                    navigate("/my-account/my-addresses");
                    refetchAddress();
                } else {
                    setIsResponseLoading(false);
                    // Handle other cases if needed
                    showToast(res?.data?.data?.error, "error");
                }
            })
            .catch((error) => {
                setIsResponseLoading(false);
                let errorMessageList = error.response.data.data;
                showToast(errorMessageList?.error, "error");
                showToast(errorMessageList?.district_id, "error");
                showToast(errorMessageList?.city_id, "error");
            });
    };

    return (
        <>
        <div style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }} className="rounded-lg bg-white">
            <div className="py-3 ps-2 xs:ps-4 md:py-5 md:ps-8 border-b-[0.5px] border-[#ECECEC]">
                <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Addresses</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-2 px-2 xs:px-3 md:mb-3 md:pt-6 md:px-8">
                <p className="text-black font-Inter text-lg font-medium leading-normal mb-3 md:mb-5">Edit Address</p>
                <div className="md:w-11/12 lg:w-10/12 xl:w-9/12">
                    <div className="mb-3 ">
                        <label>
                            <span className="flex text-sm font-medium mb-1">
                                Full Name
                                <FaStarOfLife size={6} className="text-[#F40F6F]" />
                            </span>
                        </label>
                        <span className="relative">
                            <input
                                {...register("name", {
                                    required: true,
                                    //    minLength: 8, // Minimum password length of 8 characters
                                })}
                                type="text"
                                placeholder="Enter your full name"
                                className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black text-[14px] font-normal leading-normal tracking-[-0.14px]"
                            />
                            {/* <span className="absolute right-2 top-[3px]">
                                    <IoEyeSharp size={16} className="text-[#807D7E]" />
                                </span> */}
                        </span>
                        {errors.name && errors.name.type === "minLength" && (
                            <p className="text-red-500">Field must be at least 8 characters long</p>
                        )}
                        {errors.name && errors.name.type === "required" && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                        <div className="mb-3">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    Phone
                                    <FaStarOfLife size={6} className="text-[#F40F6F]" />
                                </span>
                            </label>
                            <input
                                {...register("phone", {
                                    required: true,
                                    pattern: /^0\d{10}$/, // Regular expression for 11 digits starting with 0
                                })}
                                onChange={() => setIsPhoneErrorFromApi("")}
                                type="number" // Change type to text to allow leading zeros
                                placeholder="Enter your phone number"
                                className="p-2 w-full rounded-sm text-[14px] bg-white border-[0.5px] border-[#bfbfbf]"
                            />
                            {isPhoneErrorFromApi && <p className="text-red-500">{isPhoneErrorFromApi}</p>}
                            {errors.phone && errors.phone.type === "pattern" && (
                                <p className="text-red-500">Phone number must start with 0 and be 11 digits</p>
                            )}
                            {errors.phone && errors.phone.type === "required" && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    Email (Optional)
                                    {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
                                </span>
                            </label>
                            <input
                                {...register("email", {
                                    // required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for basic email format validation
                                })}
                                onChange={() => setIsEmailErrorFromApi("")}
                                type="email"
                                placeholder="Enter your email address"
                                className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black  text-[14px] font-normal leading-normal  tracking-[-0.14px]"
                            />
                            {isEmailErrorFromApi && <p className="text-red-500">{isEmailErrorFromApi}</p>}
                            {errors.email && errors.email.type === "pattern" && (
                                <p className="text-red-500">Please enter a valid email address</p>
                            )}
                            {errors.email && errors.email.type === "required" && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    District / State
                                    <FaStarOfLife size={6} className="text-[#F40F6F]" />
                                </span>
                            </label>

                            {/* <SearchSelectLabelLess
                                placeholder={"Select reason"}
                                height={"40px"}
                                // data={demoList}
                                required={true}
                                isClearable={false}
                                handleChange={(e) => {
                                    // if (e) {
                                    //     setCancellationSelectedValue({
                                    //         cancel_id: e.value,
                                    //         cancel_reason: e.label,
                                    //     });
                                    // }
                                }}
                                name="cancellationSelectedValue"
                            /> */}
                            {errors.email && errors.email.type === "pattern" && (
                                <p className="text-red-500">Please enter a valid email address</p>
                            )}
                            {errors.email && errors.email.type === "required" && <span className="text-red-600">This field is required</span>}
                            {/* {errorFromAPI?.email && (
              <p className="text-red-500">
               {errorFromAPI?.email} || The email has already been taken
              </p>
            )} */}
                        </div>
                        <div className="mb-2">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    City
                                    <FaStarOfLife size={6} className="text-[#F40F6F]" />
                                </span>
                            </label>
                            {/*                               
                            <SearchSelectLabelLess
                                placeholder={"Select reason"}
                                className={"border"}
                                height={"40px"}
                                // data={demoList}
                                required={true}
                                isClearable={false}
                                handleChange={(e) => {
                                    // if (e) {
                                    //     setCancellationSelectedValue({
                                    //         cancel_id: e.value,
                                    //         cancel_reason: e.label,
                                    //     });
                                    // }
                                }}
                                name="cancellationSelectedValue"
                            /> */}
                            {errors.email && errors.email.type === "pattern" && (
                                <p className="text-red-500">Please enter a valid email address</p>
                            )}
                            {errors.email && errors.email.type === "required" && <span className="text-red-600">This field is required</span>}
                            {/* {errorFromAPI?.email && (
              <p className="text-red-500">
               {errorFromAPI?.email} || The email has already been taken
              </p>
            )} */}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>
                            <span className="text-sm flex font-medium mb-1 text-black">
                                Address
                                <FaStarOfLife size={6} className="text-[#F40F6F]" />
                            </span>
                        </label>
                        <input
                            type="text"
                            // defaultValue={BAddress}
                            {...register("address", {
                                required: true,
                                minLength: 8,
                            })}
                            // onChange={(e) => setValue("b_address", e.target.value)}
                            placeholder="Enter your detailed address"
                            className="p-2 py-[9px] text-sm font-medium tracking-[-0.14px] w-full rounded-sm  bg-white text-black border border-[#00000040]"
                        />

                        {errors.address && errors.address.type === "required" && <span className="text-red-600">This field is required</span>}
                        {errors.address && errors.address.type === "minLength" && (
                            <span className="text-red-600">Address must be at least 8 characters</span>
                        )}
                    </div>
                </div>

                <label
                    className="flex items-center hover:cursor-pointer gap-3 text-[#252728] font-inter text-sm font-normal leading-normal w-fit h-min mb-5"
                    onChange={() => setSelectedCheckboxes((prev) => !prev)}
                >
                    <div className="relative flex items-center">
                        {/* <input
                                        type="checkbox"
                                        className={`rounded h-4 w-4 ${
                                            selectedCheckboxes == (address?.status) ? "bg-[#5DC9F4] text-white" : "bg-white"
                                        } border border-[#0094CF] appearance-none`}
                                    /> */}
                        <input
                            type="checkbox"
                            className={`rounded h-4 w-4 ${
                                selectedCheckboxes == true ? "bg-[#5DC9F4] text-white" : "bg-white"
                            } border border-[#0094CF] appearance-none`}
                        />
                        <BsCheck size={16} className="absolute top-0 text-white" />
                    </div>
                    <p className="text-[#000000CC] font-inter text-sm font-medium leading-normal tracking-tighter">
                        Set as default shipping address
                    </p>
                </label>

                <Button className="border mb-5 md:mb-10 px-8">Save</Button>
            </form>
        </div>
    </>
    );
};

export default EditAddress;
