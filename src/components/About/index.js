import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/img/mockup/phoneB.png'

function AboutComp() {
    return (
        <div className="relative mt-20 w-screen h-screen m-auto flex flex-col-reverse align-start justify-center md:flex-row md:mt-0">
            <div className="relative container p-5 m-auto w-[100%] flex flex-col-reverse space-x-0 md:space-x-20 md:flex-row">
                <div id="left" className={`relative w-full h-[25rem] bg-pattern bg-cover rounded-tl-[15px] rounded-tr-[15px] overflow-hidden md:w-[50%]`}>
                    <div id="ovl" className='relative bg-flixDark-transparentDark w-full h-full flex flex-col align-center items-center justify-center overflow-hidden rounded-tl-lg rounded-tr-lg border-flixDark-transparentDark'>
                        <img src={phone} alt="" className="relative mb-[-200px] text-center  w-[300px] rounded" />
                    </div>
                </div>
                <div id="cssc" className="relative w-full h-auto  mb-10 md:mb-0 md:w-[50%]">
                    <div className="top">
                        <span className="text-sm text-flixWhite-800">About Us</span>
                        <br />
                        <h1 className="text-[40px] text-flixWhite-200 font-extrabold">Revolutionizing Food Menus</h1>
                        <br />
                        <p className="font-extralight text-[15px]">
                            FlixMenu is basically an application which is meant not only to Digitize Restaurants
                            Menus, but to Automate the workflow going on within a restaurant.
                        </p>
                        <br />
                        <p className="font-extralight text-[15px]">
                            And when we talk
                            about workflows, It is basically the activities done within a restaurants Organization and
                            End Users which in this case would be the customers.
                        </p>
                        <br />
                        <a href="#waitlist" className='text-[20px] text-flixWhite-200 underline'>Get Early Access</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComp