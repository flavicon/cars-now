import { useNavigate, Outlet } from "react-router-dom";
import { Menu, Layout } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";
import WheelIcon from "../../assets/icon-roda.png";

const { Header, Footer, Content } = Layout;

const menuStyles = { width: "100%", display: "flex", justifyContent: "end" };

const LayoutPage = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          background: "white",
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={WheelIcon} alt="logo" width={40} height={40} />
        </div>
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
      </Header>
      <Layout>
        <Content
          style={{
            minHeight: "100vh",
            backgroundColor: "#F8F9FA",
            marginTop: 64,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Powered by flavicon systems &copy;
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
