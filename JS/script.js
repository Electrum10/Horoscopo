// Verificar si son las 3 de la tarde y enviar un prompt a un servicio de chat
function verificarHoraYEnviarPrompt() {
    let fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
  
    // Verificar si son las 3 de la tarde
    if (horas === 15 && minutos === 0) {
      // Aquí iría el código para enviar el prompt al servicio de chat
      // Por ejemplo, usando fetch para hacer una solicitud POST a una API
      fetch('URL_DEL_SERVICIO_DE_CHAT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: 'Tu mensaje para el chat' })
      })
      .then(response => response.json())
      .then(data => {
        // Reemplazar el contenido de un párrafo HTML con la respuesta
        document.getElementById('parrafo-respuesta').innerText = data.respuesta;
      })
      .catch(error => console.error('Error:', error));
    }
  }
  
  // Ejecutar la función cada minuto para verificar la hora
  setInterval(verificarHoraYEnviarPrompt, 60000);
  