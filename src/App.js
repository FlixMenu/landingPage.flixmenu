
import React from "react"
import "./index.css"
import Aos from "aos"
import { motion } from "framer-motion"

Aos.init()

export default function App() {
  return (
    <React.Fragment>
      <div className="bg-dark-800 w-screen h-[100vh]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white-200">Ready to dive in?</span>
            <span className="block text-white-600">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-dark-800  bg-orange-800 hover:bg-orange-500"> Get started </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border-transparent text-base font-medium rounded-md text-orange-500 bg-dark-700 border-[3px] border-orange-500 hover:bg-indigo-50"> Learn more </a>
            </div>
          </div>
        </div>
        <h1 className="ml-3 p-3 text-white-200 font-extrabold text-[50px]">Animation</h1>
        <br />
        <br />
        <br />
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[100px] h-[100px] p-[10px] bg-orange-500 rounded-lg ml-[100px]"
        ></motion.div>
      </div>
      <ColorCodes />
    </React.Fragment>
  )
}


function ColorCodes() {

  return (
    <div className="py-5 px-4 bg-black w-screen h-screen">
      <h1 className="font-bold text-2xl text-white-200">Color Codes</h1>
      <br />
      <div className="flex justify-start align-start md:flex-wrap sm:flex-wrap flex-wrap">
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-dark-500 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-dark-800 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-orange-500 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-orange-800 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-white-200 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-white-400 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-white-600 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
        <div data-aos="zoom-in-up" className="px-[10px] py-[5px] bg-white-800 mr-4 w-[100px] h-[50px] rounded-md mt-4 flex-wrap"></div>
      </div>
    </div >
  )
}