import { useEffect, useRouter } from "react";
import Corner from "../Corner";
import CoveredPlate from "../CoveredPlate";
import { motion } from 'framer-motion';

const FlashScreen = (props) => {

    useEffect(() => { }, 1000)

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-flixOrange-600 to-flixOrange-700 flex items-center justify-center">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="max-auto scale-[1.7] relative left-[5px]">
                <CoveredPlate className='absolute scale-50' initial={{ x: -32.5, y: -24, opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.48, duration: 0.2 } }} />
                <Corner width={40} height={40} position='top-right' className="absolute" animate={{ x: [-72, -36, -48], y: [-24, -60, -48] }} initial={{ x: -72, y: -24 }} />
                <Corner width={40} height={40} position='top-left' className="absolute" animate={{ y: [-24, -60, -48], x: [-24, -60, -48] }} initial={{ y: -24, x: -24 }} />
                <Corner width={40} height={40} position='bottom-right' className="absolute" animate={{ x: [-72, -36, -48], y: [-72, -36, -48] }} initial={{ x: -72, y: -72 }} />
                <Corner width={40} height={40} position='bottom-left' className="absolute" animate={{ x: [-24, -60, -48], y: [-72, -36, -48] }} initial={{ y: -72, x: -24 }} />
            </motion.div>
        </div>
    )
}

export default FlashScreen;