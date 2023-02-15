import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'animate.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import LargeButton from './components/LargeButton';
import MovieDisplay from './components/MovieDisplay';
import MoviesList from './components/MoviesList';

function App() {
  const [movie, setMovie] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [listOfMovies, setListOfMovies] = useState(null);
  const [ready, setReady] = useState<boolean>(false);

  const movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20';
  const configurationUrl = 'https://api.themoviedb.org/3/configuration?api_key=6f26fd536dd6192ec8a57e94141f8b20';
  const listOfMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20';

  const getMainMovie = () => axios.get(movieUrl)

  const getConfiguration = () => axios.get(configurationUrl)

  const getListOfMovies = () => axios.get(listOfMoviesUrl)

  const handleImageUrl = (url: string, size: string, path: string) => {
    return `${url}/${size}/${path}`
  }

  const getData = async () => {

    try {
      const mainMovieInfo = await getMainMovie()
      const imageInfo = await getConfiguration()
      const allMovies = await getListOfMovies()

      let movies = allMovies.data.results.slice(1, 5);

      const { base_url, logo_sizes } = imageInfo.data.images;
      let popularMovie = mainMovieInfo.data.results[0]

      popularMovie = { ...popularMovie, image: handleImageUrl(base_url, logo_sizes[6], popularMovie.backdrop_path) }
      movies = movies.map((movie) => ({ ...movie, image: handleImageUrl(base_url, logo_sizes[6], movie.backdrop_path) }))

      setMovie(popularMovie.image)

      setMovieName(popularMovie.original_title)

      setListOfMovies(movies)


      setReady(true)
    } catch (error) {
      console.log('ha ocurrido un error:', error)
    }
  }

  const [option, setOption] = useState<'populares' | 'mis peliculas'>('populares')
  useEffect(() => {
    getData()
  }, [])

  return !ready ? <div>loading</div> : (
    <div className="App" style={{ backgroundImage: `url(${movie})` }}>
      <Header />
      <div className='app-container d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <div className="movie-info-container">
          <MovieDisplay title={movieName} />
          <div className='buttons-container d-flex animate__animated animate__fadeInUp animate__slow'>
            <LargeButton text='reproducir' color='c-large-button--black' iconName='play_arrow' className='c-large-button--spacing animate__animated animate__slideInUp' />
            <LargeButton text='mi lista' color='c-large-button--translucent' iconName='add' className='animate__animated animate__slideInUp' />
          </div>
        </div>
        <div className='movies-list-container animate__animated animate__fadeInUp'>
          <div>
            <Dropdown option={option} setOption={setOption} />
          </div>
          <MoviesList option={option} setOption={setOption} moviesInfo={listOfMovies} />
        </div>
      </div>
    </div>
  );
}

export default App;
