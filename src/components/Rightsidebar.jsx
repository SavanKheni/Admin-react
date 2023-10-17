import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

const Rightsidebar = () => {
  return (
    <div>
      <small className="text-[#6E62E5]">Premium Access</small>
      <h1 className="font-bold text-[#1E2125] text-3xl">
        Take Back Your Creative Control
      </h1>
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
        <Avatar
          style={{
            backgroundColor: "#1677ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </div>
  );
};

export default Rightsidebar;
