var currentImageIndex = 0;
var images = document.getElementById('img-resurse').getElementsByTagName('img');

function showResourceSlides() {
    setInterval(changeImage, 3000);
}

function changeImage() {
    images[currentImageIndex].classList.remove('enlarged'); // Reducerea dimensiunilor imaginii
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
    images[currentImageIndex].classList.add('enlarged'); // Mărirea dimensiunilor imaginii
}

// Adaugă un eveniment de click pentru a mări/ reduce manual imaginea
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        if (this.classList.contains('enlarged')) {
            this.classList.remove('enlarged');
        } else {
            this.classList.add('enlarged');
        }
    });
}	