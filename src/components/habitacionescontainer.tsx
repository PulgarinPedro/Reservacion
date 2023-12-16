/* HabitacionesContainer.tsx

import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import HabitacionCard from './habitacioncard';
import './habitaciones.css'; // Importa tu archivo de estilos

interface Habitacion {
  habitacionid: number;
  nombreHabitacion: string;
  descripcion: string;
  capacidad: number;
  disponible: boolean;
  imagenUrl: string;
}

const HabitacionesContainer: React.FC = () => {
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Habitacion | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Simulación de carga de datos desde una API
    const fetchData = async () => {
      // Puedes reemplazar esto con tu lógica para obtener datos de la API
      const data = await fetch('http://localhost:3000/habitaciones').then(response => response.json());
      setHabitaciones(data);
    };

    fetchData();
  }, []);

  const handleDetallesClick = (habitacion: Habitacion) => {
    setSelectedRoom(habitacion);
    setModalVisible(true);
  };

  const handleReservarClick = (habitacion: Habitacion) => {
    setSelectedRoom(habitacion);
    // Lógica para manejar la reserva
    // ...
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="habitaciones-container">
      {habitaciones.map(habitacion => (
        <HabitacionCard
          key={habitacion.habitacionid}
          habitacion={habitacion}
       //   onReservarClick={handleReservarClick}
        />
      ))}
      <Modal
        title={selectedRoom ? `Detalles de ${selectedRoom.nombreHabitacion}` : ''}
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {selectedRoom && (
          <div>
            <p><strong>Descripción:</strong> {selectedRoom.descripcion}</p>
            <p><strong>Capacidad:</strong> {selectedRoom.capacidad} personas</p>
            <p><strong>Disponibilidad:</strong> {selectedRoom.disponible ? 'Disponible' : 'No disponible'}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HabitacionesContainer;
*/