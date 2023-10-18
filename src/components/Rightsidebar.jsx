import { Avatar, Divider, Dropdown, Space, Tooltip } from "antd";
import {
  AntDesignOutlined,
  UserOutlined,
  DownOutlined,
  ArrowRightOutlined,
  VideoCameraOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const Rightsidebar = () => {
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];
  return (
    <>
      <div className="relative">
        <small className="text-[#6E62E5]">Premium Access</small>
        <h1 className="font-bold text-[#1E2125] text-3xl">
          Take Back Your Creative
          <br /> Control
        </h1>
        <Avatar.Group className="absolute bottom-0 right-0">
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <a href="https://ant.design">
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: "#1677ff",
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
      <div className="mt-5">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="text-xs text-[#A5ABB3] cursor-pointer"
          >
            <Space>
              The Profesional Platform
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="border border-[#F5F5F5] rounded-xl p-3 flex justify-between mt-5 text-[#6E62E5]">
        <p className="text-sm">Upgrade Now</p>
        <ArrowRightOutlined />
      </div>
      <Divider />
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="h-11 w-11 rounded-full bg-slate-100"></div>
        </div>
        <div className="w-full">
          <h2 className="text-base font-semibold text-[#1E2125]">
            Meeting with Client
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <VideoCameraOutlined />
              <p className=" font-semibold items-center">Google Meet</p>
            </div>
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <FieldTimeOutlined />
              <p className="items-center">03 pm</p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="h-11 w-11 rounded-full bg-slate-100"></div>
        </div>
        <div className="w-full">
          <h2 className="text-base font-semibold text-[#1E2125]">
            Meeting with Client
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <VideoCameraOutlined />
              <p className=" font-semibold items-center">Google Meet</p>
            </div>
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <FieldTimeOutlined />
              <p className="items-center">03 pm</p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="h-11 w-11 rounded-full bg-slate-100"></div>
        </div>
        <div className="w-full">
          <h2 className="text-base font-semibold text-[#1E2125]">
            Meeting with Client
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <VideoCameraOutlined />
              <p className=" font-semibold items-center">Google Meet</p>
            </div>
            <div className="flex gap-1 text-[#A7ADB5] items-center">
              <FieldTimeOutlined />
              <p className="items-center">03 pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
