async function guardarEjercicio(ejercicio) {
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

    const data = await response.json();
    console.log('Ejercicio guardado:', data);
    // Aquí puedes actualizar estado o mostrar mensaje éxito
  } catch (error) {
    console.error('Error al guardar ejercicio:', error.message);
    // Aquí muestra error al usuario si quieres
  }
}
