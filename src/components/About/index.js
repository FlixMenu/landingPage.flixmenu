import React from 'react'
import phone from '../../assets/img/mockup/phoneB.png'
// import pattern from '../../assets/img/pattern.png'

function AboutComp() {
    return (
        <div className="relative w-screen h-screen mt-10">
            <div className="container p-10 w-full h-auto flex flex-col-reverse md:flex-row">
                <div id="left" className={`relative w-6/12 h-[25rem] bg-pattern bg-cover p-0 m-0 overflow-hidden rounded-3xl`}>
                    <div id="ovl" className='absolute top-0 left-0 bg-flixDark-900 w-full h-full flex flex-col align-center items-center justify-center'>
                        <img src={phone} alt="" className="relative mb-[-200px] text-center  w-[300px] rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComp