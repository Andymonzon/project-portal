export const Form = () => {
  return (
    <form className="px-5 py-2 flex flex-col gap-4 mt-2">
      <div className="flex flex-col">
        <label>Project Name</label>
        <input
          type="text"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <input
          type="text"
          className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Project manager</label>
        <select className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2">
          <option defaultValue="">Select a person</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Asiggned to</label>
        <select className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2">
          <option defaultValue="">Select a person</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Status</label>
        <select className="border-2 border-[#BFBFBF] rounded outline-none px-1 py-2">
          <option defaultValue="">Enabled</option>
        </select>
      </div>
      <button className="bg-[#F5222D] text-white p-2 rounded w-max">
        Create project
      </button>
    </form>
  );
};
