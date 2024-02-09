import { Divider } from "antd";
import rewardBG from "../../../assets/myWallet/rewardBG.jpeg";
import rewardStar from "../../../assets/myWallet/star.png";
import { IoIosStar } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import ImageURL from "../../../components/ImageURL/ImageURL";

const MyWallet = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div style={{ boxShadow: "0px 0px 8px 0px rgba(228, 237, 240, 0.65)" }} className="rounded-lg bg-white">
                <div className="py-3 ps-3 md:py-5 md:ps-8 border-b-[0.5px] border-[#ECECEC]">
                    <h3 className="text-black text-opacity-80 font-inter text-xl lg:text-2xl font-semibold leading-[33.5px]">My Wallet</h3>
                </div>

                <div className="pt-3 px-3 md:mb-3 md:pt-6 md:px-8">
                    {/* <div>
                        <img className="rounded-lg" src={rewardBG} alt="" />
                    </div> */}

                    {/* -------------- */}
                    <div
                        className={twMerge(
                            ` bg-contain bg-center object-cover bg-no-repeat h-[230px] rounded-xl overflow-hidden w-full mx-auto flex justify-center items-center`
                        )}
                        style={{
                            backgroundImage: `url("${rewardBG}")`,
                        }}
                    >
                        <div className=" h-full flex flex-col items-center justify-evenly">
                            <h5 className="text-white font-Inter text-2xl font-semibold leading-normal">Your Redeemable Points</h5>
                            <div className={"h-[70px] w-[70px]"}>
                                <ImageURL className={"max-h-full w-full"} image={rewardStar} />
                            </div>
                            <h5 className="text-white font-Inter text-base font-bold leading-normal">250 Points</h5>
                        </div>
                        {/* <ImageURL className={" max-h-[178px] max-w-[160px]"} image={rewardBG} /> */}
                    </div>
                    {/* -------------- */}
                    <Divider />

                    <div className="w-full mb-3 md:mb-6">
                        <p className="mb-2 md:mb-4 text-black font-inter text-sm md:text-base md:text-[18px] font-medium leading-normal">
                            How to Earn Perfecto Reward Points
                        </p>
                        <div className="bg-[#EEFAFF] border-l-[6px] border-[#5DC9F4] rounded-md py-3 ps-5 w-full">
                            <p>
                                <span className=" text-black font-inter text-sm md:text-base font-semibold leading-normal mr-1">
                                    More you buy, the more you earn:
                                </span>
                                <span className="text-black text-opacity-80 font-inter text-sm md:text-base font-medium leading-normal">
                                    Earn 1 point for every 100 taka purchases.
                                </span>
                            </p>
                        </div>
                        <Divider />
                    </div>
                    <div className="w-full mb-3 md:mb-6">
                        <p className="mb-2 md:mb-4 text-black font-inter text-sm md:text-base md:text-[18px] font-medium leading-normal">
                            How to Redeem Perfecto Reward Point?
                        </p>
                        <div className="bg-[#EEFAFF] border-l-[6px] border-[#5DC9F4] rounded-md py-3 ps-5 w-full">
                            <p>
                                {/* <span className=" text-black font-inter text-sm md:text-base font-semibold leading-normal mr-1">
                                        More you buy, the more you earn: 
                                    </span>  */}
                                <span className="text-black text-opacity-80 font-inter text-sm md:text-base font-medium leading-normal">
                                    While buying products from Perfecto, you can use your available reward points by applying at checkout.
                                </span>
                            </p>
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <p className="mb-3 md:mb-6 text-black font-inter text-sm md:text-base md:text-[18px] font-medium leading-normal">
                            Reward Points History
                        </p>
                        <div className="grid md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-6 pb-4 md:pb-8">
                            {numbers.map((number, i) => (
                                <div key={i} className="border border-[#E2E8F0] rounded-lg py-5 px-4">
                                    <div className="flex flex-wrap gap-2 justify-between mb-2 md:mb-5">
                                        <p className="text-black font-inter text-[14px] font-semibold leading-normal">24 Nov, 2023, 03:23 PM</p>
                                        <p className="text-black text-opacity-80 text-right font-inter text-base font-medium leading-normal tracking-[-0.16px]">
                                            #635465 - EU
                                        </p>
                                    </div>
                                    <div className="flex justify-between ">
                                        <p className="text-black font-inter text-base font-medium leading-normal tracking-[-0.16px]">
                                            Purchase:{" "}
                                            <span className="text-black font-inter text-base font-semibold leading-normal tracking-[-0.16px]">
                                                ৳ 550
                                            </span>
                                        </p>
                                        <p className="flex items-center gap-[6px] text-[#0094CF] font-inter text-base font-semibold leading-normal">
                                            <span className="border-2 border-[#5DC9F4] rounded-full p-[2px] text-[#5DC9F4]">
                                                <IoIosStar size={12} />
                                            </span>{" "}
                                            +55
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyWallet;
