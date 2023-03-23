import React from "react";
import MainVideo from '../../Videos/matrix.mp4'
import './Home.css'
import Typewriter from "typewriter-effect";
function Home() {

    return (

        <div >
            <div className='banner bg-slate-700 bg-opacity-50 '>
                <video autoPlay loop muted id='video'>
                    <source src={MainVideo} type='video/mp4'/>
                </video>
                <div className="flex flex-col h-1/3 md:ml-80 sm:ml-56 md:text-4xl ">
                    <span className="mt-20 md:text-4xl lg:text-7xl sm:text-5xl">Hi I'm
                    </span>
                    <span className=" text-gray-400 md:text-3xl lg:text-6xl  sm:text-3xl">Renz Ivan Enrile</span>
                    <span className=" text-amber-400"><Typewriter
                        options={{
            strings: [
                "a Aspiring Full Stack Developer", "a MERN Stack Development", "a Front-end Developer"
            ],
            autoStart: true,
            loop: true,
            delay: 10
        }}/></span>

                </div>

            </div>
        </div>
    )

}

export default Home;