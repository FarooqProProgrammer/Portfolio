import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"
import "./index.css"

export default function Header() {
    const [openHandle, setOpenHandle] = useState(false);

    return (
        <>
            <div className='w-full h-[80px]  bg-[#e74c3c] flex justify-between items-center px-10'>
                <div className="Logo">
                    <h1 className='text-5xl text-[#fff] font-bold'>Brand</h1>
                </div>
                <div className="Links">
                    <ul className='flex gap-4'>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Home</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>About</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Project</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Services</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Contact</span>
                        </li>
                    </ul>
                </div>
                <div className="btn px-10 py-2 bg-white cursor-pointer">
                    <button className='text-[#e74c3c] font-bold '>Get Started</button>
                </div>
                <div className="Icon">
                    <FiMenu className='text-5xl text-white' onClick={() => setOpenHandle(true)}/>
                </div>
            </div>

            {
                openHandle && <div className="mobile relative w-full h-[500px] bg-[#e74c3c] flex flex-col justify-around items-center">
                    <FaTimes className="absolute right-5 text-white text-2xl top-2" onClick={() => setOpenHandle(false)} />
                    <ul className='flex flex-col  gap-16'>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Home</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>About</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Project</span>
                        </li>
                        <li>
                            <span className='text-[#fff] text-xl font-semibold cursor-pointer'>Services</span>
                        </li>
                        <li>
                            <span  className='text-[#fff] text-xl font-semibold cursor-pointer'>Contact</span>
                        </li>
                    </ul>
                </div>
            }

        </>
    )
}
