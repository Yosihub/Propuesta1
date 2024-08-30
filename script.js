document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('result-img').src = 'caricatura-bailando.png';
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('result-img').src = 'caricatura-llorando.png';
    document.getElementById('result').classList.remove('hidden');
});
