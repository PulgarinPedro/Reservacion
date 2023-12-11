// ReservaFormulario.tsx
import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const { RangePicker } = DatePicker;

const ReservaFormulario: React.FC<{ onFinish: (values: any) => void; onCancel: () => void }> = ({ onFinish, onCancel }) => {
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Nombres y Apellidos" name="nombreApellido" rules={[{ required: true, message: 'Este campo es obligatorio' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Correo" name="correo" rules={[{ required: true, type: 'email', message: 'Ingrese un correo válido' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Rango de Fecha" name="rangoFecha" rules={[{ required: true, message: 'Este campo es obligatorio' }]}>
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Aceptar
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={onCancel}>
          Cancelar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReservaFormulario;
