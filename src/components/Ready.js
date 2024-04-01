import Games from "./games";

function Ready(props) {
  let aray = props.aray;

  return (
    <div className="  md:w-[70%]  w-full mt-6  ">
      <h1 className="my-5 text-center  text-lg text-slate-900 ">The Best Day <strong className=" border-b-2 border-red-500">Games</strong></h1>
      <div className=" mx-10 md:mx-0 flex justify-center items-center  ">
        
        <Games />
       
      </div>
     
    </div>
  );
}

export default Ready;
