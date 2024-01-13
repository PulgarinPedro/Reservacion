import React from 'react';
import { Form, Input, Button, message, Modal, DatePicker, Row, Col } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
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
    const fechaInicio = moment(values.fechaInicio);
    const fechaFin = moment(values.fechaFin);

    if (!fechaInicio.isValid() || !fechaFin.isValid() || fechaFin.isBefore(fechaInicio)) {
      message.error('La fecha de fin debe ser posterior a la fecha de inicio');
      return;
    }

    try {
      values.habitacionid = habitacionid;
      await reservasApi.createReservas(values);
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
      centered
      bodyStyle={{ padding: '16px' }}
      style={{ top: 20 }}
      width={window.innerWidth < 768 ? '100%' : 520}
    >
      <Form form={form} name="form_add_reserva" layout="vertical" onFinish={onFinish}>
        <Form.Item name="nombreCliente" label="Nombre del Cliente" rules={[{ required: true, message: 'Ingrese el nombre del cliente' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="correoCliente" label="Correo del Cliente" rules={[{ required: true, message: 'Ingrese el correo del cliente' }]}>
          <Input type="email" />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="fechaInicio"
              label="Fecha de Inicio"
              rules={[{ required: true, message: 'Seleccione la fecha de inicio' }]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={(current) => current && current < moment().startOf('day')}
                style={{ width: '100%' }}  // Hacer que el selector de fecha ocupe el 100% del ancho
                inputReadOnly // Evitar el teclado en dispositivos móviles
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="fechaFin"
              label="Fecha de Fin"
              rules={[{ required: true, message: 'Seleccione la fecha de fin' }]}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={(current) =>
                  current && (current < moment().startOf('day') || current < form.getFieldValue('fechaInicio'))
                }
                style={{ width: '100%' }}  // Hacer que el selector de fecha ocupe el 100% del ancho
                inputReadOnly // Evitar el teclado en dispositivos móviles
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" style={{ backgroundColor: 'rgb(35, 46, 58)', width: '100%' }}>
          Agregar Reserva
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddReservation;
