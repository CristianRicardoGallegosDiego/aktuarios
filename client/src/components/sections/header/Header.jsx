import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import {
    NavbarItem, 
    Button, 
    DropdownItem, 
    DropdownTrigger, 
    Dropdown, 
    DropdownMenu, 
    Navbar,
    Popover, 
    PopoverTrigger, 
    PopoverContent
} from "@nextui-org/react";
import "./Header.css";

const Slider = () => {
    return (
        <Navbar >
            <Dropdown backdrop="blur"
                closeOnSelect={false}
            >
                <NavbarItem>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            radius="sm"
                            variant="light"
                        >
                            Servicios
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                    className="w-[300px]"
                >
                    <DropdownItem
                        key="autoscaling"
                        className="p-0 "
                        closeOnSelect={true}
                    >
                        <Link to="/" className="menu-item-header">
                            Descubre nuestros servicios
                        </Link>
                    </DropdownItem>
                    <DropdownItem
                        key="usage_metrics"
                        className="p-0 w-full"
                    >
                        <Popover 
                            placement="bottom-start"
                            backdrop="blur"
                        >
                            <PopoverTrigger>
                                Pasivos contigentes laborales
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </DropdownItem>
                    <DropdownItem
                        key="production_ready"
                        className="p-0"
                        closeOnSelect={true}
                    >
                        <Link to="/" className="menu-item-header">
                            Planes pensiones por jubilación
                        </Link>
                    </DropdownItem>
                    <DropdownItem
                        key="99_uptime"
                        className="p-0"
                        closeOnSelect={true}
                    >
                        <Link to="/" className="menu-item-header">
                            Previsión social
                        </Link>
                    </DropdownItem>
                    <DropdownItem
                        key="supreme_support"
                        className="p-0"
                        closeOnSelect={true}
                    >
                        <Link to="/" className="menu-item-header">
                            Asesoría para el retiro 
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Navbar>
    );
};

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <Link to="/">
                    <h1>Aktuarios Desarrollo Actuarial S. C.</h1>
                </Link>
            </div>
            <nav className="navigation-container">
                <ul>
                    <li>
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Slider />
                    </li>
                    <li>
                        <Link to="/clientes">Clientes</Link>
                    </li>
                    <li>
                        <Link to="/contactanos">Contactanos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;