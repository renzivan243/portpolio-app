import React, {useState} from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SidebarList from "./SidebarList";
import SidebarHidden from "./SidebarHidden";
import './Sidebar.css'
import GradImg from '../../Images/grad.png'
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const [hideSidebar,
        setHideSideBar] = useState(true);
    const toggleChecked = () => setHideSideBar(value => !value);
    return (
        <div className="">
            {hideSidebar
                ? <div className=" h-full absolute w-72 bg-white sidebar  bg-opacity-80 text-black ">
                        <div className="absolute right-0 arrow">
                            <KeyboardArrowLeftIcon onClick={toggleChecked}/>
                        </div>
                        <div className="sidebar"><img
                            className=" rounded-full h-36 w-36 mx-auto mt-16 border-2 border-black"
                            src={GradImg}/></div>
                        <div className="">
                            <div className="mt-10 w-60 mx-auto "><SidebarList/></div>
                        </div>
                    </div>
                : <div
                    className=" h-full absolute w-16 sidebar-active hover:bg-white sidebar text-white hover:text-black ">
                    <div className="right-0 absolute arrow"><KeyboardArrowRightIcon onClick={toggleChecked}/></div>
                    <div className="pt-16 ml-3 sidebar-active">
                        <Avatar alt="Profile Picture" src={GradImg}/></div>
                    <div className="mt-5 w-10 ml-5 "><SidebarHidden/></div>
                </div>}

        </div>
    );
}

export default Sidebar;