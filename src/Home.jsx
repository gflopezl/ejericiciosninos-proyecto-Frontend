import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const goldenRatio = 1.618;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: 0,
      margin: 0,
    },
    title: {
      fontSize: `${30}px`,
      marginBottom: `${30 / goldenRatio}px`,
      fontWeight: 'bold',
      color: '#333',
    },
    button: {
      padding: '10px 20px',
      fontSize: `${16}px`,
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: `${20 / goldenRatio}px`,
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    footer: {
      fontSize: `${12}px`,
      color: '#777',
      position: 'absolute',
      bottom: '10px',
      width: '100%',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a Ejercicios Niños</h1>

      <Link to="/login">
        <button
          style={styles.button}
          onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={e => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Iniciar sesión
        </button>
      </Link>

      <div style={styles.footer}>
        <p>&copy; 2025 Ejercicios Niños - Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Home;
