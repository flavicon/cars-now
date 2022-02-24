import { useNavigate, Outlet } from "react-router-dom";
import { Menu, Layout } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const menuStyles = { display: "flex", justifyContent: "end" };

const Home = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          background: "white",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
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
            backgroundColor: "white",
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

export default Home;
