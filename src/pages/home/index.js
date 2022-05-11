import React, { useContext } from "react";
import DataContext from "../../context/Datacontext";
import { AboutComp, HomeHeader, FlashScreen, Services, Footer } from '../../components'
import { PageLoadingLoader } from "../../components/Loders";

function Home() {

    const { flashscreenVisibility } = useContext(DataContext)

    return (
        <div className="relative mx-auto w-screen h-screen bg-flixDark-800">
            {/* show flash screen on startup */}

            {
                flashscreenVisibility ?

                    <div className="w-screen h-screen flex flex-col items-center justify-center">
                        <PageLoadingLoader />
                        <small>Loading...</small>
                    </div>
                    :

                    <React.Fragment>
                        <HomeHeader />
                        <br />
                        <AboutComp />
                        <br />
                        <a href="" id='#about'></a>
                        <Services />
                        <br />
                        <Footer />
                    </React.Fragment>
            }
        </div>
    )
}

export default Home