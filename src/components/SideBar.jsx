import {
  chart,
  commentdots,
  folder,
  home,
  interrogation,
  logo,
  navigation,
  settings,
  shoppingbag,
} from "../common/Images";

const SideBar = () => {
  return (
    <div className="p-5 w-1/5 hidden desktop:flex flex-col items-start gap-8 border-r border-r-gray-100">
      <div className="flex gap-3 items-center w-full">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-3xl font-semibold">Omoi</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex gap-3 px-5 py-4 items-center bg-lavender-blue w-full rounded-md">
          <img src={home} alt="logo" className="h-5 w-5" />
          <p className="text-sm text-white font-semibold">Home</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={chart} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Analytic</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={navigation} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Explore</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={shoppingbag} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Shop</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={commentdots} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Inbox</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <small className="text-gray-300">Tools</small>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={settings} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Setting</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={interrogation} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Help</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <small className="text-gray-300">Projects</small>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={folder} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Amazon</p>
        </div>
        <div className="flex gap-3 px-5 py-4 items-center w-full rounded-xl">
          <img src={folder} alt="logo" className="h-5 w-5" />
          <p className="text-sm font-semibold">Invinity</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
