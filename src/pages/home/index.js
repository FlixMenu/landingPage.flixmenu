import React from 'react'
import { AboutComp, HomeHeader } from '../../components'

function Home() {
    return (
        <div className="relative mx-auto w-screen h-screen bg-flixDark-800">
            <HomeHeader />
            <br />
            <AboutComp />
        </div>
    )
}

export default Home