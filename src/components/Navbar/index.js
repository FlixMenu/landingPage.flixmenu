import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/Datacontext'

import tplogo from "../../assets/img/tp-logo.png"

function Navbar() {
    const { isToggled } = useContext(DataContext)

    return (
        <div className={`relative w-screen h-auto z-[1000]`}>
            {/* main */}
            <div className="flex align-center justify-between w-screen mx-auto py-2 px-0 md:p-5 md:container">
                <div className="flex flex-row align-start justify-start w-6/12 md:w-screen p-3 md:p-0">
                    <img src={tplogo} alt="" className={`w-[45px]  transition-all ${isToggled ? "opacity-0" : "opacity-1"}`} />
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

                <HamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar

function HamburgerMenu() {
    const { isToggled, setIsToggled, toggleMenu, } = useContext(DataContext)

    return (
        <div className={`p-2 w-[55px] h-auto flex align-center justify-center items-center flex-col opacity-[.7] ${isToggled ? "scale-[.99]" : "scale-[.75]"} transition-all absolute top-6 right-5 z-[1000] cursor-pointer md:hidden hover:opacity-[1]`} onClick={toggleMenu}>
            <span className={`w-full h-[2px] p-[2px] ${isToggled ? "rotate-[-45deg]" : ""} transition-all rounded-lg bg-flixWhite-200 mb-[5px]`}></span>
            <span className={`w-full h-[2px] p-[2px] ${isToggled ? "translate-x-[200px]" : ""} transition-all rounded-lg bg-flixWhite-200 mb-[5px]`}></span>
            <span className={`w-full h-[2px] p-[2px] ${isToggled ? "rotate-[45deg] translate-y-[-17px]" : ""} transition-all rounded-lg bg-flixWhite-200 mb-[5px]`}></span>
        </div>
    )
}