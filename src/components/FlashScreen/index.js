import { useEffect, useContext, useState } from "react";
import DataContext from "../../context/Datacontext";
import sleep from "../../helpers/sleep";
import Corner from "../Corner";
import CoveredPlate from "../CoveredPlate";
import { motion } from 'framer-motion';


const FlashScreen = (props) => {

    const { flashscreenVisibility } = useContext(DataContext)
    const [hidelogo, setHideLogo] = useState(false);
    const [hideMainLogoCont, setHideMainLogoCont] = useState()
    const [showlogoonload, setShowLogoOnLoad] = useState(false)

    useEffect(() => {
        // show logo after some interval
        (async () => {
            await sleep(.8)
            setShowLogoOnLoad(true)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (flashscreenVisibility) {
                await sleep(.5)
                setHideLogo(true)
                await sleep(.5)
                setHideMainLogoCont(true)
            }
        })()
    }, [flashscreenVisibility])

    return (
        <div className={`w-screen h-screen bg-gradient-to-br from-flixOrange-600 to-flixOrange-700 flex items-center justify-center transition-all ${hideMainLogoCont ? "scale-[0] hidden" : "scale-[1]"} `}>

            {showlogoonload && <div className={`max-auto ${hidelogo ? "scale-[0]" : "scale-[.84]"} relative transition-all`}>
                <CoveredPlate className='absolute scale-50' initial={{ x: -32.5, y: -24, opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.48, duration: 0.2 } }} />
                <div className="w-screen h-screen bg-gradient-to-br from-flixOrange-600 to-flixOrange-700 flex items-center justify-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-auto scale-[1.7] md:scale-[2.8] relative left-[5px]">
                        <CoveredPlate className='absolute scale-50' initial={{ x: -32.5, y: -24, opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.2 } }} />
                        <Corner width={40} height={40} position='top-right' className="absolute" animate={{ x: [-72, -36, -48], y: [-24, -60, -48] }} initial={{ x: -72, y: -24 }} />
                        <Corner width={40} height={40} position='top-left' className="absolute" animate={{ y: [-24, -60, -48], x: [-24, -60, -48] }} initial={{ y: -24, x: -24 }} />
                        <Corner width={40} height={40} position='bottom-right' className="absolute" animate={{ x: [-72, -36, -48], y: [-72, -36, -48] }} initial={{ x: -72, y: -72 }} />
                        <Corner width={40} height={40} position='bottom-left' className="absolute" animate={{ x: [-24, -60, -48], y: [-72, -36, -48] }} initial={{ y: -72, x: -24 }} />
                    </motion.div>
                </div>
            </div>}
        </div>
    )
}
export default FlashScreen;