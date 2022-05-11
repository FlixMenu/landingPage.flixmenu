import React from 'react';
import { Navbar } from '..';
import ServicesCard from '../ServicesCard';

function Services() {
    return (
        <div className='mt-[100px] w-screen h-auto flex flex-col-reverse items-start justify-between md:mt-[10px]'>
            <a href="" id='#services'></a>
            <div className='w-full flex flex-col items-center justify-center gap-[28px] mx-auto px-[30px] pb-[40px] md:flex-row'>
                <ServicesCard aosDirection={"fade-right"} iconPath={'./qrCodeIcon.svg'} title={'Digitize Menu'} description={'FlixMenu enables your organization generate unique qr codes seemlessly.'} />
                <ServicesCard aosDirection={"fade-up"} iconPath={'./FoodOrderingIcon.svg'} title={'Food Ordering'} description={'FlixMenu reduces the stress of food ordering within a restaurants. Gives sufficients power to restaurants menus.'} />
                <ServicesCard aosDirection={"fade-left"} iconPath={'./paymentIcon.svg'} title={'Accept Payments'} description={'Get paid easily the way you choose.'} />
            </div>
            <div data-aos="fade-up" id="right" className="w-full h-full mt-5">
                <h1 className='text-[35px] lg:text-[40px] text-white font-bold text-center'>Grow with FlixMenu</h1>
                <p className='max-w-[600px] lg:max-w-[800px] text-center mx-auto mb-[50px] lg:mb-[114px]'>Flixmenu does not only helps your organization in digitizing menus, our main obligation is To help your business grow successfully.</p>
            </div>
        </div>
    )
}

export default Services;