import React from 'react'
import { AboutComp, HomeHeader, FlashScreen } from '../../components'

function Home() {
    return (
        <div className="relative mx-auto w-screen h-screen bg-flixDark-800">
            {/* show flash screen on startup */}

            {
                true ?
                    <FlashScreen />
                    :
                    <React.Fragment>
                        <HomeHeader />
                        <br />
                        <h1>asdsadc</h1>
                    </React.Fragment>
            }
        </div>
    )
}

export default Home