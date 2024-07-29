import { HiDotsVertical } from "react-icons/hi";

export const Card = () => {
  return (
    <article className="flex flex-col gap-2 p-2 bg-white px-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3>Card title</h3>
          <span className="text-xs text-[#00000073]">card date</span>
        </div>
        <button>
          <HiDotsVertical />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <p className="text-sm">User Name</p>
      </div>
    </article>
  );
};
