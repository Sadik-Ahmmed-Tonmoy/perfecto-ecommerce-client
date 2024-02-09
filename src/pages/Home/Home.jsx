import { useContext } from "react";
import { ScrollRestoration } from "react-router-dom";
import ExploreOurTopBrands1 from "../../assets/ExploreOurTopBrands/Rectangle 881.jpg";
import img2 from "../../assets/card-image/Rectangle 881 (1) (1)-min.png";
import img4 from "../../assets/card-image/Rectangle 892 (1)-min.png";
import img3 from "../../assets/card-image/Rectangle 903 (1)-min.png";
import img1 from "../../assets/card-image/cardImage.png";
import eggCardImage from "../../assets/eggCard/egg-card.png";
import eggCardProductImage from "../../assets/eggCard/product.png";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import SlimSlider from "../../components/SlimSlider/SlimSlider";
import BrandCard from "../../components/allCards/BrandCard/BrandCard";
import DiscountCardForSlider from "../../components/allCards/DiscountCardForSlider/DiscountCardForSlider";
import EggCard from "../../components/allCards/EggCard/EggCard";
import LeftAlignCard from "../../components/allCards/LeftAlignCard/LeftAlignCard";
import { LogicProviderContext } from "../../providers/LogicProvider";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const items = [
        { name: "John", age: 21 },
        { name: "Peter", age: 21 },
        { name: "Sally", age: 21 },
        { name: "John", age: 21 },
        { name: "Peter", age: 21 },
        { name: "Sally", age: 21 },
        { name: "John", age: 21 },
        { name: "Peter", age: 21 },
        { name: "Sally", age: 21 },
    ];

    const { windowWidth } = useContext(LogicProviderContext);
    const banner = "https://t3.ftcdn.net/jpg/04/75/78/56/360_F_475785604_HDtTcxBFA0Av87F7JoFmpircCcatQ22b.jpg";
 
    return (
        <div className="my-container">
            <div className="mt-5 mb-4 px-[10px] container mx-auto">
                <Carousel />
            </div>
            <div className="mb-4 md:mb-10 container mx-auto">
                <CardCarousel defaultSlidesToShow={3} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={2} slidesToShowFor1024={2} slidesToShowFor1280={3} slidesToShowFor1536={3}>
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min px-[10px]">
                            <DiscountCardForSlider key={i} item={item} />
                        </div>
                    ))}
                </CardCarousel>
            </div>
            <div className="mb-4 md:mb-10  px-[10px] container mx-auto">
                <h4 className="text-black font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Explore Our Top Brands </h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-3">
                    {items.slice(0,6).map((item, i) => (
                        <div key={i} className="min-w-min">
                            <BrandCard key={i} image={img1} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4 md:mb-10 px-[10px] bg-[#FFF2F7]">
                <div className="container mx-auto py-5">
                    <h4 className="text-black px-[10px] font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Best Offers For You</h4>
                    <CardCarousel defaultSlidesToShow={3} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={2} slidesToShowFor1024={2} slidesToShowFor1280={3} slidesToShowFor1536={3}>
                        {items.map((item, i) => (
                            <div key={i} className="min-w-min px-[10px]">
                               <img src="https://i.ibb.co/gJ7Sbsr/Rectangle-890.png" className="h-full w-full" alt="" />
                            </div>
                        ))}
                    </CardCarousel>
                </div>
            </div>

            <div className="mb-4 md:mb-10  container mx-auto">
                <h4 className="text-black px-[10px] font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Best Seller</h4>
                <CardCarousel defaultSlidesToShow={5} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={3} slidesToShowFor1024={3} slidesToShowFor1280={4} slidesToShowFor1536={5}>
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min px-[10px]">
                            <LeftAlignCard key={i} img={img4} />
                        </div>
                    ))}
                </CardCarousel>
            </div>
            <div className="mb-4 md:mb-10  container mx-auto">
                <h4 className="text-black px-[10px] font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Explore Our Top Brands </h4>
                <CardCarousel defaultSlidesToShow={4} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={2} slidesToShowFor1024={2} slidesToShowFor1280={3} slidesToShowFor1536={4}>
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min px-[10px] pb-3">
                            <BrandCard key={i} image={img2} />
                        </div>
                    ))}
                </CardCarousel>
            </div>

            <div className="mb-4 md:mb-10  px-[10px] container mx-auto">
                <h4 className="text-black font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Featured Brands</h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-3">
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min">
                            <BrandCard key={i} image={img3} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4 md:mb-10  px-[10px] container mx-auto">
                <h4 className="text-black font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Category In Focus</h4>
                <div className=" w-full xs:h-40 md:h-60 xl:h-72">
                    <img className="h-full max-h-full w-full object-cover" src="https://i.ibb.co/mN53mqw/Rectangle-918.png" />
                </div>
            </div>

            <div className="mb-4 md:mb-10  container mx-auto">
                {/* <h4 className="text-black font-inter text-[20px] font-semibold leading-normal mb-4">Explore Our Top Brands </h4> */}
                <CardCarousel defaultSlidesToShow={6} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={2} slidesToShowFor1024={3} slidesToShowFor1280={4} slidesToShowFor1536={5} >
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min px-[10px] pb-3">
                              <EggCard key={i} image={eggCardImage} eggCardProductImage={eggCardProductImage} />
                        </div>
                    ))}
                </CardCarousel>
            </div>

            <div className="mb-4 md:mb-10  px-[10px] container mx-auto">
                <h4 className="text-black font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">Explore Our Top Brands </h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-x-5 gap-y-3">
                    {items.slice(0,2).map((item, i) => (
                        <div key={i} className="min-w-min">
                            <BrandCard key={i} image={ExploreOurTopBrands1} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4 md:mb-10 container mx-auto">
                <h4 className="text-black px-[10px] font-inter text-[20px] font-semibold leading-normal mb-2 md:mb-4">New At Perfecto</h4>
                <CardCarousel defaultSlidesToShow={5} slidesToShowFor540={1} slidesToShowFor640={2} slidesToShowFor768={3} slidesToShowFor1024={3} slidesToShowFor1280={4} slidesToShowFor1536={5}>
                    {items.map((item, i) => (
                        <div key={i} className="min-w-min px-[10px]">
                            <LeftAlignCard key={i} img={img4} />
                        </div>
                    ))}
                </CardCarousel>
            </div>
        <div className="px-[10px] mb-4 md:mb-10  container mx-auto">
        <SlimSlider dots={false} />
        </div>
        <ScrollRestoration/>

            {/* ---------------- */}
{/* 
            <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                {numbers.slice(0, 3).map((Num, i) => (
                    <DiscountCardForSlider key={i} image={DiscountCardForSliderImage} />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-4">
                {numbers.slice(0, 3).map((Num, i) => (
                    <BrandCard key={i} image={img1} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-x-5 gap-y-4">
                {numbers.slice(0, 4).map((Num, i) => (
                    <BrandCard key={i} image={img2} />
                ))}
            </div>
            <div className="grid grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <BrandCard key={i} image={img3} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <LeftAlignCard key={i} img={img4} />
                ))}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <CenterAlignCard key={i} img={centerAlignCardImg} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-x-5 gap-y-4">
                {numbers.slice(0, 6).map((Num, i) => (
                    <EggCard key={i} image={eggCardImage} eggCardProductImage={eggCardProductImage} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <CategoryCard key={i} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <CarouselCategoryCard key={i} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <DiscountCard key={i} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <SaveCard key={i} />
                ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-4">
                {numbers.slice(0, 5).map((Num, i) => (
                    <IngredientCard key={i} img={centerAlignCardImg} />
                ))}
            </div> */}
            {/* <PrimaryButton title={"Shop All Makeup"} icon={<AiOutlineRight />} /> */}

            {/* <DeliveryAndReturnBanner  /> */}
        </div>
    );
};

export default Home;
