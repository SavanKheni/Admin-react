import React from "react";

const Totalcost = () => {
  return (
    <div className="w-full flex py-3 px-5 border border-[#EBEBEB] rounded-xl justify-between flex-wrap">
      <div className="">
        <h2 className="text-2xl text-[#1E2125] font-semibold">
          Total Sales & Cost
        </h2>
        <p className="text-[#989FA8]">Last 60 Days</p>
        <div className="flex gap-3 items-center mt-8">
          <h2 className="text-3xl font-bold text-[#6E62E5]">$956.82K</h2>
          <span className="py-1 px-5 bg-[#C3F9D9] text-[#3DC764] rounded-full">
            +5.4%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Totalcost;
