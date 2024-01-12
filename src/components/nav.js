import { SiPatreon } from "react-icons/si";
import { useState } from "react";
import { Link } from 'react-router-dom'
function Nav() {
  const [show, handleShow] = useState(false);
  function showNav() {
    handleShow(!show);
  }
  return (
    <nav className="flex w-full md:w-[70%] bg-white/25 backdrop-blur-sm  fixed top-2 justify-between items-center gap-2 z-50">
      <h1 className="p-[10px] text-lg font-bold tracking-[0.25rem]">
      <Link to={'/'}>
      <strong className="text-red-500 border-b-2 border-red-500 ">
          G
        </strong>{" "}
        AMING
      </Link>
      </h1>
      <div className="flex items-center text-sm gap-4  list-none ">
        <li className="  ">
          <Link to={'/games'}>Games</Link>
        </li>
        <li>
          <a href="#">Marketing</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="   ">
          <a className="patreon  flex items-center " href="# ">
            {" "}
            <SiPatreon className="mr-2 text-black " />
            Become a member
          </a>
        </li>
      </div>
      <div className="flex justify-center items-center gap-4  ">
        <button className=" bg-red-600 text-white text-sm rounded-full  min-w-[6rem] px-4 py-2 ">
          register 
        </button>
        <button className="border border-red-600 text-red-500 text-sm rounded-full min-w-[6rem] px-4 py-2 ">
          login 
        </button>
      </div>
    </nav>
  );
}

export default Nav;
