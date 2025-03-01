import React, {
    useState
} from "react";
import { Link } from "react-router-dom";
import {
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../../assets/images/logo_3.png";
import "./MobileHeader.css";

const SubServices = ({ handleClose }) => {
    return (
        <Accordion selectionMode="multiple">
            <AccordionItem title={<span className="text-base w-full">Pasivos contingentes laborales</span>}>
                <div className="w-full border-small px-1 rounded-small border-default-200">
                    <Listbox className="w-full">
                        <ListboxItem key="nif_d3" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/pasivos-contingentes-laborales/nif-d3" className="w-full flex p-2 text-base">NIF D3</Link>
                        </ListboxItem>
                        <ListboxItem key="usgaap" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/pasivos-contingentes-laborales/usgaap" className="w-full flex p-2 text-base">USGAAP</Link>
                        </ListboxItem>
                        <ListboxItem key="ias" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/pasivos-contingentes-laborales/ias" className="w-full flex p-2 text-base">IAS</Link>
                        </ListboxItem>
                    </Listbox>
                </div>
            </AccordionItem>
        </Accordion>
    );
};

const Services = ({ handleClose }) => {
    return (
        <Accordion selectionMode="multiple">
            <AccordionItem title={<span className="w-full"><FontAwesomeIcon icon="fa-solid fa-puzzle-piece" />Servicios</span>} className="burger-menu-item-mobile-header-first-list">
                <div className="w-full border-small px-1 rounded-small border-default-200">
                    <Listbox className="w-full">
                        <ListboxItem key="our_services" color="primary" className="w-full p-0" onClick={handleClose}>
                            <Link to="/servicios" className="w-full flex p-2 text-base">Descubre nuestros servicios</Link>
                        </ListboxItem>
                        <ListboxItem>
                            <SubServices handleClose={handleClose}/>
                        </ListboxItem>
                        <ListboxItem key="retirement_pension_plans" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/valuacion-actuarial-y-revision-de-los-pasivos-laborales" className="w-full flex p-2 text-base">Valuación actuarial</Link>
                        </ListboxItem>
                        <ListboxItem key="social_security" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/plan-de-retiro" className="w-full flex p-2 text-base">Plan de retiro</Link>
                        </ListboxItem>
                        <ListboxItem key="retirement_consulting" color="primary" className="w-full text-primary p-0" onClick={handleClose}>
                            <Link to="/servicios/otros-servicios" className="w-full flex p-2 text-base">Otros servicios</Link>
                        </ListboxItem>
                    </Listbox>
                </div>
            </AccordionItem>
        </Accordion>
    );
};

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleClose = () => {
        setIsMenuOpen(false);
        setIsOpenMenu(false);
    };

    return (
        <Navbar isMenuOpen={isOpenMenu}>
            <NavbarContent className="flex items-center justify-between">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                />
                <NavbarBrand>
                    <Link to="/" className="a-header-container">
                        <img src={Logo} alt="Logo" className="logo-mobile-header"/>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenu className="flex w-full">
                <NavbarMenuItem className="flex w-full" onClick={handleClose}>
                    <Link to="/" className="flex-1 burger-menu-item-mobile-header">
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                        <p>Inicio</p>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="flex w-full" onClick={handleClose}>
                    <Link to="/nosotros" className="flex-1 burger-menu-item-mobile-header">
                        <FontAwesomeIcon icon="fa-solid fa-people-group" />
                        <p>Nosotros</p>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="flex w-full">
                    <Services 
                        handleClose={handleClose}
                    />
                </NavbarMenuItem>
                <NavbarMenuItem className="flex w-full" onClick={handleClose}>
                    <Link to="/clientes" className="flex-1 burger-menu-item-mobile-header">
                        <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                        <p>Clientes</p>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="flex w-full" onClick={handleClose}>
                    <Link to="/contactanos" className="flex-1 burger-menu-item-mobile-header">
                        <FontAwesomeIcon icon="fa-solid fa-address-book" />
                        <p>Contactanos</p>
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default MobileHeader;