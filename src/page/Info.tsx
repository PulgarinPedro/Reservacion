// Importa React y otros módulos necesarios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import imagen from '../images/fondo.jpeg';
import logo from '../images/logo.png';
import '../styles/info.css';
import imgCapilla from '../images/parrafo.png';
import ModalDetalleComponent from '../components/infodetalle'; 

import pescadeportiva from '../images/parrafo.png';  // Ruta de la imagen de detalle 1
import gastronomia from '../images/Gastronomia 19-12-23.png';  // Ruta de la imagen de detalle 2
import habitacionesR from '../images/parrafo.png'; 
import tuImagen from '../images/parrafo.png';
 
const InfoComponent: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState({ imagenSrc: '', descripcion: '', titulo: '' });

  const handleEmpezarClick = () => {
    console.log('Empezar clickeado');
    navigate('/habitaciones');
  };

  // Función para manejar el clic en una imagen de detalle
  const handleDetalleClick = (imagenSrc: string, descripcion: string, titulo: string) => {
    setDetalleSeleccionado({ imagenSrc, descripcion, titulo });
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* Sección de inicio */}
      <div className="info-container">
        <div className="background-image" style={{ backgroundImage: `url(${imagen})` }} />
        <div className="overlay">
          <img className="logo" src={logo} alt="Logo" />
          <h1
            id="capillapamba"
            style={{
              fontFamily: 'Pacifico, sans-serif',
              fontSize: '2em',
              fontStyle: 'italic',
              color: '#ffffff',
              zIndex: 2,
            }}
          >
            Capillapamba
          </h1>
          <h3
            id="frase"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '3em',
              fontWeight: 'bold',
              color: '#ffffff',
              zIndex: 2,
            }}
          >
            "La riqueza de lo natural a tu alcance"
          </h3>

          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: '#006400',
              borderColor: '#006400',
              fontFamily: 'Verdana',
              fontSize: '1.1em',
              fontWeight: 'bold',
              zIndex: 2,
              marginTop: '20px', // Añadido un margen superior
            }}
            onClick={handleEmpezarClick}
          >
            Empezar
          </Button>
        </div>
      </div>

      {/* Sección adicional más abajo */}
      <div className="seccion-adicional" style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginLeft: '150px', marginRight: '60px', fontFamily: 'Lato, sans-serif' }}>
            <h2
              style={{
                marginTop: '-50px',
                fontFamily: 'Pacifico, sans-serif',
              }}
            >
              ¿Quién somos Nosotros?
            </h2>
            <div>
              <p
                style={{
                  marginTop: '20px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#555', // Color gris oscuro
                }}
              >
                Hola, Bienvenido a nuestra página de reservas, ¿Quiénes somos nosotros? pues bien aqui te lo contamos. Somos Hostería Capillapamba ubicado a 45 minutos de la ciudad de Cuenca en el sector Migüir es un emprendimiento en crecimiento que se dedica a la producción de trucha, servicio de hospedaje, restaurante y cabalgatas
                Ofrecer a nuestros visitantes una experiencia única y enriquecedora, inmersos en la belleza natural del Parque Nacional Cajas. Nos dedicamos a la producción sostenible de trucha,  brindar un refugio acogedor y confortable, donde los viajeros pueden conectarse con la naturaleza, disfrutar de la tranquilidad y descubrir la riqueza cultural de la región.
                Convertirnos en un destino turístico de renombre internacional, reconocido por su compromiso con la sostenibilidad ambiental, la producción responsable y calidad de trucha, esforzandonos por ser líderes en la industria turística, ofreciendo experiencias auténticas y enriquecedoras que resalten la belleza del Parque Nacional Cajas y fomenten la conciencia ambiental entre nuestros visitantes. Contribuyendo significativamente al desarrollo local, creando oportunidades para la comunidad y preservando el patrimonio natural.
                </p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={imgCapilla} alt="Ejemplo" style={{ width: '60%', borderRadius: '10px'}}/>
          </div>
        </div>
      </div>

      {/* Nueva sección de detalles */}
      <div className="seccion-detalles" style={{ marginTop: '70px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
  <h2
    style={{
      fontFamily: 'Pacifico, sans-serif',
      marginBottom: '20px',
      fontSize: '2em',  // Ajusta el tamaño del título
      color: '#333',    // Color negro
    }}
  >
    Detalles
  </h2>
  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
    {/* Primera imagen de detalles */}
    <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(pescadeportiva, 'Descripción del detalle 1', 'Pesca Deportiva')}>
      <img src={pescadeportiva} alt="Detalle 1" style={{ width: '90%', height: '400px', borderRadius: '10px', cursor: 'pointer' }} />
      <p
        style={{
          fontSize: '1.2em',  // Ajusta el tamaño del texto
          color: '#333',      // Color negro
          marginTop: '10px',  // Ajusta el margen superior
        }}
      >
        Pesca Deportiva
      </p>
    </div>

    {/* Segunda imagen de detalles */}
    <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(gastronomia, 'Descripción del detalle 2', 'Platos Gastronómicos')}>
      <img src={gastronomia} alt="Detalle 2" style={{ width: '90%', height: '400px', borderRadius: '10px', cursor: 'pointer' }} />
      <p
        style={{
          fontSize: '1.2em',  // Ajusta el tamaño del texto
          color: '#333',      // Color negro
          marginTop: '10px',  // Ajusta el margen superior
        }}
      >
        Platos Gastronómicos
      </p>
    </div>

    {/* Tercera imagen de detalles */}
    <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(habitacionesR, 'Descripción del detalle 3', 'Reservación de Habitaciones')}>
      <img src={habitacionesR} alt="Detalle 3" style={{ width: '90%', height: '400px', borderRadius: '10px', cursor: 'pointer' }} />
      <p
        style={{
          fontSize: '1.2em',  // Ajusta el tamaño del texto
          color: '#333',      // Color negro
          marginTop: '10px',  // Ajusta el margen superior
        }}
      >
        Reservación de Habitaciones
      </p>
    </div>
  </div>
</div>

      {/* Sección adicional más abajo */}
<div className="seccion-frase-imagen" style={{ marginTop: '50px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
  <h2
    style={{
      fontFamily: 'Pacifico, sans-serif',
      marginBottom: '20px',
    }}
  >
    Capillapamba
  </h2>
  <p
    style={{
      fontFamily: 'Lato, sans-serif',
      color: '#555', // Color gris oscuro
    }}
  >
    "La belleza de la naturaleza se encuentra en cada rincón de Hosteria Capillapamba. Descubre la armonía entre el hombre y el entorno que nos rodea."
  </p>
  <img src={tuImagen} alt="Imagen Inspiradora" style={{ width: '50%', borderRadius: '10px', marginTop: '20px' }} />
</div>
{/* Pie de página */}
<div style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <p style={{ margin: '0', fontSize: '1.2em' }}>Hostería Capillapamba</p>
        <p style={{ margin: '0', fontSize: '0.9em' }}>Copyright © 2023, Creado por [Pedro Pulgarin y Steven Fernandez]</p>
      </div>
      {/* Agrega el ModalDetalleComponent */}
      <ModalDetalleComponent
        visible={modalVisible}
        onClose={closeModal}
        imagenSrc={detalleSeleccionado.imagenSrc}
        descripcion={detalleSeleccionado.descripcion}
        titulo={detalleSeleccionado.titulo}
      />
    </div>
    
  );
};

export default InfoComponent;
