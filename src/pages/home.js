import React from "react";
import Main from '../components/main';
import Nav from '../components/nav';
import Ready from '../components/Ready';
function Home() {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-center relative min-h-screen">
      <Main />
      <Ready />
    </div>
  );
}

export default Home;
