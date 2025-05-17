import React from 'react';

function Consejo() {
  const goldenRatio = 1.618;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e8f5e9', // Verde muy claro
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      padding: `${40 / goldenRatio}px`,
    },
    card: {
      backgroundColor: '#ffffff',
      padding: `${30}px`,
      borderRadius: `${15 / goldenRatio}px`,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      width: '90%',
    },
    title: {
      fontSize: `${28}px`,
      marginBottom: `${20 / goldenRatio}px`,
      color: '#2e7d32', // Verde oscuro
      fontWeight: 'bold',
    },
    text: {
      fontSize: `${16 * goldenRatio}px`,
      lineHeight: 1.6,
      color: '#333',
    },
    button: {
      marginTop: '20px',
      fontSize: '14px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#1877F2',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    back: {
      marginTop: '15px',
      fontSize: `${14}px`,
      textDecoration: 'none',
      color: '#4CAF50',
      border: '1px solid #4CAF50',
      borderRadius: '6px',
      padding: '8px 16px',
      transition: '0.3s',
    },
    backHover: {
      backgroundColor: '#4CAF50',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Consejo del Día</h2>
        <p style={styles.text}>
          Realizar actividad física en casa puede ser muy divertido. Una rutina simple con saltos, estiramientos y juegos de equilibrio ayuda a los niños a mantenerse activos, mejora su coordinación y fortalece sus músculos, ¡todo mientras se divierten!
        </p>
        <a
          href="https://www.facebook.com/photo/?fbid=1086197346676209&set=pb.100058578611774.-2207520000"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Nutricionista
        </a>
        <a
          href="/"
          style={styles.back}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.backHover.backgroundColor;
            e.target.style.color = styles.backHover.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '';
            e.target.style.color = '#4CAF50';
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export default Consejo;

