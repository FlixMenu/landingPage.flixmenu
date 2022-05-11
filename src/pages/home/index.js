import React, { useContext } from "react";
import DataContext from "../../context/Datacontext";
import { AboutComp, HomeHeader, FlashScreen } from '../../components'

function Home() {

    const { flashscreenVisibility } = useContext(DataContext)

    return (
        <div className="relative mx-auto w-screen h-screen bg-flixDark-800">
            {/* show flash screen on startup */}

            <React.Fragment>
                <HomeHeader />
                <br />
                <AboutComp />
            </React.Fragment>
        </div>
    )
}

export default Home