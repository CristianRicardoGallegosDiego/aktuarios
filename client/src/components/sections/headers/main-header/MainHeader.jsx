import React from "react";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import PcLaptopHeader from "../pc-laptop-header/PcLaptopHeader";
import MobileHeader from "../mobile-header/MobileHeader";
import "./MainHeader.css";

const MainHeader = () => {
    const windowWidth = useWindowWidth();

    return (
        <header className="main-header-container">
            {
                windowWidth > 1024 ? <PcLaptopHeader /> : <MobileHeader />
            }
        </header>
    );
};

export default MainHeader;