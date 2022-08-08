let audio = new Audio('assets/music.mp3');
const btn = document.getElementById('main_btn');
const main = document.getElementById('main');
const img = document.getElementById('img');
img.style.display = 'none';

btn.addEventListener('click', (e) => {
    audio.play();
    main.style.display = 'none';
    img.style.display = 'block';
});