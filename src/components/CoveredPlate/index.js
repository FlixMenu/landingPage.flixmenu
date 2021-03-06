import { motion } from 'framer-motion';

const CoveredPlate = ({className, initial, animate}) => {
    return (
        <motion.svg initial={initial} animate={animate} className={className} width="66" height="36.3" viewBox="0 0 180 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_45_13)">
                <rect x="23.1555" y="83.1482" width="111.41" height="5.62464" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.7929 0.185547C76.0315 0.185547 73.7929 2.42413 73.7929 5.18555V5.97894C58.0782 7.13816 43.2355 13.8789 32.0173 25.0646C19.8065 37.2398 12.8773 53.6969 12.6997 70.8964H3.92108C2.08264 70.8964 0.592285 72.3868 0.592285 74.2252C0.592285 76.0637 2.08264 77.554 3.92108 77.554H153.802C155.64 77.554 157.131 76.0637 157.131 74.2252C157.131 72.3868 155.64 70.8964 153.802 70.8964H144.625C144.448 53.6969 137.518 37.2399 125.308 25.0646C114.184 13.9731 99.4963 7.25191 83.9285 6.00939V5.18555C83.9285 2.42412 81.6899 0.185547 78.9285 0.185547H78.7929Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_d_45_13" x="0.592285" y="0.185547" width="178.539" height="96.5874" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="18" dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_13"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_13" result="shape"/>
                </filter>
            </defs>
        </motion.svg>
    )
}

export default CoveredPlate;