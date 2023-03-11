import React from "react";
import {Link} from "react-router-dom"
import './SidebarHidden.css'
import {
    FcHome,
    FcBusiness,
    FcAbout,
    FcTimeline,
    FcGraduationCap,
    FcViewDetails
} from "react-icons/fc";

function SidebarHidden() {
    return (
        <div>
            <ul className=" cursor-pointer space-y-4 w-10">
                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700 ">
                    <Link to="/">
                        <FcHome size={25}/>
                    </Link>

                </li>
                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="About">
                        <FcAbout size={25}/>
                    </Link>

                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Work">
                        <FcBusiness size={25}/>
                    </Link>

                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Education">
                        <FcGraduationCap size={25}/>
                    </Link>

                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Tech">
                        <FcTimeline size={25}/>
                    </Link>

                </li>

                <li
                    className="active:border-l-2 border-black flex space-x-2 hover:text-blue-700">
                    <Link to="Testi">
                        <FcViewDetails size={25}/>
                    </Link>

                </li>

            </ul>
        </div>
    )
}

export default SidebarHidden;