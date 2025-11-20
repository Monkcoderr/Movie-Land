import MovieCard from "./MovieCard";

function App(){

  const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLWE3MTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
  return(
    <MovieCard movie1/>
  )
}

export default App