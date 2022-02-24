import React from "react";
import { Space, Tag, List, Divider, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CardList = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      style={{ maxWidth: "1000px" }}
      dataSource={props.dataSource}
      renderItem={(item) => (
        <List.Item
          style={{ marginBottom: 16, cursor: "pointer" }}
          onClick={() => props.onClick(item)}
          key={item.key}
          extra={
            <img
              width={250}
              style={{ borderRadius: "15px" }}
              alt="car"
              src={item.foto}
            />
          }
        >
          <List.Item.Meta title={item.modelo} description="Oferta especial" />
          Confira está grande oportunidade que temos para você. <br /> Veiculos
          altamente confortáveis, com quatro rodas, cinco assentos e o valor
          naquele preço.
          <Divider />
          <Tag color="blue">Ano: {item.ano}</Tag>
          <Tag color="cyan">Marca: {item.marca}</Tag>
          <Divider />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={4}>R$ {item.preco}</Title>
            <IconText icon={EyeOutlined} text="100 visalizações" />
          </div>
        </List.Item>
      )}
    />
  );
};

export default CardList;
