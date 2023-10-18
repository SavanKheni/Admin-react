import { Button, Drawer } from "antd";
import {
  bell,
  search,
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
import { useState } from "react";
import { AlignRightOutlined } from "@ant-design/icons";
import SideBar from "./SideBar";
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="p-7 flex w-full gap-8">
      <div className="w-[70%] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="block">
            <div className="p-1 border-2 border-gray-100 rounded-full relative">
              <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
              <div className="h-5 w-5 bg-lavender-blue border border-white rounded-full absolute top-0 -right-2 flex items-center justify-center">
                <small className="text-white ">3</small>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Good Evening Team!</h2>
            <small className="text-steel-blue">
              Have an in-depth look at all the metrics within your dashboard
            </small>
          </div>
        </div>
        <div className="h-10 w-10 bg-light-silver rounded-full flex justify-center items-center">
          <img src={search} alt="logo" className="h-5 w-5" />
        </div>
      </div>
      <div className="w-[30%] flex justify-between items-center">
        <img src={bell} alt="logo" className="h-5 w-5" />
        <div className="w-auto desktop:w-36 desktop-small:w-36 p-1 rounded-full shadow-lg bg-white flex gap-2 items-center">
          <div className="h-8 w-8 bg-slate-300 rounded-full"></div>
          <p className="hidden desktop:block desktop-small:block">Jhontosan</p>
        </div>
        <AlignRightOutlined onClick={showDrawer} className="desktop:hidden" />

        <Drawer
          title={<h1 className="text-3xl font-semibold">Omoi</h1>}
          placement="right"
          onClose={onClose}
          open={open}
        >
          <div className="flex-col items-start gap-8 border-r border-r-gray-100">
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
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
