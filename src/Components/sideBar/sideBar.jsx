
import { HashLink as Link } from "react-router-hash-link";


import profile from "../images/profile.jpg";
import pp from "../images/pp.jpeg";

import { Mail } from "@mui/icons-material";

import "../sideBar/sideBar.css";

export function SideBar() {

    return (
        <div className="sidebar">

            <div className="pt-4">
                <div className="tagTop fw-bold">
                    <strike><i> # developer_life </i></strike>
                </div>

                <div className="tagTop fw-bold">
                    <i> # hello_world </i>
                </div>

                <div className="tagTop fw-bold">
                    <strike><i> # coding </i></strike>
                </div>
            </div>

            <div>
                <h1 className="mt-5">
                    <Link className="name text-decoration-none text-dark" style={{fontFamily:'Aclonica'}}>Naresh Sahu</Link>
                </h1>
            </div>

            <div>
                <figure className="mt-4">
                <img src={profile} className="rounded rounded-circle border border-3 border-warning img-fluid object-fit-contain" height={150} width={150} alt="profileImg" />
                </figure>
            </div>

            <div className="mt-2">
             <span> <Mail className="
             fw-bold"/> </span><a href="mailto:sahun0499@gmail.com" className="text-decoration-none text-dark fw-bold" target='_blank' >sahun0499@gmail.com</a>
            </div>

            <div className="mt-4">
                <ul className="sideBarNav">

                    <li className="mt-2 sideBar-navItems">
                        <Link smooth to="/#projects" className=" text-decoration-none sideBarLinks">Projects</Link>
                    </li>

                    <li className="mt-2 sideBar-navItems">
                        <Link smooth to="/#about" className=" text-decoration-none sideBarLinks">About</Link>
                    </li>

                    <li className="mt-2 sideBar-navItems">
                        <Link smooth to="/#interests" className=" text-decoration-none sideBarLinks">Interests</Link>
                    </li>


                    <li className="mt-2 sideBar-navItems">
                        <Link smooth to="/#education" className=" text-decoration-none sideBarLinks">Education</Link>
                    </li>
                </ul>
            </div>


            <div className="mt-4">
                <ul className="sideBarNav">
                    <li className="mt-3 sideBar-navIcons">
                        <a href="https://github.com/sahun0412" target="_blank" className="bi bi-github  fw-bold"></a>
                    </li>
                    <li className="mt-3 sideBar-navIcons">
                        <a href="http://www.linkedin.com/in/naresh-sahu-82443b1b2" target="_blank" className="bi bi-linkedin  fw-bold"></a>
                    </li>
                    
                    
                    <li className="mt-3 sideBar-navIcons ">
                        <a href="https://www.instagram.com/whats_in__a_name/" target="_blank" className="bi bi-instagram  fw-bold"></a>
                    </li>
                    
                    
                    <li className="mt-3 sideBar-navIcons">
                        <a href="mailto:sahun0499@gmail.com" target="_blank" className="bi bi-envelope  fw-bold"></a>
                    </li>
                    
                    
                    <li className="mt-3 sideBar-navIcons">
                        <a href="https://www.facebook.com/profile.php?id=100029021844142" target="_blank" className="bi bi-facebook  fw-bold"></a>
                    </li>

                </ul>
            </div>


           
        </div>
    )
}