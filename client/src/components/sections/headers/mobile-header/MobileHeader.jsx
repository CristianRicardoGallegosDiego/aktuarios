import React from "react";
import { Link } from "react-router-dom";
import {
    NavbarItem, 
    DropdownItem, 
    DropdownTrigger, 
    Dropdown, 
    DropdownMenu, 
    Navbar,
    Accordion,
    AccordionItem,
    Listbox,
    ListboxItem,
    NavbarContent,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import Logo from "../../../../assets/images/logo.png";
import "./MobileHeader.css";

const MobileHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                    <NavbarBrand>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <Link to="/">
                            <h1>Aktuarios Desarrollo Actuarial S. C.</h1>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarMenu>
                    <NavbarMenuItem>
                        <Link to="/nosotros">Nosotros</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link to="/clientes">Clientes</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link to="/contactanos" id="contact-us-header">Contactanos</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
        </Navbar>
    );
};

export default MobileHeader;