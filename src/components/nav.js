import { SiPatreon } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
function Nav() {
  const [menuHidden, setMenuHidden] = useState(true);
  const handleBurgerClick = () => {
    console.log("Burger clicked!");
    setMenuHidden(!menuHidden);
  };

  return (
    <nav className="flex  items-center w-full md:w-[70%] bg-white/25 backdrop-blur-sm   md:fixed top-2  gap-2 z-50  ">
      <div className="flex justify-between  w-full ml-2  ">
        
          <h1 className="p-[10px] text-lg font-bold tracking-[0.25rem]   ">
            <Link to={"/"}>
              <strong className="text-red-500  ">G</strong>
              AMING
            </Link>
          </h1>
        </div>
        <div
          id="burger"
          className="px-4 cursor-pointer md:hidden relative  "
          onClick={handleBurgerClick}
        >
          <span className="text-4xl">
            <IoMenu />
          </span>
        
      </div>
      <ul
        className={`  ${
          menuHidden ? "hidden" : ""
        }  text-sm gap-4  list-none md:flex  md:justify-center absolute md:static right-0 top-10   `}
      >
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
      </ul>
      <div className=" justify-center items-center gap-3 md:flex hidden   ">
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
