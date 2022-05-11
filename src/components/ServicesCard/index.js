import React from 'react';

function ServicesCard ({title, description, iconPath}) {
    return (
        <div className='relative w-full max-w-[370px] h-[300px] rounded-[20px] pt-[35px] pl-[15px] pr-[8px] patternedBackground'>
            <img src={iconPath} className='mb-[14px] w-[70px] h-[70px]'/>
            <article>
                <p className='font-bold text-[30px] text-white mb-[6.5px]'>{title}</p>
                <p className='text-[16px] leading-[24px]'>{description}</p>
            </article>
        </div>
    )
}

export default ServicesCard;