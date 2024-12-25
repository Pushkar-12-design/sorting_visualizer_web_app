
function MovieCard({ movie }) {

    function onFavouriteClick() {
        alert(clicked)
    }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={ movie.url } alt={movie.tittle} />
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={ onFavouriteClick }>
                ♥
            </button>
        </div>
        <div className="movie-info">
            <h3>{movie.tittle}</h3>
            <p>{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard