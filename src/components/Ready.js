import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
function Ready() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://api.rawg.io/api/games?key=7c591a53feab44b1b15867c2f86721e0&dates=2020-09-01,2020-09-30"
      );
      setGames(resp.data.results);
      console.log(resp.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 mx-15 m-10 gid">
      {games.map((game) => (
        <div
          key={game.id}
          className="  overflow-hidden   border-2 text-white  border-gray-900 m-5  rounded-xl bg-gray-900 shadow-lg "
        >
          <img className="game-image" src={game.background_image} alt="" />
          <div className="p-2 px-3">
            <h1 className=" text-xl font-bold ">{game.name}</h1>
            <p>{game.rating}</p>
            <p>{game.released}</p>
            <p className="border py-1 px-2 border-white flex items-center rounded-[5px] min-w-[20%] max-w-[25%] ">
              <p className="text-md">
                <FaPlus />
              </p>
              {game.added}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ready;
