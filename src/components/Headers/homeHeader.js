import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "..";
import { validateEmail } from "../../helpers/util";
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
        <div className="relative w-screen h-[auto] h-max-[100vh] overflow-x-hidden max-auto bg-flixDark-800">
            <Navbar />
            <div className="relative top-0 left-0 flex flex-row align-center justify-between  w-screen h-screen flex-wrap md:flex-nowrap md:flex-row lg:container mx-auto">

                <div className="relative md:absolute top-0 w-full  flex align-center justify-center flex-col h-auto md:w-[50%] md:h-screen">
                    <div className="md:ml-[20px] md:w-[500px] h-[450px] p-3 md:p-0 sm:p-12 z-10">
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
                        {/* form */}
                        <div className="flex align-start justify-start md:flex-nowrap sm:flex-wrap p-3 mt-[30px] md:p-0">
                            <button onClick={openModal} className="text-center px-0 py-4 rounded-full font-bold bg-flixOrange-200 text-flixDark-800 ml-[-10px] sm:mt-3 md:mt-0 w-full md:ml-0 hover:bg-flixOrange-500  md:w-[50%]">
                                GET EARLY ACCESS
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative md:absolute flex right-[0px] bottom-0 w-full overflow-x-hidden sm:h-[10vh] overflow-y-hidden md:w-[50%] md:h-screen">

                    <img src={phoneB} alt="" className="relative bottom-[-100px] right-[0px] rounded-md w-[20rem] md:w-[25rem] md:absolute z-[99]" />

                    <img src={phoneA} alt="" className="relative bottom-[-150px] right-[250px] rounded-md w-[20rem] md:w-[20rem] md:absolute" />
                </div>

                {/* waitlist component */}
                <WaitListForm isVisible={isVisible} closeMainModal={closeModal} />
            </div>
        </div>
    );
}

export default HomeHeader;


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
            }, 500);
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
        <div className={`fixed top-0 left-0 flex flex-col align-center items-center justify-center w-screen h-screen z-[999] bg-flixDark-900 waitlist-modal invisible`}>
            <div className={`relative w-[320px] h-[350px] bg-flixDark-500 text-flixWhite-200 rounded-md p-4 overflow-hidden flex flex-col align-center items-center justify-start waitlist-box transition-all ${translateY === false ? "translate-y-[500px]" : "translate-y-[0px]"}`} ref={boxWaitlist}>
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