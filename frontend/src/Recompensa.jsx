import { useLocation, useNavigate } from "react-router-dom";

export default function Recompensa() {
  const location = useLocation();
  const navigate = useNavigate();

  // Se espera que se pase por estado: { finalizado: true, estrellas: 3 }
  const { finalizado, estrellas } = location.state || { finalizado: false, estrellas: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="w-full max-w-screen-md aspect-[1.618] bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center items-center">
        {finalizado ? (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-4">¡Ejercicio Completado!</h1>
            <p className="text-xl mb-6">Has ganado:</p>
            <div className="flex space-x-4">
              {[...Array(estrellas)].map((_, i) => (
                <span key={i} className="text-4xl">⭐</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-orange-500 mb-4">¡Sigue intentando!</h1>
            <p className="text-lg">El ejercicio aún está en proceso de finalizar.</p>
          </>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
