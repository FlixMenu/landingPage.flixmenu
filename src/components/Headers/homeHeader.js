import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "..";
import { validateEmail } from "../../helpers/util";
import DataContext from "../../context/Datacontext";

import sleep from "../../helpers/sleep";
import phoneA from "../../assets/img/mockup/phoneA.png"
import phoneB from "../../assets/img/mockup/phoneB.png"
import avatar from "../../assets/img/avatar.png"

function HomeHeader() {

    const [isVisible, setIsVisible] = useState(false)

    let waitlistModal;

    useEffect(() => {
        waitlistModal = document.querySelector(".waitlist-modal")
    }, [])

    function openModal() {
        waitlistModal = document.querySelector(".waitlist-modal")
        if (waitlistModal !== null) {
            waitlistModal.style.visibility = "visible";
            setIsVisible(true)
        }
    }

    function closeModal() {
        waitlistModal = document.querySelector(".waitlist-modal")
        if (waitlistModal !== null) {
            waitlistModal.style.visibility = "hidden";
            setIsVisible(false)
        }
    }

    return (
        <div id="header" className="relative w-screen h-screen md:h-screen overflow-hidden mx-auto bg-flixDark-600 md:p-0">
            <Navbar />
            <div className="container relative top-0 left-0 flex flex-row align-center justify-between overflow-hidden w-full h-auto flex-wrap md:flex-nowrap md:flex-row mx-auto md:h-screen">

                <div className="relative md:absolute top-10 w-full  flex align-center justify-center flex-col h-auto md:w-[50%] md:h-screen">
                    <div className="md:ml-[20px] md:w-[500px] h-[500px] p-3 md:p-0 sm:p-12 z-10">
                        <h1 data-aos="fade-right" className="text-[25px] md:text-[36px] font-extrabold text-flixWhite-200 w-full px-0 py-5">
                            Digitalizing
                            <span className="text-flixWhite-800 font-normal"> &</span>{" "}
                            Automating
                        </h1>
                        <h1 data-aos="fade-right" className="text-[20px] md:text-[30px] font-bold text-flixWhite-200 w-full px-0 py-2">
                            Restaurants Workflows
                        </h1>
                        <br />
                        <p data-aos="fade-right" className="px-0 py-0 !font-[50]">
                            Revolutionize Restaurants , Digitalizing Menus & Automating
                            Workflows with an increase in business revenues and flexibility
                            within an organization.
                        </p>
                        <br />
                        <div className="flex align-start justify-start md:flex-nowrap sm:flex-wrap  mt-[30px] md:p-0">
                            <a id="waitlist" className="invisible"></a>

                            <div data-aos="zoom-in" id="mailInput" className="w-full px-0 py-0 bg-flixDark-5100 border-[2px] border-dashed border-flixDark-500 rounded-[30px] flex flex-row items-center justify-between mr-5 relative overflow-hidden">
                                <input type="text" placeholder="flix@mail.com" className="w-[60%] h-full border-none outline-none bg-none py-3 px-3 font-light" style={{ background: "none" }} />

                                <button className="px-2 py-[17px] bg-flixDark-500 w-[45%] text-flixWhite-200 rounded-[30px]">
                                    Join WaitList
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden md:absolute right-[0px] bottom-[-10px] w-full h-[auto] overflow-x-hidden overflow-y-hidden md:w-[50%] md:h-screen md:flex">

                    <img src={phoneB} alt="" className="relative bottom-[-80px] right-[0px] rounded-md w-[20rem] md:w-[25rem] md:absolute md:right-0 md:-[-80px] z-[99]" />

                    {/* <img src={phoneA} alt="" className="relative bottom-[-150px] right-[220px] rounded-md w-[20rem] md:w-[20rem] md:absolute md:right-[250px] md:bottom-[-80px]" /> */}
                </div>

                <SideBar />
            </div>
        </div>
    );
}

export default HomeHeader;


function SideBar() {
    const { isToggled, setIsToggled } = useContext(DataContext)
    const [showlist, setShowList] = useState(false)

    useEffect(() => {
        (async () => {
            if (isToggled) {
                await sleep(.4)
                return setShowList(true)
            }
            setShowList(false)
        })()
    }, [isToggled])

    async function hideSidebarOnClick() {
        await sleep(.1)
        setShowList(false)
        await sleep(.1)
        setIsToggled(false)
    }

    return (
        <div className={`fixed visible top-0 left-0 right-0 m-0 w-screen ${isToggled ? "h-[100vh]" : "h-[0vh]"} transition-all overflow-hidden z-[999] container flex flex-col align-center items-center justify-center bg-flixDark-900 sidebar-cont md:invisible`}>
            <ul className="m-0 p-0 flex flex-col align-center items-center justify-center">
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}> <a href="/">Home</a> </li>
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}> <a href="#about">About</a> </li>
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}> <a href="#services">Services</a> </li>
            </ul>
        </div>
    )
}
