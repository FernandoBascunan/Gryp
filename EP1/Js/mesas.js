document.addEventListener('DOMContentLoaded', function(){
    const mesasContainer = document.getElementById('mesasContainer');
    const agregarMesaBtn = document.getElementById('agregarMesaBtn');
    const mesaNameInput = document.getElementById('mesaNameInput');

    let mesaCount = 6; 

    function agregarMesa(nombre){

        const mesaDiv = document.createElement('div');
        mesaDiv.classList.add('mesa');
        const mesaImage = document.createElement('img');
        mesaImage.src = '../Images/Mesa Ocupada.png';
        mesaImage.alt = 'Mesa';
        const mesaNombre = document.createElement('p');
        mesaNombre.textContent = nombre;
        mesaDiv.appendChild(mesaImage);
        mesaDiv.appendChild(mesaNombre);
        mesasContainer.appendChild(mesaDiv);
    }
    for (let i = 1; i <= mesaCount; i++){
        agregarMesa(`Mesa ${i}`);
    }
    agregarMesaBtn.addEventListener('click', function() {
        const mesaName = mesaNameInput.value.trim();
        if (mesaName) {
            agregarMesa(mesaName);
            mesaNameInput.value = '';
        }
    });
});

document.getElementById("personasMas").addEventListener("click", function() {
    let input = document.getElementById("personas");
    input.value = parseInt(input.value) + 1;
});

document.getElementById("personasMenos").addEventListener("click", function() {
    let input = document.getElementById("personas");
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
});
