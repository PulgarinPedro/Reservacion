import React from 'react';
import { Modal, Button } from 'antd';

interface ModalDetalleProps {
  visible: boolean;
  onClose: () => void;
  imagenSrc: string;
  descripcion: string;
  titulo: string;
}

const ModalDetalleComponent: React.FC<ModalDetalleProps> = ({ visible, onClose, imagenSrc, descripcion, titulo }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      bodyStyle={{ padding: '24px' }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '16px' }}>{titulo}</h2>
        <img
          src={imagenSrc}
          alt={titulo}
          style={{ width: '70%', maxWidth: '400px', height: '300px', borderRadius: '10px', marginBottom: '16px' }}
        />
        <p>{descripcion}</p>
        <Button type="primary" onClick={onClose} style={{ marginTop: '16px', backgroundColor: 'rgb(35, 46, 58)' }}>
          Cerrar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDetalleComponent;
