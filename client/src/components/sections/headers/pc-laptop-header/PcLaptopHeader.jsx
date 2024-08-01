import React, {
    useState
} from "react";
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
    NavbarContent
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../../assets/images/logo.png";
import "./PcLaptopHeader.css";

const MyMenu = () => {
    const [myMenuIsOpen, setMyMenuIsOpen] = useState(false);
    const handleClose = () => setMyMenuIsOpen(false);

    return (
        <Dropdown backdrop="blur" isOpen={myMenuIsOpen}>
            <DropdownTrigger className="a-pc-laptop-header a-pc-laptop-header-blue" onClick={() => {setMyMenuIsOpen(true)}}>
                Servicios
            </DropdownTrigger>
            <DropdownMenu className="w-[300px]">
                <DropdownItem key="close" className="p-0" onClick={handleClose}>
                    <div className="menu-items-pc-laptop-header menu-items-pc-laptop-header-close">
                        <FontAwesomeIcon icon="fa-solid fa-square-xmark" />
                        <p>Cerrar</p>
                    </div>
                </DropdownItem>
                <DropdownItem key="services" className="p-0" onClick={handleClose}>
                    <Link to="/servicios" className="menu-items-pc-laptop-header menu-items-pc-laptop-header-primary">Descubre nuestros servicios</Link>
                </DropdownItem>
                <DropdownItem key="contingent_liabilities" className="p-0 w-full">
                    <Accordion selectionMode="multiple">
                        <AccordionItem title={<span className="text-sm w-full">Pasivos contingentes laborales</span>}>
                            <div className="w-full border-small px-1 rounded-small border-default-200">
                                <Listbox aria-label="Actions" onAction={handleClose} className="w-full">
                                    <ListboxItem key="nif_d3" color="primary" className="w-full text-primary p-0">
                                        <Link to="/servicios/pasivos-contingentes-laborales/nif-d3" className="w-full flex p-2">NIF D3</Link>
                                    </ListboxItem>
                                    <ListboxItem key="usgaap" color="primary" className="w-full text-primary p-0">
                                        <Link to="/servicios/pasivos-contingentes-laborales/usgaap" className="w-full flex p-2">USGAAP</Link>
                                    </ListboxItem>
                                    <ListboxItem key="nic_19" color="primary" className="w-full text-primary p-0">
                                        <Link to="/servicios/pasivos-contingentes-laborales/nic-19" className="w-full flex p-2">NIC 19</Link>
                                    </ListboxItem>
                                </Listbox>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </DropdownItem>
                <DropdownItem key="retirement_plans" className="p-0" onClick={handleClose}>
                    <Link to="/servicios/planes-pensiones-por-jubilacion" className="menu-items-pc-laptop-header menu-items-pc-laptop-header-primary">Planes pensiones por jubilación</Link>
                </DropdownItem>
                <DropdownItem key="social_provision" className="p-0" onClick={handleClose}>
                    <Link to="/servicios/prevision-social" className="menu-items-pc-laptop-header menu-items-pc-laptop-header-primary">Previsión social</Link>
                </DropdownItem>
                <DropdownItem key="retirement_advice" className="p-0" onClick={handleClose}>
                    <Link to="/servicios/asesoria-para-el-retiro" className="menu-items-pc-laptop-header menu-items-pc-laptop-header-primary">Asesoría para el retiro</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

const PcLaptopHeader = () => {
    return (
        <div className="pc-laptop-header-container">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <Link to="/">
                    <h1>Aktuarios Desarrollo Actuarial S. C.</h1>
                </Link>
            </div>
            <Navbar className="navigation-container">
                <NavbarContent className="flex flex-col lg:flex-row lg:justify-center" justify="center">
                    <NavbarItem>
                        <Link to="/nosotros" className="a-pc-laptop-header a-pc-laptop-header-blue">Nosotros</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <MyMenu />
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/clientes" className="a-pc-laptop-header a-pc-laptop-header-blue">Clientes</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/contactanos" className="a-pc-laptop-header a-pc-laptop-header-orange contact-us-pc-laptop-header-item">Contactanos</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default PcLaptopHeader;