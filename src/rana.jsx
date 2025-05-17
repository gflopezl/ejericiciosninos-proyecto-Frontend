import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rana() {
  const [reps, setReps] = useState(0);
  const [reward, setReward] = useState(false);
  const navigate = useNavigate();

  const handleReps = () => {
    if (reps < 10) {
      setReps(reps + 1);
      if (reps + 1 === 10) {
        setReward(true);
      }
    }
  };

  const handleVolver = () => {
    navigate("/bienvenida");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Abdominales tipo rana (Frog Crunches)</h1>
      <img
        src="/assets/rana.jpeg"
        alt="Abdominales tipo rana"
        style={styles.image}
      />
      <div style={styles.textContainer}>
        <p>
          Acostado boca arriba, planta de los pies juntas y rodillas abiertas hacia los lados.
        </p>
        <p>
          Manos en el pecho o detrás de la cabeza (sin jalar).
        </p>
        <p>
          Elevar levemente el tronco y bajar despacio.
        </p>
        <p>
          ✅ <strong>Fortalece el abdomen sin forzar la espalda.</strong>
        </p>
      </div>

      <div style={styles.controls}>
        <button onClick={handleReps} style={styles.button}>
          Repetición {reps}/10
        </button>
        <button onClick={handleVolver} style={styles.volver}>
          Volver a Bienvenida
        </button>
      </div>

      {reward && <div style={styles.reward}>🌟 ¡Ganaste una estrella!</div>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
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
    marginBottom: "1rem",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
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
  volver: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  reward: {
    marginTop: "1.5rem",
    fontSize: "24px",
    color: "#ff9800",
    fontWeight: "bold",
  },
};

export default Rana;
