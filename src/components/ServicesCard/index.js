import React from 'react';

function ServicesCard({ title, description, iconPath, aosDirection }) {
    return (
        <div data-aos={aosDirection} className='relative w-full h-[190px] bg-pattern bg-red-400 bg-cover bg-center overflow-hidden rounded-[10px] md:w-[370px]  '>
            <div className="px-5 py-5 w-full h-full bg-flixDark-transparentDark">
                <img src={iconPath} className='mb-[14px] w-[40px] h-[70px] absolute top-[5px] right-[10px] ' />
                <article className=' flex flex-col items-start justify-start'>
                    <p className='font-bold text-[25px] text-white mb-[6.5px]'>{title}</p>
                    <p className='text-[14px] leading-[24px]'>{description}</p>
                </article>
            </div>
        </div>
    )
}

export default ServicesCard;