import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { db } from "../services/firebase";

const DiscountContext = createContext({});

export function DiscountProvider({ children }) {
  const [discounts, setDiscounts] = useState([]);
  const [visibleModalDiscount, setVisibleModalDiscount] = useState(false);

  const showModalDiscount = () => setVisibleModalDiscount(true);
  const closeModalDiscount = () => setVisibleModalDiscount(false);

  const createDiscunt = async (discount) => {
    const newDoc = await addDoc(collection(db, "ofertas"), {
      marca: discount.marca,
      modelo: discount.modelo,
      ano: discount.ano,
      preco: discount.preco,
      cor: discount.cor,
      quilometragem: discount.quilometragem,
      placa: discount.placa,
      cidade: discount.cidade,
      fotos: discount.fotos,
      data: new Date(),
    });

    console.log("Id", newDoc);
  };

  // Search discounts on Cloud Firestore and add on State discounts
  useEffect(() => {
    async function searchDiscounts() {
      const instaceDiscountCollection = collection(db, "ofertas");
      const discountsSnapshot = await getDocs(instaceDiscountCollection);
      const discountsList = discountsSnapshot.docs.map((doc) => {
        const dataOffers = {
          key: doc.id,
          marca: doc.data().marca,
        };
        return dataOffers;
      });
      setDiscounts(discountsList);
    }

    searchDiscounts();
  }, []);

  return (
    <DiscountContext.Provider
      value={{
        discounts,
        createDiscunt,
        visibleModalDiscount,
        showModalDiscount,
        closeModalDiscount,
      }}
    >
      {children}
    </DiscountContext.Provider>
  );
}

export function useDiscounts() {
  const context = useContext(DiscountContext);
  return context;
}
