import { useState } from "react";
import VisualizationCar from "../components/VisualizationCar";
import { doc, updateDoc } from "firebase/firestore/lite";
import { db } from "../services/firebase";
import { useDiscounts } from "../hooks/useDiscount";

const useVisualizationCar = () => {
  const [visibleVisualizationCar, setVisibleVisualizationCar] = useState(false);
  const [discountItem, setDiscountItem] = useState({});
  const { discounts, setDiscounts } = useDiscounts();

  const showVisualizationCar = (item) => {
    setDiscountItem(item);
    setVisibleVisualizationCar(true);

    updateViewsDiscount(item);
  };

  const cancelVisualizationCar = () => {
    setVisibleVisualizationCar(false);
    setDiscountItem({});
  };

  const updateViewsDiscount = async (item) => {
    const updateDiscount = [...discounts];
    const discountExists = updateDiscount.find(
      (discount) => discount.key === item.key
    );

    try {
      if (discountExists) {
        // update state discounts
        discountExists.visualizacoes += 1;
        setDiscounts(updateDiscount);

        // update on firebase
        const discountRef = doc(db, "ofertas", item.key);
        await updateDoc(discountRef, {
          visualizacoes: discountExists.visualizacoes,
        });
      }
    } catch {}
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
