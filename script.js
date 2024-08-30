document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('result-img').src = 'caricatura-bailando.png';
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('result-img').src = 'caricatura-llorando.png';
    document.getElementById('result').classList.remove('hidden');
});

const noBtn = document.getElementById('no-btn');

// Añade la clase de animación cuando el mouse está sobre el botón
noBtn.addEventListener('mouseover', function() {
    noBtn.classList.add('moving');
});

// Quita la clase de animación cuando el mouse sale del botón
noBtn.addEventListener('mouseout', function() {
    noBtn.classList.remove('moving');
});
