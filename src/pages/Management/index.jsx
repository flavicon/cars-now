import { Table, Row, Col, Space, Button, Input } from "antd";
import { useDiscounts } from "../../hooks/useDiscount";
import ModalDiscount from "../../components/Modal";

const { Search } = Input;
const columns = [
  {
    title: "Marca",
    dataIndex: "marca",
    key: "marca",
  },
  {
    title: "Ação",
    key: "ação",
    render: () => (
      <Space size="middle">
        <Button type="primary">Editar</Button>
        <Button type="primary" danger>
          Deletar
        </Button>
      </Space>
    ),
  },
];

const Management = () => {
  const { discounts, createDiscunt, showModalDiscount } = useDiscounts();

  const handleCreateDiscount = () => {};

  return (
    <main>
      <Row style={{ margin: "32px 16px" }}>
        <Col span={24}>
          <h1>Ofertas cadastradas</h1>
        </Col>
      </Row>
      <Row style={{ margin: "0 16px" }}>
        <Col
          span={24}
          style={{
            margin: "16px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button type="primary" onClick={showModalDiscount}>
            Adicionar oferta
          </Button>
          <ModalDiscount />
          <Search
            placeholder="input search text"
            allowClear
            style={{ width: 200 }}
          />
        </Col>
      </Row>
      <Row style={{ margin: "0 16px" }}>
        <Col span={24}>
          <Table columns={columns} dataSource={discounts} />
        </Col>
      </Row>
    </main>
  );
};

export default Management;
