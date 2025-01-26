// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Manager1 from './components/Manager1'
import Manager2 from './components/Manager2'
import Manager3 from './components/Manager3'
import Manager4 from './components/Manager4'
import Manager5 from './components/Manager5'
import Manager6 from './components/Manager6'
import Manager7 from './components/Manager7'
import Manager8 from './components/Manager8'
import Manager9 from './components/Manager9'
import Footer from './components/Footer'
import Footer1 from './components/Footer1'

function App() {


  return (
    <>

      <img src="/public/icons/logo1.svg" className=' fixed cursor-pointer mt-[670px] ml-[1460px]' alt="" />
      <div className="">
        <div className="h-24 w-[1047px] mt-[620px] ml-[228px] bg-white fixed rounded-xl">
          <div className="flex items-center justify-center ml-14">
            <div className="flex items-center justify-center">
              <div className="flex flex-col mt-9">
                <div className="ml-[205px]">
                  <p className="text-[16px] flex items-center justify-center ml-[-288px] mt-[-18px] gap-3 text-black font-bold">
                    Job Bootcamp <br />
                    <span className="text-sm text-black rounded-e-full h-7 w-36 text-center flex items-center justify-center bg-blue-100 px-3">For professionals</span>
                  </p>
                </div>
                <h1 className='text-[13px] items-start ml-[-70px] mt-2'>Placement assistance, live+ & blended learning</h1>
              </div>
              <button className="px-6 py-3 flex items-center justify-center bg-neutral-950 text-white font-bold text-sm rounded-lg border border-black hover:bg-white hover:text-black ml-5 mt-6">
                Explore Job Bootcamp

              </button>
            </div>
            <div className="flex items-center mt-5 ml-7">
              <div className="h-14 w-px bg-gray-300"></div>
            </div>

            <div className="flex items-center justify-center gap-5 ml-4">
              <div className="flex flex-col mt-9">
                <div className="">
                  <p className="text-[16px] flex items-start  mt-[-18px] gap-3 text-black font-bold">
                    IIT Certifications <br />

                  </p>
                </div>
                <h1 className='text-[13px] items-start  mt-2'>Programs in collaboration with IIT Guwahati</h1>
              </div>
              <button className="px-6 py-3 flex items-center justify-center bg-[#f37126] text-white font-bold text-sm rounded-lg  hover:bg-[#f38a4d]  mt-6">
                Explore Job Bootcamp

              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Manager />
      <Manager1 />
      <Manager2 />
      <Manager8 />
      <Manager9 />
      <Manager3 />
      <Manager6 />
      <Manager7 />
      <Manager5 />
      <Manager4 />
      <Footer1 />
      <Footer />

    </>
  )
}

export default App
