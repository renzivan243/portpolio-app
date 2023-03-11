import React from "react";
import {Link} from "react-router-dom"
import './SidebarList.css'

import {
    FcHome,
    FcBusiness,
    FcAbout,
    FcTimeline,
    FcGraduationCap,
    FcViewDetails
} from "react-icons/fc";
function SidebarList() {

    return (
        <div>
            <ul className=" cursor-pointer space-y-4">
                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="/">
                        <FcHome size={25}/>
                    </Link>
                    <span className="pt-1">Home</span>
                </li>
                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="About">
                        <FcAbout size={25}/>
                    </Link>
                    <span className="pt-1">About</span>
                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Work">
                        <FcBusiness size={25}/>
                    </Link>
                    <span className="pt-1">Work Experience</span>
                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Education">
                        <FcGraduationCap size={25}/>
                    </Link>
                    <span className="pt-1">Education</span>
                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Tech">
                        <FcTimeline size={25}/>
                    </Link>
                    <span className="pt-1">Tech Stack</span>
                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Testi">
                        <FcViewDetails size={25}/>
                    </Link>
                    <span className="pt-1">Testimonial</span>
                </li>

            </ul>
        </div>
    )
}

export default SidebarList;
