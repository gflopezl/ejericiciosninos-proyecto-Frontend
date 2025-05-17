import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false); // 👁 Contraseña
  const [mostrarConfirmPassword, setMostrarConfirmPassword] = useState(false); // 👁 Confirmación

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        }),
      });

      if (response.ok) {
        alert('✅ Registro exitoso');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        alert('❌ Error al registrar: ' + data.message);
      }
    } catch (error) {
      alert('❌ Error de conexión con el servidor: ' + error.message);
    }
  };

  return (
    <div className="contenedor" style={styles.container}>
      <h1 style={styles.title}>Regístrate</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="firstName" style={styles.label}>Nombre del menor</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="lastName" style={styles.label}>Apellido del menor</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Contraseña</label>
          <div style={styles.passwordWrapper}>
            <input
              type={mostrarPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button
              type="button"
              onClick={() => setMostrarPassword(!mostrarPassword)}
              style={styles.eyeButton}
              aria-label="Mostrar/Ocultar contraseña"
            >
              {mostrarPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirmar contraseña</label>
          <div style={styles.passwordWrapper}>
            <input
              type={mostrarConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button
              type="button"
              onClick={() => setMostrarConfirmPassword(!mostrarConfirmPassword)}
              style={styles.eyeButton}
              aria-label="Mostrar/Ocultar confirmación"
            >
              {mostrarConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <button type="submit" style={styles.button}>Registrarse</button>
      </form>

      <div style={styles.loginOption}>
        <p>¿Ya tienes cuenta? <Link to="/login" style={styles.loginLink}>Inicia sesión</Link></p>
      </div>
    </div>
  );
}

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
    padding: '20px',
  },
  title: {
    fontSize: '30px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  loginOption: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#777',
  },
  loginLink: {
    color: '#4CAF50',
    textDecoration: 'none',
  }
};

export default Register;
