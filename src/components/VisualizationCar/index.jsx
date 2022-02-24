import { Tag, Typography, Modal, Carousel, Divider, Image } from "antd";

const { Text, Title } = Typography;

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
            style={{ height: "350px", width: "450px" }}
          />
        </div>
        <div width={100}>
          <Image
            src={props.fotoAdicional}
            alt="fotoAdicional"
            style={{ height: "350px", width: "450px" }}
          />
        </div>
      </Carousel>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text strong>
          {props.modelo}, {props.ano}
        </Text>
        <Tag>Marca: {props.marca}</Tag>
        <Text type="success">R$ {props.preco}</Text>
      </div>
    </Modal>
  );
};

export default VisualizationCar;
