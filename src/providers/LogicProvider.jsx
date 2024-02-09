import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LogicProviderContext = createContext(null);

const LogicProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [wishListDrawerOpen, setWishListDrawerOpen] = useState(false);
  const [applyCouponOpen, setApplyCouponOpen] = useState(false);
  const [applyRewardPointOpen, setApplyRewardPointOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const infoProvider = {
    windowWidth,
    open,
    setOpen,
    showDrawer,
    wishListDrawerOpen,
    setWishListDrawerOpen,
    applyCouponOpen,
    setApplyCouponOpen,
    applyRewardPointOpen,
    setApplyRewardPointOpen,
  };

  return (
    <LogicProviderContext.Provider value={infoProvider}>
      {children}
    </LogicProviderContext.Provider>
  );
};

export default LogicProvider;
