import React from 'react';
import { Navbar } from '../../components';
import ServicesCard from '../../components/ServicesCard';

function Services () {
    return (
        <>
        <Navbar />
        <h1 className='text-[45px] lg:text-[60px] text-white font-bold text-center'>Grow with FlixMenu</h1>
        <p className='max-w-[600px] lg:max-w-[800px] text-center mx-auto mb-[50px] lg:mb-[114px]'>Flixmenu does not only helps your organization in digitizing menus, our main obligation is To help your business grow successfully.</p>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-[28px] mx-auto px-[30px] pb-[40px]'>
            <ServicesCard iconPath={'./qrCodeIcon.svg'} title={'Digitize Menu'} description={'FlixMenu enables your organization generate unique qr codes seemlessly.'} />
            <ServicesCard iconPath={'./FoodOrderingIcon.svg'} title={'Food Ordering'} description={'FlixMenu reduces the stress of food ordering within a restaurants. Gives sufficients power to restaurants menus.'} />
            <ServicesCard iconPath={'./paymentIcon.svg'} title={'Accept Payments'} description={'Get paid easily the way you choose.'} />
        </div>
        </>
    )
}

export default Services;