document.getElementById('movieForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const image = document.getElementById('image').value;

    if (title && genre && year) {
        const movieCard = document.createElement('div');
        movieCard.className = 'col-sm-12 col-md-6 col-lg-4 card';
        movieCard.innerHTML = `
      ${image ? `<img src="${image}" alt="${title}" class="movie-image">` : ''}
      <h3>${title}</h3>
      <p><strong>Genre:</strong> ${genre}</p>
      <p><strong>Year:</strong> ${year}</p>
      <button class="secondary" onclick="removeMovie(this)">Remove</button>
    `;

        document.getElementById('watchlist').appendChild(movieCard);
        Swal.fire({
            icon: 'success',
            title: 'Movie Added!',
            text: 'Your movie has been added to the watchlist.',
        });

        // Clear the form
        document.getElementById('movieForm').reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all required fields.',
        });
    }
});

function removeMovie(button) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This movie will be removed from your watchlist.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
        if (result.isConfirmed) {
            const card = button.parentElement;
            card.remove();
            Swal.fire('Deleted!', 'The movie has been removed.', 'success');
        }
    });
}