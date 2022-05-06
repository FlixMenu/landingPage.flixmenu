import React, { useState, useRef, useEffect, useContext } from "react";
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
        <div className="relative w-screen h-[auto] md:h-screen overflow-hidden mx-auto bg-flixDark-600 md:p-0">
            <Navbar />
            <div className="container relative top-0 left-0 flex flex-row align-center justify-between overflow-hidden w-full h-auto flex-wrap md:flex-nowrap md:flex-row mx-auto md:h-screen">

                <div className="relative md:absolute top-10 w-full  flex align-center justify-center flex-col h-auto md:w-[50%] md:h-screen">
                    <div className="md:ml-[20px] md:w-[500px] h-[500px] p-3 md:p-0 sm:p-12 z-10">
                        <h1 className="text-[30px] md:text-[36px] font-extrabold text-flixWhite-200 w-full px-0 py-5">
                            Digitalizing
                            <span className="text-flixWhite-800 font-normal"> &</span>{" "}
                            Automating
                        </h1>
                        <h1 className="text-[30px] md:text-[30px] font-bold text-flixWhite-200 w-full px-0 py-2">
                            Restaurants Workflows
                        </h1>
                        <br />
                        <p className="px-0 py-0 !font-[50]">
                            Revolutionize Restaurants , Digitalizing Menus & Automating
                            Workflows with an increase in business revenues and flexibility
                            within an organization.
                        </p>
                        <br />
                        <div className="flex align-start justify-start md:flex-nowrap sm:flex-wrap p-3 mt-[30px] md:p-0">
                            <a id="waitlist" className="invisible"></a>
                            <button onClick={openModal} className="text-center px-0 py-4 rounded-full font-bold bg-flixOrange-200 text-flixDark-800 ml-[-10px] sm:mt-3 md:mt-0 w-full md:ml-0 hover:bg-flixOrange-500  md:w-[50%]">
                                GET EARLY ACCESS
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative hidden md:absolute right-[0px] bottom-[-10px] w-full h-[auto] overflow-x-hidden overflow-y-hidden md:w-[50%] md:h-screen md:flex">

                    <img src={phoneB} alt="" className="relative bottom-[-80px] right-[0px] rounded-md w-[20rem] md:w-[25rem] md:absolute md:right-0 md:-[-80px] z-[99]" />

                    <img src={phoneA} alt="" className="relative bottom-[-150px] right-[220px] rounded-md w-[20rem] md:w-[20rem] md:absolute md:right-[250px] md:bottom-[-80px]" />
                </div>

                {/* waitlist component */}
                <WaitListForm isVisible={isVisible} closeMainModal={closeModal} />

                {/* sidebar */}
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
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}>Home</li>
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}>About</li>
                <li className={`text-[30px] p-2 ${showlist ? "scale-[1]" : "scale-[0]"} text-center w-full font-extrabold text-flixWhite-400 cursor-pointer transition-all mt-[10px] mb-[10px] hover:text-flixOrange-200`} onClick={hideSidebarOnClick}>Services</li>
            </ul>
        </div>
    )
}

function WaitListForm({ isVisible, closeMainModal }) {
    const boxWaitlist = useRef()
    const [boxvisibility, setBoxVisibility] = useState(false)
    const [translateY, setTranslateY] = useState(false)
    const [inputHide, setInputHide] = useState(false)
    const [avatarHide, setAvatarHide] = useState(true)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [mail, setMail] = useState("")

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setTranslateY(true)
            }, 300);
        }
    }, [isVisible])

    function closeModal() {
        (async () => {
            await sleep(.3)
            setError(null)
            setMail("")
            setSuccess(false)
            setAvatarHide(true)
            setInputHide(false)
            setTranslateY(false)
            closeMainModal()
        })()
    }

    async function submitWaitlistEmail() {
        if (mail === "") {
            return setError("email cant be empty.")
        }
        if (!validateEmail(mail)) {
            return setError("email given is invalid.")
        }

        setError(null)
        await sleep(1)
        setInputHide(true)
        await sleep(.5)
        setSuccess(true)
        setAvatarHide(false)
        setMail("")
    }

    return (
        <div className={`fixed top-0 left-0 flex flex-col align-center items-center justify-center w-screen h-screen z-[1000] bg-flixDark-900 waitlist-modal invisible`}>
            <div className={`relative w-[320px] h-[350px] bg-flixDark-500 text-flixWhite-200 rounded-md p-4 overflow-hidden flex flex-col align-center items-center justify-start waitlist-box transition-all ${translateY === false ? "translate-y-[900px]" : "translate-y-[0px]"}`} ref={boxWaitlist}>
                <div className="top w-full">
                    <p className={`${success ? "text-green-300" : "text-flixWhite-200"} p-4  flex flex-col align-center items-center justify-center text-[16px] font-bold`}>
                        {success ? "Email Added Successfully" : "JOIN THE WAITLIST"}
                    </p>
                </div>

                <br />
                <img src={avatar} alt="" className={`rounded w-[200px] relative bottom-10 transition-all ${avatarHide ? "scale-[0]" : "scale-[1]"}`} />
                <br />
                <div className={`inp-cont w-full h-full p-4 absolute top-[35%] ${inputHide ? "scale-[.1]" : "scale-[1]"} transition-all`}>
                    <small className={`text-red-500`}>{error === null ? "" : error}</small>
                    <input type="text" value={mail} className="rounded-md w-full px-3 py-3 bg-flixDark-800 text-flixWhite-200 border-0 outline-none" placeholder="john@mail.com" onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className="bottom w-full h-auto p-3 bg-flixDark-600 absolute bottom-0 left-0 flex flex-row align-center items-center justify-between">
                    <button className="px-3 py-4 text-flixWhite-400 text-[14px]" onClick={closeModal}>
                        Cancel
                    </button>
                    <button className="px-5 py-3 bg-flixDark-500 rounded-md scale-[.90] transition-all disabled:bg-transparent disabled:text-flixWhite-800 border-2 border-flixDark-500 focus:border-flixOrange-200 focus:bg-flixDark-800" onClick={submitWaitlistEmail} disabled={success}>
                        Get Notified
                    </button>
                </div>
            </div>
        </div>
    )
}