import { useNavigate, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";

const menuStyles = { display: "flex", justifyContent: "center" };

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Menu mode="horizontal" style={menuStyles}>
        <Menu.Item
          key="outlet"
          icon={<DollarOutlined />}
          onClick={() => navigate("/ofertas")}
        >
          Ofertas
        </Menu.Item>
        <Menu.Item
          key="management"
          icon={<UserOutlined />}
          onClick={() => navigate("/administracao")}
        >
          Administração
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Home;
