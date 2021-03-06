import { message, Form } from "antd";
import moment from "moment";
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
  const [dataSourceDiscounts, setDataSourceDiscounts] = useState([]);
  const [discountInEdition, setDiscountInEdition] = useState("");
  const [filterSearch, setFilterSearch] = useState(false);
  const [visibleModalDiscount, setVisibleModalDiscount] = useState(false);
  const [confirmModalLoading, setConfirmModalLoading] = useState(false);

  // Hook antd to management form
  const [formDiscount] = Form.useForm();

  const showModalDiscount = () => setVisibleModalDiscount(true);
  const closeModalDiscount = () => {
    setVisibleModalDiscount(false);
    setDiscountInEdition("");
  };

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
    setDataSourceDiscounts(discountsList);
  };

  useEffect(() => {
    searchDiscounts();
  }, []);

  const isDiscountAlreadyExists = discountInEdition !== "";

  // Create new discount and register on firebase
  const createDiscunt = async (discount) => {
    if (isDiscountAlreadyExists) {
      updateDiscount(discount);
      return true;
    }

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

  // Update discount on firebase
  const updateDiscount = async (discount) => {
    setConfirmModalLoading(true);
    await setDoc(doc(db, "ofertas", discountInEdition), discount).then(() => {
      setConfirmModalLoading(false);
      setVisibleModalDiscount(false);
      setDiscountInEdition("");
    });
    message.success("atualizado com sucesso.");
    searchDiscounts();
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

  const editDiscount = (discountId) => {
    showModalDiscount();
    setDiscountInEdition(discountId);

    const discount = discounts.filter((item) => item.key === discountId);
    const objectDiscount = { ...discount[0] };

    formDiscount.setFieldsValue({
      ...objectDiscount,
      ano: moment(objectDiscount.ano),
      data: moment(objectDiscount.data),
    });
  };

  // Filter discouts in state case empty search discounts in firebase
  const filterDiscount = (filter) => {
    if (filter === "") searchDiscounts();

    const filtered = dataSourceDiscounts.filter(
      (item) =>
        item.marca.toLowerCase().includes(filter.toLowerCase()) ||
        item.modelo.toLowerCase().includes(filter.toLowerCase()) ||
        item.placa.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length > 0) {
      setDataSourceDiscounts(filtered);
      setFilterSearch(true);
    }
  };

  const handleBlurFilterInput = () => {
    setFilterSearch(false);
  };

  // Case user filter item on table and go to another page
  if (!filterSearch && dataSourceDiscounts.length < discounts.length)
    setDataSourceDiscounts(discounts);

  return (
    <DiscountContext.Provider
      value={{
        discounts,
        setDiscounts,
        dataSourceDiscounts,
        createDiscunt,
        visibleModalDiscount,
        showModalDiscount,
        closeModalDiscount,
        confirmModalLoading,
        deleteDiscount,
        editDiscount,
        filterDiscount,
        formDiscount,
        filterSearch,
        handleBlurFilterInput,
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
