import React, { useState } from "react";
import StarRatingWithInput from "../../../components/StarRatingWithInput/StarRatingWithInput";
import Button from "../../../components/ui/Button";
import cn from "../../../utils/cn";

const CreateReview = ({ cancel, className }) => {
  const [starCount, setStarCount] = useState(0);

  return (
    <div
      className={cn("rounded-md bg-[#EEFAFF] p-2 md:p-3 lg:w-7/12", className)}
    >
      <div className="rounded-md bg-white p-2 md:p-6">
        <h2 className="text-black font-inter text-lg font-semibold leading-normal border-b-[1px] pb-2 mb-3">
          Create Review
        </h2>
        <p className="text-sm font-medium mb-2">Your Rating</p>
        <div className="flex gap-3 mb-5">
          <StarRatingWithInput
            size={35}
            totalStars={5}
            setSelectedStarCount={setStarCount}
          />
          <p className="text-base font-medium">4.5</p>
        </div>
        <p className="text-sm font-medium mb-2">Add a Headline</p>
        <input
          type="text"
          className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black text-opacity-50 text-[14px] font-normal leading-normal  tracking-[-0.14px] mb-5"
          placeholder="Enter your review headline"
        />
        <p className="text-sm font-medium mb-2">Add A Written Review</p>
        <textarea
          rows="4"
          className="p-2 w-full rounded-sm bg-white border-[0.5px] border-[#bfbfbf] text-black text-opacity-50 text-[14px] font-normal leading-normal  tracking-[-0.14px] mb-5"
          placeholder="Enter your written review"
        />
        <p className="text-sm font-medium mb-2">Add Photo</p>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex justify-center items-center px-2 py-1 xs:px-4 xs:py-2 rounded border border-dashed text-[#5DC9F4] bg-[#F8F8F8] md:text-4xl hover:cursor-pointer">
            +
          </div>
          <div className="flex justify-center items-center px-2 py-1 xs:px-4 xs:py-2 rounded border border-dashed text-[#5DC9F4] bg-[#F8F8F8] md:text-4xl hover:cursor-pointer">
            +
          </div>
          <div className="flex justify-center items-center px-2 py-1 xs:px-4 xs:py-2 rounded border border-dashed text-[#5DC9F4] bg-[#F8F8F8] md:text-4xl hover:cursor-pointer">
            +
          </div>
          <div className="flex justify-center items-center px-2 py-1 xs:px-4 xs:py-2 rounded border border-dashed text-[#5DC9F4] bg-[#F8F8F8] md:text-4xl hover:cursor-pointer">
            +
          </div>
          <div className="flex justify-center items-center px-2 py-1 xs:px-4 xs:py-2 rounded border border-dashed text-[#5DC9F4] bg-[#F8F8F8] md:text-4xl hover:cursor-pointer">
            +
          </div>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Button
            onClick={() => cancel((prev) => !prev)}
            variant="ghost"
            className="text-[#5DC9F4]"
          >
            Cancel
          </Button>
          <Button onClick={() => cancel((prev) => !prev)}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
