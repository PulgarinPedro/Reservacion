// ReservaFormulario.tsx
import React from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';

const { RangePicker } = DatePicker;

const ReservaFormulario: React.FC<{ onFinish: (values: any) => void; onCancel: () => void }> = ({ onFinish, onCancel }) => {
  const handleFormFinish = async (values: any) => {
    try {
      // Realizar la llamada a la API para guardar la reserva
      const response = await axios.post('http://localhost:3000/reservas', values);

      // Verificar la respuesta de la API
      if (response.status === 201) {
        message.success('Reserva realizada con éxito');
        onFinish(values); // Llamar a onFinish solo si la reserva se realiza correctamente
      } else {
        message.error('Error al realizar la reserva. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      message.error('Error al realizar la reserva. Inténtalo de nuevo.');
    }
  };

  return (
    <Form onFinish={handleFormFinish} layout="vertical">
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
