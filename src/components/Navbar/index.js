import React from 'react'
import { Link } from 'react-router-dom'

import tplogo from "../../assets/img/tp-logo.png"

function Navbar() {
    return (
        <div className="relative w-screen h-auto z-[999]">
            {/* main */}
            <div className="flex align-center justify-between w-screen mx-auto md:p-5 px-2 py-2">
                <div className="flex flex-row align-start justify-start w-6/12 md:w-screen p-3 md:p-0">
                    <img src={tplogo} alt="" className="w-[45px]  transition-all" />
                    <h3 className='mx-5 mt-2 font-bold text-[18px] text-flixOrange-500 hidden md:flex'>FlixMenu</h3>
                </div>
                <div className="right-[30px] hidden md:block w-6/12 sm:w-screen text-[18px]">
                    <ul className="flex flex-row align-end justify-end mr-5 p-0">
                        <li className="p-2 text-flixWhite-400 hover:text-flixWhite-200">
                            <Link to="#home">Home</Link>
                        </li>
                        <li className="p-2 text-flixWhite-400 hover:text-flixWhite-200">
                            <Link to="#about">About</Link>
                        </li>
                        <li className="p-2 text-flixWhite-400 hover:text-flixWhite-200">
                            <Link to="#services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

