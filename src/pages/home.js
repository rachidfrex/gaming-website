import React from "react";
import Main from '../components/main';
import Ready from '../components/Ready';
import Test from "../components/test";
function Home() {
  const message = "Welcome to the Game Zone!";
  const aray = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-center relative min-h-screen">
      <Main  />
      <Ready aray={aray}  />
      <Test message={message} />

      

      
    </div>
  );
}

export default Home;
