import {
  Typography,
  Table,
  Row,
  Col,
  Space,
  Button,
  Input,
  Popconfirm,
} from "antd";
import { useDiscounts } from "../../hooks/useDiscount";
import ModalDiscount from "../../components/Modal";

const { Title } = Typography;
const { Search } = Input;
const { Column } = Table;

const Management = () => {
  const {
    visibleModalDiscount,
    dataSourceDiscounts,
    showModalDiscount,
    closeModalDiscount,
    deleteDiscount,
    editDiscount,
    filterDiscount,
    handleBlurFilterInput,
  } = useDiscounts();

  return (
    <>
      <Row style={{ textAlign: "center", margin: "32px 16px" }}>
        <Col span={24}>
          <Title level={3}>Ofertas cadastradas</Title>
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
          <ModalDiscount
            visible={visibleModalDiscount}
            onCancel={closeModalDiscount}
            text="Adicionar oferta"
          />
          <Search
            placeholder="pesquise aqui"
            allowClear
            style={{ width: 200 }}
            onChange={(event) => filterDiscount(event.target.value)}
            onBlur={handleBlurFilterInput}
          />
        </Col>
      </Row>
      <Row style={{ margin: "0 16px" }}>
        <Col span={24}>
          <Table dataSource={dataSourceDiscounts}>
            <Column title="Marca" dataIndex="marca" key="marca" />
            <Column title="Modelo" dataIndex="modelo" key="modelo" />
            <Column title="Ano" dataIndex="ano" key="ano" />
            <Column
              title="Preço"
              dataIndex="preco"
              key="preco"
              render={(text) => {
                return `R$ ${text}`;
              }}
            />
            <Column title="KM" dataIndex="km" key="km" />
            <Column title="Placa" dataIndex="placa" key="placa" />
            <Column title="Data" dataIndex="data" key="data" />
            <Column
              title="Ação"
              dataIndex="action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <Button
                    type="primary"
                    onClick={() => editDiscount(record.key)}
                  >
                    Editar
                  </Button>
                  <Popconfirm
                    title="Deseja realmente deletar?"
                    onConfirm={() => deleteDiscount(record.key)}
                  >
                    <Button type="primary" danger>
                      Deletar
                    </Button>
                  </Popconfirm>
                </Space>
              )}
            />
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Management;
