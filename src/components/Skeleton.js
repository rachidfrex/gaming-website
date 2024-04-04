export default function Skeleton() {
  return (
    <div className="animate-pulse flex px-2  flex-col gap-4 justify-start items-center   w-full">
      <div className=" bg-neutral-300 h-40  aspect-video rounded-md  "></div>
      <div className=" bg-neutral-300  h-3 rounded-sm aspect-video w-full "></div>
      <div className=" flex flex-row gap-3 w-full ">
        <div className=" bg-neutral-300  h-3 rounded-sm aspect-video w-10 "></div>
        <div className=" bg-neutral-300  h-3 rounded-sm aspect-video w-10 "></div>
        <div className=" bg-neutral-300  h-3 rounded-sm aspect-video w-10 "></div>
      </div>
      <div className=" bg-neutral-300  h-9 rounded-sm aspect-video w-full "></div>

    </div>
  );
}
