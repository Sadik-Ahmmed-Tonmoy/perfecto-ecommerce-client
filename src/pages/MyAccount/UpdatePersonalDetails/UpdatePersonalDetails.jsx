import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbEdit } from "react-icons/tb";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuthUser from "../../../hooks/useAuthUser";
import showToast from "../../../utilities/showToast";

const UpdatePersonalDetails = () => {
    const [loading, setLoading] = useState(false);
    const [errorFromAPI, setErrorFromAPI] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { userData } = useAuthUser();
    // console.log(userData?.data);

    useEffect(() => {
        if (userData.status === true) {
            setValue("name", userData?.data?.name);
            setValue("email", userData?.data?.email);
        }
    }, [setValue, userData]);

    const onSubmit = (formData) => {
        setLoading(true);
        let newData = {
          ...formData,
          phone: userData?.data?.phone,
        };

        axiosSecure
            .post("edit", newData)
            .then((res) => {
                if (res.data.status === true) {
                    // addToLocalStorage(res.data.data.token);
                    showToast(res?.data?.message, "success")
                    navigate("/my-account/my-profile");
                    setLoading(false);
                } else {
                    // Handle other cases if needed
                }
            })
            .catch((error) => {
                let errorMessageList = error.response.data.message;
                //
                setErrorFromAPI(errorMessageList);
                setLoading(false);
                //console.error('Error during registration:', error);
                // Handle errors from the API call
            });
    };

    return (
        <>
            <div style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }} className="rounded-lg bg-white">
                <div className="py-3 ps-3 md:py-5 md:ps-8 border-b-[0.5px] border-[#ECECEC]">
                    <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Profile</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="pt-3 px-3 md:mb-3 md:pt-6 md:px-8">
                    <p className="text-black font-Inter text-lg font-medium leading-normal mb-5">Edit Personal Details</p>
                    <div className="md:w-10/12 lg:w-8/12">
                        <div className="mb-[11px] ">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    Full Name
                                    {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
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
                            {errors.fullName && errors.fullName.type === "minLength" && (
                                <p className="text-red-500">Field must be at least 8 characters long</p>
                            )}
                            {errors.fullName && errors.fullName.type === "required" && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-5">
                            <label>
                                <span className="flex text-sm font-medium mb-1">
                                    Email Address
                                    {/* <FaStarOfLife size={6} className="text-[#F40F6F]" /> */}
                                </span>
                            </label>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for basic email format validation
                                })}
                                // onChange={() => setErrorFromAPI(null)}
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black  text-[14px] font-normal leading-normal  tracking-[-0.14px]"
                            />
                            {errors.email && errors.email.type === "pattern" && <p className="text-red-500">Please enter a valid email address</p>}
                            {errors.email && errors.email.type === "required" && <span className="text-red-600">This field is required</span>}
                            {/* {errorFromAPI?.email && (
                  <p className="text-red-500">
                   {errorFromAPI?.email} || The email has already been taken
                  </p>
                )} */}
                        </div>
                    </div>
                    <Button className="border mb-10 px-16">Save</Button>
                </form>
            </div>
        </>
    );
};

export default UpdatePersonalDetails;
