document.addEventListener('DOMContentLoaded', function() {
    const mesasContainer = document.getElementById('mesasContainer');
    const agregarMesaBtn = document.getElementById('agregarMesaBtn');
    const mesaNameInput = document.getElementById('mesaNameInput');

    let mesaCount = 6; // Empieza con 6 mesas

    function agregarMesa(nombre) {
        // Crea la nueva mesa
        const mesaDiv = document.createElement('div');
        mesaDiv.classList.add('mesa');
        
        const mesaImage = document.createElement('img');
        mesaImage.src = '../Images/Mesa Ocupada.png'; // Aquí puedes cambiar el estado a disponible o no disponible
        mesaImage.alt = 'Mesa';

        const mesaNombre = document.createElement('p');
        mesaNombre.textContent = nombre;

        // Agrega la imagen y el nombre a la mesa
        mesaDiv.appendChild(mesaImage);
        mesaDiv.appendChild(mesaNombre);

        // Agrega la nueva mesa al contenedor
        mesasContainer.appendChild(mesaDiv);
    }

    // Agregar las mesas iniciales
    for (let i = 1; i <= mesaCount; i++) {
        agregarMesa(`Mesa ${i}`);
    }

    // Evento para agregar más mesas
    agregarMesaBtn.addEventListener('click', function() {
        const mesaName = mesaNameInput.value.trim();
        if (mesaName) {
            agregarMesa(mesaName);
            mesaNameInput.value = ''; // Limpiar input
        }
    });
});
