// Importa React y otros módulos necesarios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import imagen from '../imagenes/fondo.jpeg';
import logo from '../imagenes/logo.png';
import '../components/info.css';
import imgCapilla from '../imagenes/parrafo.png';
import ModalDetalleComponent from '../components/infodetalle'; 

import imgDetalle1 from '../imagenes/parrafo.png';  // Ruta de la imagen de detalle 1
import imgDetalle2 from '../imagenes/parrafo.png';  // Ruta de la imagen de detalle 2
import imgDetalle3 from '../imagenes/parrafo.png'; 
import tuImagen from '../imagenes/parrafo.png';
 
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
                marginTop: '-70px',
                fontFamily: 'Pacifico, sans-serif',
              }}
            >
              Título de la sección adicional
            </h2>
            <div>
              <p
                style={{
                  marginTop: '20px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#555', // Color gris oscuro
                }}
              >
                Hi, I'm Serelin! A self-taught front end developer and business consultant based in Stockholm with a dynamic background. I like visual stuff and love to keep an eye for design when I code. I have more than 7 years of experience in the e-commerce industry within different fields, including design, marketing, project management, and business development. I have been working with multiple startups in the past few years. Those experiences provide me good knowledge which helps me to make more user-friendly applications. Currently, my front end skills include React, Redux, HTML, CSS, SCSS, JavaScript, jQuery, Express, and Bootstrap. More in the learning!
              </p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={imgCapilla} alt="Ejemplo" style={{ width: '60%', borderRadius: '10px'}}/>
          </div>
        </div>
      </div>

      {/* Nueva sección de detalles */}
      <div className="seccion-detalles" style={{ marginTop: '50px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <h2
          style={{
            fontFamily: 'Pacifico, sans-serif',
            marginBottom: '20px',
          }}
        >
          Detalles
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          {/* Primera imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(imgDetalle1, 'Descripción del detalle 1', 'Título del detalle 1')}>
            <img src={imgDetalle1} alt="Detalle 1" style={{ width: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p>Descripción del detalle 1</p>
          </div>

          {/* Segunda imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(imgDetalle2, 'Descripción del detalle 2', 'Título del detalle 2')}>
            <img src={imgDetalle2} alt="Detalle 2" style={{ width: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p>Descripción del detalle 2</p>
          </div>

          {/* Tercera imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(imgDetalle3, 'Descripción del detalle 3', 'Título del detalle 3')}>
            <img src={imgDetalle3} alt="Detalle 3" style={{ width: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p>Descripción del detalle 3</p>
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
    Una Frase Inspiradora
  </h2>
  <p
    style={{
      fontFamily: 'Lato, sans-serif',
      color: '#555', // Color gris oscuro
    }}
  >
    "La belleza de la naturaleza se encuentra en cada rincón de Capillapamba. Descubre la armonía entre el hombre y el entorno que nos rodea."
  </p>
  <img src={tuImagen} alt="Imagen Inspiradora" style={{ width: '50%', borderRadius: '10px', marginTop: '20px' }} />
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
