// HabitacionCard.tsx

import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import ReservaFormulario from '../page/reservaciones';

interface Habitacion {
  habitacionid: number;
  nombreHabitacion: string;
  descripcion: string;
  capacidad: number;
  disponible: boolean;
  imagenUrl: string;
}

interface HabitacionCardProps {
  habitacion: Habitacion;
  onReservarClick: (habitacion: Habitacion) => void;
}

const HabitacionCard: React.FC<HabitacionCardProps> = ({ habitacion, onReservarClick }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleReservarClick = () => {
    onReservarClick(habitacion);
    setModalVisible(true);
  };

  const handleReservaFormFinish = (values: any) => {
    console.log('Formulario enviado con éxito', values);
    setModalVisible(false);
  };

  const handleReservaFormCancel = () => {
    setModalVisible(false);
  };

  return (
    <Card
      hoverable
      style={{
        width: '96%', // Ajusta este valor para cambiar la anchura de la tarjeta
        margin: '16px 0', // Añade un poco de margen arriba y abajo
        marginLeft: '1%', // Ajusta el margen izquierdo
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          alt={habitacion.nombreHabitacion}
          src={habitacion.imagenUrl}
          style={{ height: '200px', width: '200px', objectFit: 'cover', marginRight: '16px' }}
        />
        <div style={{ textAlign: 'left', padding: '16px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{habitacion.nombreHabitacion}</h3>
          <p><strong>Descripción:</strong> {habitacion.descripcion}</p>
          <p><strong>Capacidad:</strong> {habitacion.capacidad} personas</p>
          <p><strong>Disponibilidad:</strong> {habitacion.disponible ? 'Disponible' : 'No disponible'}</p>
          <Button type="primary" style={{ background: 'black', border: '1px solid black' }} onClick={handleReservarClick}>
            Reservar
          </Button>
        </div>
      </div>
      <Modal
        title={`Reservar ${habitacion.nombreHabitacion}`}
        visible={modalVisible}
        onCancel={handleReservaFormCancel}
        footer={null}
      >
        <ReservaFormulario onFinish={handleReservaFormFinish} onCancel={handleReservaFormCancel} />
      </Modal>
    </Card>
  );
};

export default HabitacionCard;
