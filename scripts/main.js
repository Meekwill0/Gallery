const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const images = document.querySelectorAll('.grid-item');
let currentIndex = 0;

function openModal(index) {
    modal.style.display = 'block';
    modalImage.src = images[index].src;
    currentIndex = index;
}

function closeModal() {
    modal.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}

images.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
