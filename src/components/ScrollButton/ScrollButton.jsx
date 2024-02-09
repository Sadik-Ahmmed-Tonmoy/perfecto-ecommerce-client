import { Tooltip } from "antd";

const ScrollButton = ({ to, name, isBrandOpen }) => {
    const handleClick = () => {
        const element = document.getElementById(to);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Tooltip placement="left" title={name} className={`${isBrandOpen ? "block" : "hidden"}`}>
            <p className="text-[10px] leading-[12px]" key={name} onClick={handleClick} style={{ cursor: "pointer" }}>
                {name}
            </p>
        </Tooltip>
    );
};

export default ScrollButton;
