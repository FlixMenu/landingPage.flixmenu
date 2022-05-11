import React from 'react'

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div className="w-full h-auto py-[30px] bg-flixDark-905 text-center flex flex-col items-center justify-center">
            <p className='font-light text-white'>FlixMenu &copy; copyright </p>
            <p className='font-light text-[12px] text-flixWhite-400'> {new Date().getFullYear()} All right reserved. </p>
            <br />
            <div className="w-full flex flex-row items-center justify-center">
                <a href="https://twitter.com/flixxmenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaGithub className=' text-[20px] ml-6' />
                </a>
                <a href="https://twitter.com/flixxmenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaTwitter className=' text-[20px] ml-5' />
                </a>
                <a href="https://twitter.com/flixxmenu" target="_blank" className=' w-[100px] ml-5 '>
                    <FaLinkedin className=' text-[20px] ml-5' />
                </a>
            </div>
        </div>
    )
}

export default Footer