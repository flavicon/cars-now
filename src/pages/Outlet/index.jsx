import { Button, Typography } from "antd";
import { BarsOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useDiscounts } from "../../hooks/useDiscount";
import { useState } from "react";
import CardList from "../../components/CardList";
import CardGrid from "../../components/CardGrid";
import useVisualizationCar from "../../hooks/useVisualizationCar";

const { Title } = Typography;

const Outlet = () => {
  const [layout, setLayout] = useState("list");
  const [visualizationCar, showVisualizationCar] = useVisualizationCar();
  const { discounts } = useDiscounts();

  const menuList = () => setLayout("list");
  const menuGrid = () => setLayout("grid");

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <Title level={2}>Ofertas especiais</Title>
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            padding: "24px",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Button onClick={menuList} size="middle" style={{ marginRight: 8 }}>
            <BarsOutlined />
          </Button>
          <Button onClick={menuGrid}>
            <AppstoreOutlined />
          </Button>
        </div>
        {layout === "list" ? (
          <CardList onClick={showVisualizationCar} dataSource={discounts} />
        ) : (
          <CardGrid dataSource={discounts} />
        )}
      </section>
      {visualizationCar}
    </>
  );
};

export default Outlet;
