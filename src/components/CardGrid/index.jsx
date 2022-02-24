import React from "react";
import { Space, Card, List, Divider, Typography, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CardGrid = (props) => {
  return (
    <List
      itemLayout="horizontal"
      grid={{ gutter: 16, column: 3 }}
      size="large"
      style={{ maxWidth: "1000px" }}
      dataSource={props.dataSource}
      renderItem={(item) => (
        <List.Item onClick={() => props.onClick(item)}>
          <Card
            hoverable
            style={{ width: 300 }}
            title={item.modelo}
            cover={<img alt="car" src={item.foto} />}
          >
            <Meta
              title="Oferta especial"
              description="Confira está grande oportunidade que temos para você. 
              Veiculos altamente confortáveis, com quatro rodas, cinco assentos
                e o valor naquele preço."
            />
            <Divider />
            <Tag color="blue">Ano: {item.ano}</Tag>
            <Tag color="cyan">Marca: {item.marca}</Tag>
            <Divider />
            <Title level={4}>R$ {item.preco}</Title>
            <IconText
              icon={EyeOutlined}
              text={`${item.visualizacoes} visualizações`}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CardGrid;
