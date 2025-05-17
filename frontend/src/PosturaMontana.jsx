import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PosturaMontana() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTimeLeft(30);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const volver = () => {
    navigate("/bienvenida");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Postura de la montaña (Tadasana)</h1>
      <img
        src="/assets/montana.jpeg"
        alt="Postura de la montaña"
        style={styles.image}
      />
      <div style={styles.textContainer}>
        <h2>Objetivo:</h2>
        <p>Alinear la postura, fortalecer la columna y activar el abdomen.</p>

        <h2>Cómo hacerlo:</h2>
        <ol>
          <li>De pie, con los pies juntos y brazos al costado del cuerpo.</li>
          <li>Estira la espalda como si quisieras crecer.</li>
          <li>Mantén los hombros relajados y el abdomen levemente contraído.</li>
          <li>Mira al frente y respira lentamente durante 30 segundos.</li>
        </ol>

        <p>
          ✅ <strong>Beneficios:</strong> enseña a pararse derecho y fortalece la conciencia corporal.
        </p>
      </div>

      <div style={styles.timerContainer}>
        <h2>Tiempo restante: {timeLeft} segundos</h2>
        <div style={styles.buttonRow}>
          <button
            onClick={volver}
            style={{ ...styles.button, backgroundColor: "#1a237e" }}
          >
            ← Volver
          </button>

          {!isRunning && timeLeft > 0 && (
            <button onClick={startTimer} style={styles.button}>
              Iniciar
            </button>
          )}
          {isRunning && (
            <button onClick={stopTimer} style={styles.button}>
              Parar
            </button>
          )}
          {!isRunning && timeLeft === 0 && (
            <button onClick={resetTimer} style={styles.button}>
              Reiniciar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
    backgroundColor: "#fefefe",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    color: "#1a237e",
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  textContainer: {
    textAlign: "left",
    marginBottom: "2rem",
  },
  timerContainer: {
    marginTop: "1rem",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default PosturaMontana;


