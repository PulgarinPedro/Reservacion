import React from 'react';
import { Modal, Button } from 'antd';

interface ModalDetalleProps {
  visible: boolean;
  onClose: () => void;
  imagenSrc: string;
  descripcion: string;
  titulo: string;  // Agregamos la propiedad 'titulo'
}

const ModalDetalleComponent: React.FC<ModalDetalleProps> = ({ visible, onClose, imagenSrc, descripcion, titulo }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      closable={false} // Oculta el botón de cierre predeterminado
    >
      <div>
        <h2>{titulo}</h2> {/* Mostrar el título en el modal */}
        <img src={imagenSrc} alt={titulo} style={{ width: '70%', borderRadius: '10px' }} />
        <p>{descripcion}</p>
        <Button type="primary" style={{ position: 'absolute', top: 8, right: 70 }} onClick={onClose}>
          X
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDetalleComponent;
