import React from 'react'

import { FaGithub, FaTwitter, FaLinkedin, FaPaypal } from 'react-icons/fa'

function Footer() {
    return (
        <div className="w-full h-auto py-[30px] bg-flixDark-905 text-center flex flex-col items-center justify-center">
            <p className='font-light text-white'>FlixMenu &copy; copyright </p>
            <p className='font-light text-[12px] text-flixWhite-400'> {new Date().getFullYear()} All right reserved. </p>
            <br />
            <div className="w-full flex flex-row items-center justify-center">
                <a href="https://github.com/FlixMenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaGithub className=' text-[20px] ml-6' />
                </a>
                <a href="https://twitter.com/flixxmenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaTwitter className=' text-[20px] ml-5' />
                </a>
                <a href="https://www.linkedin.com/company/flixmenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaLinkedin className=' text-[20px] ml-5' />
                </a>
            </div>
            <br />
            <a href="https://www.paypal.com/paypalme/flixmenu" target="_blank" className="px-5 py-1 bg-flixDark-500 rounded-[30px] flex flex-row items-center justify-start border-[2px] border-dashed border-flixWhite-800 md:hidden">
                <FaPaypal className='mr-2' /> Support Us
            </a>
        </div>
    )
}

export default Footer