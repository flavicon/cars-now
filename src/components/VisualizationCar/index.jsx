import { Modal } from "antd";
import useVisualizationCar from "../../hooks/useVisualizationCar";

const VisualizationCar = (props) => {
  const [cancelVisualizationCar] = useVisualizationCar();
  console.log(props);
  console.log(cancelVisualizationCar);

  return (
    <Modal
      visible={props.visible}
      onCancel={() => cancelVisualizationCar()}
      title="Oferta especial"
      centered
      width={1000}
    >
      <p>Teste</p>
    </Modal>
  );
};

export default VisualizationCar;
