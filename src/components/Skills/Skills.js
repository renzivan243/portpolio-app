import React from "react";
import './Skills.css'

function Skills() {

    return (

        <div>
        <div className=" text-center text-5xl text-lime-400 font-bold my-10">
            <span>SKILLS</span>
        </div>
            <div className="flex justify-center mb-10">
                <ul className="flex space-x-10 ">
                    <li className="cursor-pointer active:border-b-2 text-xs ">
                        ALL
                    </li>
                    <li className="cursor-pointer text-xs">
                        FRONTEND
                    </li>
                    <li className="cursor-pointer text-xs">
                        BACKEND
                    </li>
                    <li className="cursor-pointer text-xs">
                        OTHERS
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Skills;