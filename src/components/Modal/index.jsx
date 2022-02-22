import { Modal, Button } from "antd";
import { useState, StrictMode } from "react";
import { useDiscounts } from "../../hooks/useDiscount";

const ModalDiscount = () => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Adicione uma nova oferta");
  const { visibleModalDiscount, closeModalDiscount, showModalDiscount } =
    useDiscounts();

  const handleOk = () => {
    setModalText("Oferta sendo gerada...");
    setConfirmLoading(true);
    setTimeout(() => {
      closeModalDiscount();
      setConfirmLoading(false);
    }, 3000);
  };

  const handleCancel = () => closeModalDiscount();

  return (
    <Modal
      title="Adicionar nova oferta"
      visible={visibleModalDiscount}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
};

export default ModalDiscount;
