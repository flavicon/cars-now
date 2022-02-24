import { useState } from "react";
import VisualizationCar from "../components/VisualizationCar";

const useVisualizationCar = () => {
  const [visibleVisualizationCar, setVisibleVisualizationCar] = useState(false);
  const showVisualizationCar = () => setVisibleVisualizationCar(true);
  const cancelVisualizationCar = () => setVisibleVisualizationCar(false);

  return [
    <VisualizationCar visible={visibleVisualizationCar} />,
    showVisualizationCar,
    cancelVisualizationCar,
  ];
};

export default useVisualizationCar;
