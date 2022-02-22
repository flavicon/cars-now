import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { db } from "../services/firebase";

const DiscountContext = createContext({});

export function DiscountProvider({ children }) {
  const [discounts, setDiscounts] = useState([]);
  const [visibleModalDiscount, setVisibleModalDiscount] = useState(false);
  const [confirmModalLoading, setConfirmModalLoading] = useState(false);

  const showModalDiscount = () => setVisibleModalDiscount(true);
  const closeModalDiscount = () => setVisibleModalDiscount(false);

  // Search discounts on Cloud Firestore and add on State discounts
  const searchDiscounts = async () => {
    const instaceDiscountCollection = collection(db, "ofertas");
    const discountsSnapshot = await getDocs(instaceDiscountCollection);
    const discountsList = discountsSnapshot.docs.map((doc) => {
      const discountItem = doc.data();
      const discountsData = {
        ...discountItem,
        key: doc.id,
      };
      return discountsData;
    });
    setDiscounts(discountsList);
  };

  useEffect(() => {
    searchDiscounts();
  }, []);

  // Create new discount and register on firebase
  const createDiscunt = async (discount) => {
    try {
      setConfirmModalLoading(true);

      await addDoc(collection(db, "ofertas"), discount).then(() => {
        setConfirmModalLoading(false);
        setVisibleModalDiscount(false);
      });

      message.success("Oferta cadastrada com sucesso!");
      searchDiscounts();
    } catch {
      message.error("Problemas ao gravar dados, tente novamente.");
    }
  };

  // Delete discount on firebase
  const deleteDiscount = async (discountId) => {
    try {
      await deleteDoc(doc(db, "ofertas", discountId));
      message.success("Oferta excluida com sucesso.");
      searchDiscounts();
    } catch {
      message.error("Problemas ao excluir dados, tente novamente.");
    }
  };

  //
  const updateDiscount = async (discountId) => {
    const discount = discounts.filter((item) => item.key === discountId);

    console.log(discount);
  };

  return (
    <DiscountContext.Provider
      value={{
        discounts,
        createDiscunt,
        visibleModalDiscount,
        showModalDiscount,
        closeModalDiscount,
        confirmModalLoading,
        deleteDiscount,
        updateDiscount,
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
