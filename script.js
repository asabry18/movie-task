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

movies.forEach(movie => {
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
});


// // Array of movies data
// const movies = [
//     { title: "Game of Thrones", image: "https://via.placeholder.com/150x225?text=GOT", releaseDate: "18 April" },
//     { title: "Bliss", image: "https://via.placeholder.com/150x225?text=Bliss", releaseDate: "20 April" },
//     { title: "After the Rain", image: "https://via.placeholder.com/150x225?text=After+the+Rain", releaseDate: "20 April" },
//     { title: "Howl's Moving Castle", image: "https://via.placeholder.com/150x225?text=Howl%27s+Moving+Castle", releaseDate: "23 April" },
//     { title: "Tom & Jerry", image: "https://via.placeholder.com/150x225?text=Tom+%26+Jerry", releaseDate: "24 April" },
//     { title: "Attack on Titan", image: "https://via.placeholder.com/150x225?text=Attack+on+Titan", releaseDate: "24 April" },
//     { title: "News of the World", image: "https://via.placeholder.com/150x225?text=News+of+the+World", releaseDate: "23 April" },
//     { title: "Oğlan evi 2", image: "https://via.placeholder.com/150x225?text=O%C4%9Flan+evi+2", releaseDate: "25 April" },
// ];

// // Reference to the section where the movies will be displayed
// const comingSoonSection = document.getElementById('comingSoonSection');

// // Loop through the movies array using a for loop
// for (let i = 0; i < movies.length; i++) {
//     const movie = movies[i];
    
//     const movieItem = document.createElement('div');
//     movieItem.classList.add('col-6', 'col-md-4', 'col-lg-3', 'movie-item');

//     movieItem.innerHTML = `
//         <div class="card bg-dark text-white">
//             <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
//             <div class="card-body text-center">
//                 <h5 class="card-title movie-title">${movie.title}</h5>
//                 <p class="card-text">${movie.releaseDate}</p>
//             </div>
//         </div>
//     `;

//     comingSoonSection.appendChild(movieItem);
// }
