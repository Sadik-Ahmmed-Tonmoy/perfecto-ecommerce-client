import ApplyCouponCart from "../ApplyCouponCart/ApplyCouponCart";
import ApplyRewardPoints from "../ApplyRewardPoints/ApplyRewardPoints";
import CartDrawer from "../CartDrawer/CartDrawer";
import WishListDrawer from "../WishListDrawer/WishListDrawer";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import "./NavBar.scss";
import PcNavBar from "./PcNavBar/PcNavBar";

const Navbar = () => {
  const menuData = [
    {
      name: "Health & Beauty",
      subCategories: [
        {
          name: "Skin Care",
          childCategories: [
            { name: "Facewash", link: "/" },
            { name: "Face Mask", link: "/" },
            { name: "Serum", link: "/" },
            { name: "Skin Toner", link: "/" },
            { name: "Sunscreen", link: "/" },
            { name: "Lip Bum", link: "/" },
          ],
        },
        {
          name: "Hair Care",
          childCategories: [
            { name: "Shampoo", link: "/" },
            { name: "Conditioner", link: "/" },
            { name: "Hair Serum", link: "/" },
            { name: "Hair Mask", link: "/" },
            { name: "Hair Oil", link: "/" },
          ],
        },
        {
          name: "Bath & Body",
          childCategories: [
            { name: "Body Wash", link: "/" },
            { name: "Bath Bombs", link: "/" },
          ],
        },
        {
          name: "Fragrances",
          childCategories: [
            { name: "Perfumes", link: "/" },
            { name: "Colognes", link: "/" },
            { name: "Body Sprays", link: "/" },
            { name: "Essential Oils", link: "/" },
            { name: "Scented Candles", link: "/" },
          ],
        },
        {
          name: "Personal Care",
          childCategories: [
            {
              name: "Hygiene Products",
              link: "/",
            },
            { name: "Dental Care", link: "/" },
          ],
        },
        {
          name: "Hair Care",
          childCategories: [
            { name: "Shampoo", link: "/" },
            { name: "Conditioner", link: "/" },
            { name: "Hair Serum", link: "/" },
            { name: "Hair Mask", link: "/" },
            { name: "Hair Oil", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Electronics",
      subCategories: [
        {
          name: "Home Appliances",
          childCategories: [
            {
              name: "Kitchen Appliances",
              link: "/",
            },
            { name: "Electronics", link: "/" },
          ],
        },
        {
          name: "Computer Accessories",
          childCategories: [
            { name: "Laptops", link: "/" },
            {
              name: "Computer Accessories",
              link: "/",
            },
          ],
        },
        {
          name: "Gadgets and Wearables",
          childCategories: [
            {
              name: "Electronics Gadgets",
              link: "/",
            },
            {
              name: "Wearable Technology",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      name: "Beauty",
      subCategories: [
        {
          name: "Personal Care",
          childCategories: [
            {
              name: "Grooming Appliances",
              link: "/",
            },
            {
              name: "Skincare Electronics",
              link: "/",
            },
          ],
        },
        {
          name: "Cosmetics and Tools",
          childCategories: [
            {
              name: "Makeup",
              link: "/",
            },
            {
              name: "Beauty Tools",
              link: "/",
            },
          ],
        },
        {
          name: "Health Devices",
          childCategories: [
            {
              name: "Medical Devices",
              link: "/",
            },
            {
              name: "Health Wearables",
              link: "/",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {/* for pc start*/}
      <div className="large-screen">
        <PcNavBar menuData={menuData} />
      </div>
      {/* for pc end*/}
      {/* for mobile start*/}
      <div className="small-screen">
        <MobileNavBar menuData={menuData} />
      </div>
      {/* for mobile end*/}

      {/* My bag drawer start */}
      <CartDrawer />
      {/* My bag drawer end */}
      {/* My bag drawer start */}
      <WishListDrawer />
      {/* My bag drawer end */}
      {/* Apply Coupon drawer start */}
      <ApplyCouponCart />
      {/* Apply Coupon drawer end */}
      {/* Apply Reword Points start */}
      <ApplyRewardPoints />
      {/* Apply Reword Points end */}
    </>
  );
};

export default Navbar;
