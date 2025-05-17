import React, { useState } from 'react';

function FormularioEjercicio() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [edadRecomendada, setEdadRecomendada] = useState('');

  const guardarEjercicio = async (ejercicio) => {
    try {
      const response = await fetch('http://localhost:3000/api/ejercicios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ejercicio),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al guardar el ejercicio');
      }

      alert('Ejercicio guardado con éxito!');
      setNombre('');
      setDescripcion('');
      setEdadRecomendada('');
    } catch (error) {
      alert('Error al guardar ejercicio: ' + error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarEjercicio({ nombre, descripcion, edadRecomendada });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edad recomendada"
        value={edadRecomendada}
        onChange={e => setEdadRecomendada(e.target.value)}
      />
      <button type="submit">Guardar ejercicio</button>
    </form>
  );
}

export default FormularioEjercicio;
