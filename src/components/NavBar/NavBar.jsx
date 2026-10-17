import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiCloseCircleLine } from "react-icons/ri";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" },
    ];


    return (
        <nav className="text-white bg-blue-300">
            <div className="md:hidden text-2xl " onClick={ () => setOpen(!open)   }>              
                {
                    open === true ? 
                    <RiCloseCircleLine></RiCloseCircleLine>
                    : <RiMenu2Line></RiMenu2Line> 
                    
                }               
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-6' : '-top-60'}
                bg-blue-300 text-black rounded-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    )
}

export default NavBar;