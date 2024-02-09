/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
// import "./EggCard.scss";
import ImageURL from "../../ImageURL/ImageURL";
import { useContext } from "react";
import { LogicProviderContext } from "../../../providers/LogicProvider";

const EggCard = ({ className, image, eggCardProductImage }) => {
    const { windowWidth } = useContext(LogicProviderContext);
    return (
        <div>
            <div
                className={twMerge(
                    ` bg-contain bg-center object-cover bg-no-repeat h-[282px] w-[235px] mx-auto flex justify-center items-center overflow-hidden hover:cursor-pointer`,
                    className
                )}
                style={{
                    backgroundImage: `url("${image}")`,
                }}
            >
                <ImageURL className={" max-h-[178px] max-w-[160px] hover:scale-[105%] transition-all"} image={eggCardProductImage} />
            </div>
            <p className="text-center">With Salicylic Acid</p>
        </div>
    );
};

export default EggCard;
