import React from "react";
import games from "../img/gampade.png";
function Main() {
  return (
    <div className="overflow-hidden flex justify-center ">
    <div className="flex  justify-center  xl:mx-[260px] mt-20    ">
      <div className="w-[48%] my-10 max-w-[500px]  ">
        <h1 className="text-6xl font-bold">
          Explore the best  Video Games website 
        </h1>
        <p className=" mt-10   text-lg">
        Welcome to our gaming website, where you can explore
         the best video games in the industry. Discover a vast 
         collection of games, read detailed documentation, and get
          your API key to unlock even more features. Join our community 
          of passionate gamers and embark on epic gaming adventures.
           Start your gaming journey today!
         
        </p>
        <button className="  border  font-semibold text-lg mt-5 py-4 px-10 rounded-[15px] hover:bg-blue-500 transition-all ease-in hover:text-white">
            Read documentation
        </button>
         <button className="bg-black hover:bg-blue-500 transition-all ease-in    ml-3 text-lg mt-5 py-4 px-10 text-white font-semibold rounded-[15px]">
         Get API Key
        </button>
      </div>
      <div className="w-[52%] pl-[30px] hidden lg:block  ">
        <img src={games} alt="Description of the image  "  className="max-w-[2200px]" />
      </div>

    </div>
    </div>
  );
}

export default Main;
