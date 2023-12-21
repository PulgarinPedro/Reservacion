// HabitacionCard.tsx
import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import ModalAddReservation, { ModalAddReservationProps } from './ModalAddReservation';

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

  const handleAddReservationSuccess = () => {
    console.log('Reserva agregada con éxito');
  };

  const modalAddReservationProps: ModalAddReservationProps = {
    visible: modalVisible,
    onCancel: handleReservaFormCancel,
    onAddSuccess: handleAddReservationSuccess,
    habitacionid: habitacion.habitacionid,
  };

  return (
    <Card
      hoverable
      style={{
        width: '87%',
        margin: '16px 0',
        marginLeft: '1%',
        fontFamily: 'Pacifico, sans-serif', // Establece el tipo de letra aquí
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <img
            alt={habitacion.nombreHabitacion}
            src={habitacion.imagenUrl}
            style={{ height: '300px', width: '400px', objectFit: 'cover', marginLeft: '110px' }}
          />
        </div>
        <div style={{ textAlign: 'left', marginLeft: '189px', width: '50%', fontFamily: 'Lato, sans-serif' }}>
          <h3 style={{ fontSize: '40px', marginBottom: '8px' }}>{habitacion.nombreHabitacion}</h3>
          <p style={{ fontSize: '16px' }}><strong>Descripción:</strong> {habitacion.descripcion}</p>
          <p style={{ fontSize: '16px' }}><strong>Capacidad:</strong> {habitacion.capacidad} personas</p>
          <p style={{ fontSize: '16px' }}><strong>Disponibilidad:</strong> {habitacion.disponible ? 'Disponible' : 'No disponible'}</p>
          <Button type="primary" style={{ background: 'rgb(35, 46, 58)', border: '1px solid black' }} onClick={handleReservarClick}>
            Reservar
          </Button>
        </div>
      </div>
      <ModalAddReservation {...modalAddReservationProps} />
    </Card>
  );
};

export default HabitacionCard;
