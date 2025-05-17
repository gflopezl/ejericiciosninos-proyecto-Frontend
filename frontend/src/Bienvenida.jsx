import React from "react";
import { useNavigate } from "react-router-dom";

function Bienvenida() {
  const navigate = useNavigate();

  const containerStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fefefe",
    padding: "2rem",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    color: "#1a237e",
  };

  const cardContainer = {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardStyle = {
    borderRadius: "1rem",
    padding: "1.5rem",
    color: "#fff",
    width: "180px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  };

  const cards = [
    {
      title: "Ver ejercicios",
      color: "#ff9800",
      emoji: "🤸‍♂️",
      action: () => navigate("/posturamontana"),
    },
    {
      title: "Mis recompensas",
      color: "#4caf50",
      emoji: "🌟",
      action: () => alert("Aquí irán tus recompensas"),
    },
    {
      title: "Mi progreso",
      color: "#7e57c2",
      emoji: "📈",
      action: () => alert("Aquí irás viendo tu progreso"),
    },
    {
      title: "Ver consejo", // ✅ Nueva tarjeta
      color: "#03a9f4",
      emoji: "💡",
      action: () => navigate("/consejo"),
    },
  ];

  const handleCerrarSesion = () => {
    alert("Sesión cerrada");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hola, a continuación selecciona lo que quieras ver</h1>
      <div style={cardContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ ...cardStyle, backgroundColor: card.color }}
            onClick={card.action}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{card.emoji}</div>
            {card.title}
          </div>
        ))}
      </div>

      {/* ✅ Botón cerrar sesión */}
      <button
        onClick={handleCerrarSesion}
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#e53935",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Bienvenida;
