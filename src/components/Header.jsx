import { bell, search } from "../common/Images";
const Header = () => {
  return (
    <div className="p-7 flex w-full gap-8">
      <div className="w-[70%] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="block">
            <div className="p-1 border-2 border-[#EEEEEE] rounded-full relative">
              <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
              <div className="h-5 w-5 bg-[#6E62E5] border border-white rounded-full absolute top-0 -right-2 flex items-center justify-center">
                <small className="text-white ">3</small>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Good Evening Team!</h2>
            <small className="text-[#989FA8]">
              Have an in-depth look at all the metrics within your dashboard
            </small>
          </div>
        </div>
        <div className="h-10 w-10 bg-[#F3F4F8] rounded-full flex justify-center items-center">
          <img src={search} alt="logo" className="h-5 w-5" />
        </div>
      </div>
      <div className="w-[30%] flex justify-between items-center">
        <img src={bell} alt="logo" className="h-5 w-5" />
        <div className="w-36 p-1 rounded-full shadow-lg bg-white flex gap-2 items-center">
          <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
          <p>Jhontosan</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
