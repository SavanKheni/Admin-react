import React from "react";
import ChartComponent from "../common/Chart";

const Totalcost = () => {
  return (
    <div className="w-full flex flex-col desktop:flex-row desktop-small:flex-row tablet:flex-row py-3 px-5 border border-gray-700 rounded-3 justify-between flex-wrap items-center">
      <div className="">
        <h2 className="text-2xl text-midnight-blue font-semibold">
          Total Sales & Cost
        </h2>
        <p className="text-steel-blue">Last 60 Days</p>
        <div className="flex gap-3 items-center mt-8">
          <h2 className="text-3xl font-bold text-lavender-blue">$956.82K</h2>
          <span className="py-1 px-5 bg-pastel-aqua text-mint-green rounded-full">
            +5.4%
          </span>
        </div>
      </div>

      <ChartComponent />
    </div>
  );
};

export default Totalcost;
