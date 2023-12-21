  // ModalAddReservation.tsx
  import React, { useState } from 'react';
  import { Form, Input, Button, message, Modal, DatePicker } from 'antd';
  import * as reservasApi from '../service/reservasApi';

  export interface ModalAddReservationProps {
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
        values.habitacionid= habitacionid;
        await reservasApi.createReservas(values); // Enviar datos directamente como un objeto JSON
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

          <Button type="primary" htmlType="submit" style={{ backgroundColor: ' rgb(35, 46, 58)' }}>
            Agregar Reserva
          </Button>
        </Form>
      </Modal>
    );
  };

  export default ModalAddReservation;