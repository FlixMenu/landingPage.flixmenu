import { motion } from 'framer-motion';

const Corner = ({width, height, position, className, initial, animate}) => {

    const getRotate = (position) => {
        switch (position) {
            case 'top-left': 
                return {rotateX: 0};
            case 'bottom-left':
                return {rotateX: 180};
            case 'top-right':
                return {rotateY: 180};
            case 'bottom-right': 
                return {rotateY: 180, rotateX: 180};
        }
    };
    let rotatePosition = getRotate(position);
    return (
        <motion.svg initial={{...initial, ...rotatePosition}} animate={{...animate}} className={className} width={width} height={height} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="82" y1="6" x2="6" y2="6" stroke="white" stroke-width="12" stroke-linecap="round"/>
            <line x1="6" y1="82" x2="6" y2="6" stroke="white" stroke-width="12" stroke-linecap="round"/>
            <path d="M7.49983 31.5004C10.0001 14.5 19.0202 7.55497 34.5202 7.55497" stroke="white" stroke-width="9"/>
        </motion.svg>
    )
}

export default Corner;