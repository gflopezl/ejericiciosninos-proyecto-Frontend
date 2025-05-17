import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false); // 👁

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', email, password);
    navigate('/bienvenida');
  };

  return (
    <div className="contenedor" style={styles.container}>
      <h1 style={styles.title}>Iniciar sesión</h1>
      <form onSubmit={handleLogin} style={styles.form}>
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
              type={mostrarPassword ? 'text' : 'password'} // 👁
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

        <button type="submit" style={styles.button}>Iniciar sesión</button>
      </form>

      <div style={styles.registerOption}>
        <p>No tienes cuenta? <Link to="/registro" style={styles.registerLink}>Regístrate</Link></p>
      </div>
    </div>
  );
}

// ✅ Estilos actualizados
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
  registerOption: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#777',
  },
  registerLink: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
};

export default Login;
