import React from "react";

const Grothcard = () => {
  return (
    <div className="p-5 rounded-xl w-full flex justify-between bg-[#6E62E5]">
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 bg-slate-100 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-light text-sm">Monthly Revenue</p>
          <div className="flex gap-2 items-center">
            <h2 className="text-white font-semibold text-2xl">$3.500</h2>
            <span className="py-1 px-2 bg-white text-[#6E62E5] rounded-full">
              +2.4%
            </span>
          </div>
          <p className="text-white font-light text-sm">
            Previous Month <b className="font-semibold">$1.7k</b>
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 bg-slate-100 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-light text-sm">Monthly Sales</p>
          <div className="flex gap-2 items-center">
            <h2 className="text-white font-semibold text-2xl">$6.750</h2>
            <span className="py-1 px-2 bg-white text-[#6E62E5] rounded-full">
              +1.4%
            </span>
          </div>
          <p className="text-white font-light text-sm">
            Previous Month <b className="font-semibold">$3.1k</b>
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 bg-slate-100 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-light text-sm">Total Profit</p>
          <div className="flex gap-2 items-center">
            <h2 className="text-white font-semibold text-2xl">$10.900</h2>
            <span className="py-1 px-2 bg-white text-[#6E62E5] rounded-full">
              +4.3%
            </span>
          </div>
          <p className="text-white font-light text-sm">
            Previous Year <b className="font-semibold">$8.9k</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grothcard;
