import { useState } from "react";
import VisualizationCar from "../components/VisualizationCar";

const useVisualizationCar = () => {
  const [visibleVisualizationCar, setVisibleVisualizationCar] = useState(false);
  const [discountItem, setDiscountItem] = useState({});

  const showVisualizationCar = (item) => {
    setDiscountItem(item);
    setVisibleVisualizationCar(true);
  };

  const cancelVisualizationCar = () => {
    setVisibleVisualizationCar(false);
    setDiscountItem({});
  };

  return [
    <VisualizationCar
      visible={visibleVisualizationCar}
      onCancel={cancelVisualizationCar}
      marca={discountItem.marca}
      foto={discountItem.foto}
      fotoAdicional={discountItem.fotoAdicional}
      preco={discountItem.preco}
      ano={discountItem.ano}
      modelo={discountItem.modelo}
      cor={discountItem.cor}
      cidade={discountItem.cidade}
      km={discountItem.km}
      placa={discountItem.placa}
      data={discountItem.data}
    />,
    showVisualizationCar,
  ];
};

export default useVisualizationCar;
