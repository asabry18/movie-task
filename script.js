const movies = [
    { title: "Game of Thrones", image: "moviesimage/got.png", releaseDate: "18 April", age: "18+" },
    { title: "rabbit", image: "moviesimage/rabbit.png", releaseDate: "20 April", age: "12+" },
    { title: "After the Rain", image: "moviesimage/walkingdead.png", releaseDate: "20 April", age: "12+" },
    { title: "Howl's Moving Castle", image: "moviesimage/howls.png", releaseDate: "23 April", age: "12+" },
    { title: "Tom & Jerry", image: "moviesimage/tom&jerry.png", releaseDate: "24 April", age: "6+" },
    { title: "Bliss", image: "moviesimage/got.png", releaseDate: "20 April", age: "18+" },
    { title: "After the Rain", image: "moviesimage/lionking.png", releaseDate: "20 April", age: "18+" },
    { title: "Up From Slavery", image: "moviesimage/slavery.png", releaseDate: "20 April", age: "18+" },
    { title: "Attack on Titan", image: "moviesimage/aot.png", releaseDate: "24 April", age: "16+" },
    { title: "News of the World", image: "moviesimage/news.png", releaseDate: "23 April", age: "16+" },
    { title: "Oğlan evi 2", image: "moviesimage/hendi.png", releaseDate: "25 April", age: "16+" },
];

const comingSoonSection = document.getElementById('comingSoonSection');

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieItem = document.createElement('div');
    movieItem.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'movie-item');

    movieItem.innerHTML = `
        <div class="image-body bg-dark text-white" style=" background-image:linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.75)), url(${movie.image});">
        </div>
        <div class="overlay">
            <p class="movie-title">${movie.title}</p>
            <p class="date">${movie.releaseDate}</p>
            <p class="age">${movie.age}</p>
        </div>
    `;

    comingSoonSection.appendChild(movieItem);
}

const slidersec = document.querySelector('#slideshow');
const slides = Array.from(slidersec.children);
const nextbutton = document.querySelector('.next-btn');

let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

nextbutton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        if(currentIndex===3){
            currentIndex=0
        }
        else{
            currentIndex++;
        }
    } 
    moveToSlide(slidersec, currentIndex);
});

function moveToSlide(slidersec, index) {
    const amountToMove = -index * (slideWidth); 
    slidersec.style.transform = `translateX(${amountToMove}px)`;
}
