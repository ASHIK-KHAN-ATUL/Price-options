import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {

    const[open , setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' },
      ];
      
    
    return (
        <nav className="text-black  bg-red-200 p-6">
            <div className="md:hidden text-2xl absolute" onClick={() => setOpen(!open) }>
                   {
                    open === true ?
                     <CgMenuGridO ></CgMenuGridO>
                     : <GiHamburgerMenu className=" "></GiHamburgerMenu>
                   }
                  
            </div>
           <ul className={` ${open ? 'top-12' : '-top-60'}  md:flex absolute md:static   gap-10 duration-1000   bg-red-200  p-2 rounded-xl  md:justify-center`}>
                 {
                    routes.map( route => <Link key={route.id} route={route}></Link> )
                }
           </ul>
        </nav>
    );
};

export default Navbar;