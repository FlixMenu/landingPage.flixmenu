import React from "react";
import { Navbar } from "..";

import phoneA from "../../assets/img/mockup/phoneA.png"
import phoneB from "../../assets/img/mockup/phoneB.png"
import dotPattern from "../../assets/img/dotpattern.png"

function HomeHeader() {
    return (
        <div className="relative w-screen h-auto h-max-[100vh]">
            <Navbar />
            <div className="absolute top-0 left-0 flex flex-col align-center justify-center  w-screen h-screen md:flex-row md:flex-wrap">
                <div className="flex align-center justify-center flex-col md:flex-row top-0 w-screen md:w-6/12 h-screen bg-flixDark-800">
                    {/* box */}
                    <div className="relative top-[100px] md:absolute md:top-[150px] md:left-[60px] w-full md:w-[50%] h-[450px] p-3 md:p-10  md:bg-flixDark-800">
                        <h1 className="text-[30px] md:text-[36px] font-extrabold text-flixWhite-200 w-full px-4 py-5">
                            Digitalizing
                            <span className="text-flixWhite-800 font-normal"> &</span>{" "}
                            Automating
                        </h1>
                        <h1 className="text-[30px] md:text-[30px] font-bold text-flixWhite-200 w-full px-4 py-2">
                            Restaurants Workflows
                        </h1>
                        <br />
                        <p className="px-4 py-0 font-light">
                            Revolutionize Restaurants , Digitalizing Menus & Automating
                            Workflows with an increase in business revenues and flexibility
                            within an organization.
                        </p>
                        <br />
                        {/* form */}
                        <div className="flex flex-row align-start justify-start w-full px-4">
                            <input
                                type="text"
                                placeholder="johndoe@gmail.com"
                                className="px-4 py-3 bg-flixWhite-200 rounded
                                border-0 focus:border-0 text-flixDark-800 placeholder:text-flixDark-800"/>
                            <button
                                className="text-center px-5 py-3 rounded ml-3 bg-flixOrange-200 text-flixDark-800 hover:bg-flixOrange-500 
                                font-bold
                                "
                            >
                                Get early access
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex align-center p-5 justify-center flex-col md:flex-row top-0 w-screen md:w-6/12 h-screen bg-flixDark-500">
                    {/* main-cont */}
                    <div className="absolute md:relative top-[80%] md:top-20 flex flex-col items-center justify-center w-screen h-screen">
                        {/* <div className="hidden md:block w-[400px] h-[350px] bg-flixDark-800 rounded-full"></div> */}
                        <img src={phoneA} alt="" className="sm:block absolute w-4/12 md:w-5/12 top-[0%] rotate-[-25deg] translate-x-[-100px] right-[100px]" />
                        <img src={phoneB} alt="" className="sm:block absolute w-4/12 md:w-[45%] top-[0%] right-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
