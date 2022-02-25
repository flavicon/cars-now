import { Space, Tag, Typography, Modal, Carousel, Divider, Image } from "antd";
import moment from "moment";

const { Text } = Typography;

const VisualizationCar = (props) => {
  return (
    <Modal
      visible={props.visible}
      onCancel={props.onCancel}
      title="Oferta especial"
      centered
    >
      <Carousel autoplay dotPosition="left">
        <div width={100}>
          <Image
            src={props.foto}
            alt="foto1"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div width={100}>
          <Image
            src={props.fotoAdicional}
            alt="fotoAdicional"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
      </Carousel>
      <Divider />
      <Space style={{ width: "100%" }} direction="vertical">
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text strong>
            {props.modelo}, {props.ano}
          </Text>
          <Space size={1}>
            <Tag color="geekblue">{props.marca}</Tag>
            <Tag color="geekblue">{props.cidade}</Tag>
          </Space>
        </Space>
        <Space direction="vertical">
          <Text type="secondary">Detalhes</Text>
          <Space size={1}>
            <Tag color="cyan">{props.cor}</Tag>
            <Tag color="cyan">{props.km} KM</Tag>
            <Tag color="cyan">Ano: {props.ano}</Tag>
            <Tag color="cyan">Placa: {props.placa}</Tag>
            <Tag color="cyan">
              Publicado: {moment(props.data).format("DD-MM-YYYY")}
            </Tag>
          </Space>
        </Space>
        <Divider />
        <Space>
          <Text>Valor:</Text>
          <Text strong>R${props.preco}</Text>
        </Space>
      </Space>
    </Modal>
  );
};

export default VisualizationCar;
