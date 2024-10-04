const background = document.getElementById('modal-background');
const modalContainer = document.getElementById('modal-container');

let currenMovie = {};

function backgroundClickHandler() {
  overlay.classList.remove('open');
}

function closeModal() {
  overlay.classList.remove('open');
}

function addCurrentMovieToList() {
  if (isMovieAlreadyOnList(currenMovie.imdbID)) {
    notie.alert({ type: 'error', text: 'Filme já está na sua lista!' });
    return;
  }
  addToList(currenMovie);
  updateUI(currenMovie);
  updateLocalStorage();
  closeModal();
}

function createModal(movieObject) {
  currenMovie = movieObject;

  modalContainer.innerHTML = `
    <h2 id="movie-title">${movieObject.Title} - ${movieObject.Year}</h2>
  <section id="modal-body">
    <img
      id="movie-poster"
      src=${movieObject.Poster}
      alt="Poster do Filme."
    />
    <div id="movie-info">
      <h3 id="movie-plot">
        ${movieObject.Plot}
      </h3>
      <div id="movie-cast">
        <h4>Elenco:</h4>
        <h5>${movieObject.Actors}</h5>
      </div>
      <div id="movie-genre">
        <h4>Gênero</h4>
        <h5>${movieObject.Genre}</h5>
      </div>
      <div id="movie-director">
        <h4>Diretor</h4>
      <h5>${movieObject.Director}</h5>
    </div>
    </div>
  </section>
  <section id="modal-footer">
    <button id="add-to-list"onclick='{addCurrentMovieToList(${JSON.stringify(
      movieObject,
    ).replace("'", '`')})}'>Adicionar à lista</button>
  </section>`;
}

background.addEventListener('click', backgroundClickHandler);
