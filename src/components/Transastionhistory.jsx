import React from "react";
import {
  Space,
  Table,
  Button,
  Dropdown,
  message,
  Tag,
  Avatar,
  Tooltip,
} from "antd";
import {
  DownOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const Transastionhistory = () => {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: (text) => (
        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-slate-100"></div>
            <div className="h-5 w-5 rounded-full bg-[#1E2125] -bottom-1 -right-1 absolute"></div>
          </div>
          <div className="">
            <h2 className="text-base font-semibold text-[#1E2125]">{text}</h2>
            <p className="text-[#A9AFB7]">johantosan@gmail.com</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <div className="flex gap-2 items-center px-3 py-1 border-[#F1F1F1] border rounded-full w-fit">
          <div className="h-2 w-2 bg-[#3DC764] rounded-full"></div>
          {text}
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p className="text-[#2C2F32] font-medium">{text}</p>,
    },
    {
      title: "Invoice",
      key: "invoice",
      dataIndex: "invoice",
      render: (text) => <p className="text-[#2C2F32] font-medium">{text}</p>,
    },
    {
      title: "People",
      key: "people",
      render: () => (
        <Avatar.Group>
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
        </Avatar.Group>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      customer: "John Brown",
      status: "Success",
      date: "Nov 02, 2021",
      invoice: "$100,00",
      people: ["nice", "developer"],
    },
    {
      key: "2",
      customer: "John Brown",
      status: "Pending",
      date: "Nov 02, 2021",
      invoice: "$100,00",
      people: ["nice", "developer"],
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-3xl font-semibold text-[#1E2125]">
          Transastion History
        </h1>
        <Space wrap>
          <Dropdown menu={menuProps} className="month_button">
            <Button>
              <Space>
                <CalendarOutlined />
                Month
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Space wrap>
          <Dropdown menu={menuProps} className="shorting_button">
            <Button>
              <Space>
                Recepient
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>{" "}
        <Space wrap>
          <Dropdown menu={menuProps} className="shorting_button">
            <Button>
              <Space>
                Amount
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>{" "}
        <Space wrap>
          <Dropdown menu={menuProps} className="shorting_button">
            <Button>
              <Space>
                Status
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        className="transastion_table"
      />
      ;
    </section>
  );
};

export default Transastionhistory;
