import { Modal, Form, Input, InputNumber, DatePicker } from "antd";
import moment from "moment";
import { useDiscounts } from "../../hooks/useDiscount";

const ModalDiscount = (props) => {
  //const [form] = Form.useForm();
  const { createDiscunt, confirmModalLoading, formDiscount } = useDiscounts();

  const onFillForm = () => {
    formDiscount.setFieldsValue({
      marca: "Fiat",
    });
  };

  const handleOk = () => {
    formDiscount.validateFields().then((values) => {
      const formFieldsFormated = {
        ...values,
        ano: moment(values.ano).format("YYYY-MM-DD"),
        km: values.km ? values.km : 0,
        data: moment(new Date()).format("YYYY-MM-DD"),
      };

      createDiscunt(formFieldsFormated);
    });
  };

  return (
    <Modal
      title="Adicionar nova oferta"
      visible={props.visible}
      onOk={handleOk}
      confirmLoading={confirmModalLoading}
      onCancel={props.onCancel}
      destroyOnClose
    >
      <Form form={formDiscount} layout="vertical" preserve={false}>
        <Form.Item
          name="marca"
          label="Marca"
          rules={[
            {
              required: true,
              message: "Por favor insira a marca do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="modelo"
          label="Modelo"
          rules={[
            {
              required: true,
              message: "Por favor insira o modelo do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ano"
          label="Ano"
          rules={[
            {
              required: true,
              message: "Por favor insira o ano do veículo.",
            },
          ]}
        >
          <DatePicker picker="year" />
        </Form.Item>
        <Form.Item
          name="preco"
          label="Preço"
          rules={[
            {
              required: true,
              message: "Por favor insira o preço do veículo.",
            },
          ]}
        >
          <InputNumber addonBefore="R$" />
        </Form.Item>
        <Form.Item
          name="cor"
          label="Cor"
          rules={[
            {
              required: true,
              message: "Por favor insira a cor do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="km" label="Quilometragem">
          <InputNumber addonAfter="KM" min={0} />
        </Form.Item>
        <Form.Item
          name="placa"
          label="Placa"
          rules={[
            {
              required: true,
              message: "Por favor insira a placa do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cidade"
          label="Cidade"
          rules={[
            {
              required: true,
              message: "Por favor insira a cidade.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="foto"
          label="Foto"
          rules={[
            {
              required: true,
              message: "Por favor insira a foto do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fotoAdicional"
          label="Foto adicional"
          rules={[
            {
              required: true,
              message: "Por favor insira a foto adicional do veículo.",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalDiscount;
