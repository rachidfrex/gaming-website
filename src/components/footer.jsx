import React from "react";
import { Link } from "react-router-dom";
import { SiPatreon } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full flex flex-col  justify-center  items-center bg-slate-950 text-white py-10">
      <div className="flex  justify-between  items-center gap-36 ">
        <h1 className="p-[10px] text-lg font-bold tracking-[0.25rem] flex items-center justify-start">
          <Link to={"/"}>
            <strong className="text-red-500  ">G</strong> AMING
          </Link>
        </h1>
        <div className=" list-none flex flex-row justify-center items-center gap-4">
          <li className="  ">
            <Link to={"/games"}>Games</Link>
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
      </div>
      {/* add the social media  */}
      <div className="flex justify-center items-center gap-5 text-2xl py-7">
        <span  className=" bg-slate-600 p-2 rounded-sm ">
          <FaFacebookF  />
        </span>
        <span  className="bg-slate-600 p-2 rounded-sm">
            <FaTwitter />
        </span >
        <span className="bg-slate-600 p-2 rounded-sm">
            <FaInstagram />
        </span>
        <span className="bg-slate-600 p-2 rounded-sm" >
            <FaYoutube />
        </span>
      </div>
      <div>
        <p className="text-center text-sm">
          © 2021 Gaming, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
