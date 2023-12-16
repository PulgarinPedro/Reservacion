import React from 'react';
import { Form, Input, Button, message, Modal, DatePicker } from 'antd';
import * as reservasApi from '../service/reservasApi';
import { InboxOutlined } from '@ant-design/icons';


interface ModalAddReservationProps {
  visible: boolean;
  onCancel: () => void;
  onAddSuccess?: () => void;
  habitacionid: number;
}

const ModalAddReservation: React.FC<ModalAddReservationProps> = ({ visible, onCancel, onAddSuccess, habitacionid }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Valores del formulario:', values);

    try {
      const formData = new FormData();

      formData.append('habitacionid', habitacionid.toString());
      formData.append('nombreCliente', values.nombreCliente);
      formData.append('correoCliente', values.correoCliente);
      formData.append('fechaInicio', values.fechaInicio.toISOString());
      formData.append('fechaFin', values.fechaFin.toISOString());

      console.log('FormData:', formData);

      await reservasApi.createReservas(formData);
      message.success('Reserva agregada correctamente');
      form.resetFields();
      onCancel();
      if (onAddSuccess) {
        onAddSuccess();
      }
    } catch (error) {
      console.error('Error al agregar Reserva:', error);
      message.error('Error al agregar Reserva');
    }
  };

  return (
    <Modal
      title="Agregar Reserva"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} name="form_add_reserva" layout="vertical" onFinish={onFinish}>
        <Form.Item name="habitacionid" label="ID de la Habitación" rules={[{ required: true, message: 'Ingrese el ID de la habitación' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="nombreCliente" label="Nombre del Cliente" rules={[{ required: true, message: 'Ingrese el nombre del cliente' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="correoCliente" label="Correo del Cliente" rules={[{ required: true, message: 'Ingrese el correo del cliente' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name="fechaInicio" label="Fecha de Inicio" rules={[{ required: true, message: 'Seleccione la fecha de inicio' }]}>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item name="fechaFin" label="Fecha de Fin" rules={[{ required: true, message: 'Seleccione la fecha de fin' }]}>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar Reserva
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddReservation;
