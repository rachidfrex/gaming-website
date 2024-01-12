import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Gamesdait() {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}?key=7c591a53feab44b1b15867c2f86721e0`
      );
      const data = await res.json();
      setGame(data);
      console.log(data);
    };
    const fetchscreenshots = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=7c591a53feab44b1b15867c2f86721e0`
      );
      const data = await res.json();
      setScreenshots(data.results);
      console.log(data.results);
    };
    fetchscreenshots();
    fetchGame();
  }, [id]);

  return (
    <div className="w-full flex flex-col gap-4 justify-start items-center relative min-h-screen mt-20">
      <div className=" w-[70%]  relative">
        <div className="  flex gap-5 justify-start items-center aspect-video w-[100%] h-full  absolute bg-gradient-to-t rounded-lg  from-black/70 from-60% via-black/60  to-transparent ">
          <div className="w-[80%] ml-10 ">
            <h1 className="text-4xl text-white   w-full flex  font-bold">
              {game.name}
            </h1>
            <p className="text-white text-sm  flex mt-5   ">
              {game.description_raw}
            </p>
            <div className="text-white mt-5 flex gap-2 justify-start items-center ">
              <p>{game.rating}</p>
              <svg
                className="text-lg text-yellow-300"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-white flex flex-col gap-4  w-[40%]">
            <img
              src={game.background_image_additional}
              alt=""
              className="w-[300px] rounded-lg"
            />
            <div className=" grid grid-cols-2 gap-3 w-[90%]   ">
              {screenshots.map((screenshot) => {
                return (
                  <img
                    src={screenshot.image}
                    alt=""
                    className=" aspect-video rounded-lg"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <img
          className="aspect-video w-full flex  rounded-lg "
          src={game.background_image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Gamesdait;
