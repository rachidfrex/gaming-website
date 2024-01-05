import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { SiPatreon } from "react-icons/si";

function Nav() {
    const [show, handleShow] = React.useState(false);
    function showNav() {
        handleShow(!show);
    }
    return (
        <div >
            <header>
                <nav className='flex justify-center items-center mt-10 '>
                <h1 className="p-[10px] text-lg font-bold tracking-[0.25rem]"> <strong className='text-red-500 border-b-2 border-red-500 '>G</strong>  AMING</h1>
                    <div className="flex items-center  " >
                       
                        <ul className="flex ml-[60px] font-semibold items-center"  > 
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">About</a></li>
                            <li className='   '><a  className='patreon  flex items-center ' href="# "> <SiPatreon  className='mr-2 text-black '/>Become a member</a></li>
                            
                        </ul>
                        
                    </div>
                    <div className='flex p-[10px] text-xl  '>
                        <span className='border border-gray-400 hover:bg-blue-500 hover:text-white hover:border-[#e9eef2] transition-all ease-in duration-100'><FaTwitter /></span>
                        <span className='border-gray-400  border hover:bg-blue-500 hover:text-white hover:border-[#e9eef2] transition-all ease-in duration-100 '><BsDiscord /></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav