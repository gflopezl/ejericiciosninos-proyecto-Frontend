import React from 'react';
import { Link } from 'react-router-dom';

export default function Consejo() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Consejo del Día 💡</h2>
      <p style={styles.text}>
        Realiza al menos 30 minutos de ejercicio al día y acompáñalo con frutas, verduras y mucha agua. ¡Tu cuerpo te lo agradecerá! 🥦🚶‍♂️💧
      </p>

     <div style={styles.buttonGroup}>
  <a
    href="https://www.facebook.com/photo/?fbid=1086197346676209&set=pb.100058578611774.-2207520000"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.button}
  >
    Nutricionista
  </a>

  <Link to="/bienvenida" style={{ ...styles.button, backgroundColor: '#9e9e9e' }}>
    Volver al inicio
  </Link>
</div>

    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0fff4',
    borderRadius: '10px',
    textAlign: 'center',
    margin: '40px auto',
    maxWidth: '500px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '26px',
    color: '#2e7d32',
    marginBottom: '15px',
  },
  text: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '25px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
  padding: '6px 10px',         // antes: '10px 15px'
  fontSize: '14px',            // antes: '16px'
  textDecoration: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  },

};
