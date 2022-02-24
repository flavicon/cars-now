import { Space, Modal, Form, Input, InputNumber, DatePicker } from "antd";
import moment from "moment";
import { useDiscounts } from "../../hooks/useDiscount";

const ModalDiscount = (props) => {
  const { createDiscunt, confirmModalLoading, formDiscount } = useDiscounts();

  const handleOk = () => {
    formDiscount.validateFields().then((values) => {
      const formFieldsFormated = {
        ...values,
        ano: moment(values.ano).format("YYYY"),
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
        <Space size="middle">
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
            <Input size="large" />
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
            <Input size="large" />
          </Form.Item>
        </Space>

        <Space size="middle">
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
            <Input size="large" />
          </Form.Item>
          <Form.Item name="km" label="Quilometragem">
            <InputNumber size="large" addonAfter="KM" min={0} />
          </Form.Item>
        </Space>
        <Space size="middle">
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
            <Input size="large" />
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
            <Input size="large" />
          </Form.Item>
        </Space>
        <Space size="middle">
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
            <InputNumber size="large" addonBefore="R$" />
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
            <DatePicker size="large" picker="year" />
          </Form.Item>
        </Space>
        <Form.Item
          name="foto"
          label="Foto"
          tooltip="Insira um link formato url."
          rules={[
            {
              type: "url",
              required: true,
              message: "Por favor insira um link url válido.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="fotoAdicional"
          label="Foto adicional"
          tooltip="Insira um link formato url."
          rules={[
            {
              type: "url",
              required: true,
              message: "Por favor insira um link url válido.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalDiscount;
