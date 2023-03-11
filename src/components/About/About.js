import React from "react";
import aboutme from '../../Images/about.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import {RiLayout6Fill, RiTerminalBoxLine, RiDeviceLine} from "react-icons/ri";
import './About.css'

function About() {
    return (
        <div className=" bg-white container mx-auto pt-[120px] w-9/12">
            <div className=" text-center">
                <div className="md:grid md:grid-cols-2 w-full mt-8">
                    <div className="relative grid sm:justify-center md:justify-end"><img
                        className=" h-80 w-80 border-b-2 rounded-lg mt-3"
                        src={aboutme}
                        alt="aboutme"/></div>
                    <div
                        className=" text-left sm:text-left sm:mx-auto md:mx-10 sm:my-10 md:my-1 ml-10 w-1/2 ">
                        <div className="my-2">
                            <h1 className=" text-left font-bold ">ABOUT ME</h1>
                        </div>

                        <div className="my-4">
                            <span className=" text-3xl text-lime-500 font-bold">Personal Details</span>
                        </div>
                        <div>
                            <span className=" font-medium tracking-wider">I have 5 years non-related job
                                experience on programming where I accomplished many project on my past work ,I
                                also ensured the quality of my work on each customer I work with. I learned
                                programming basic on my college period, and currently I am now self-paced
                                learning for the mid - advance concepts of MERN Stack Development through UDEMY
                                and other self-paced learning platform.
                            </span>

                        </div>
                        <div className="my-5">
                            <Button variant="contained" endIcon={< DownloadIcon />}>
                                Download CV
                            </Button>
                        </div>

                    </div>

                </div>
                <div className="my-5 w-full relative ">
                    <div>
                        <span className=" text-yellow-500 text-3xl font-bold">WHAT CAN I DO ?</span>
                    </div>

                    <div className="grid pt-[50px] md:grid-cols-3 mx-28 sm:grid-cols-1 sm:gap-y-32 ">
                        <div
                            className="flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-96 md:h-72">
                            <div className="hover:text-lime-500 flex flex-col items-center about-text">
                                <RiLayout6Fill size={50}/>
                                <h1 className=" font-bold my-5 ">Front-end Web Design</h1>
                            </div>
                            <p className="  text-left leading-6 text-sm text-sec">
                                I have the ability to create websites based on the specific requirements of
                                clients, employers, or customers. I will utilize my expertise in Html, CSS,
                                ReactJS, TailwindCSS, and Material-UI to accomplish this task.
                            </p>
                        </div>
                        <div
                            className="flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-96 md:h-72">
                            <div className="hover:text-lime-500 flex flex-col items-center about-text">
                                <RiTerminalBoxLine size={50}/>
                                <h1 className=" font-bold my-5 hover:text-lime-500">Web Development</h1>
                            </div>
                            <p className=" text-left leading-6 text-sm text-sec">
                                I possess knowledge in utilizing NodeJS and MongoDB as a Database for back-end
                                web development. In addition, I am also familiar with version control tools,
                                including GIT.
                            </p>
                        </div>
                        <div
                            className="flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-96 md:h-72 ">
                            <div className="hover:text-lime-500 flex flex-col items-center about-text">
                                <RiDeviceLine size={50}/>
                                <h1 className=" font-bold my-5 hover:text-lime-500">Responsive Design</h1>
                            </div>
                            <p className=" text-left leading-6 text-sm text-sec">
                                I am capable of producing a website that is both responsive and user-friendly,
                                catering to the needs of the clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;