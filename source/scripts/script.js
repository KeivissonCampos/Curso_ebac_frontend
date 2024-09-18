const images = document.querySelectorAll('.image');

// Adiciona evento de clique para colorir a imagem
images.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('clicked');
    });
});
