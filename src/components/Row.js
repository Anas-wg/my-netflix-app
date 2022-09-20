import axios  from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal';


//props 사용으로 정보 가져오기
export default function Row ({isLargeLow, title, id, fetchUrl}) {
  const[movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState([])

  useEffect(() => {
    fetchMovieData();
  },[])
//비동기니까 async
  const fetchMovieData = async() => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results)
    console.log(request,'request')
  }

  const handleClick = (movie) =>{
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow' onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}>
            {"<"}
          </span>
        </div>
      </div>
      <div id={id} className='row__posters'>
        {movies.map(movie => (
          <img key={movie.id}
               className={`row__poster ${isLargeLow && "row__posterLarge"}`}
               src={`https://image.tmdb.org/t/p/original/${
                isLargeLow ? movie.poster_path: movie.backdrop_path}`}
                loading="lazy"
                alt={movie.name}
                onClick={() => handleClick(movie)}
                />
        ))}
      </div>
      <div className='slider__arrow-right'
      onClick={() => {
        document.getElementById(id).scrollLeft += window.innerWidth - 80;
      }}>
        <span className='arrow'>{">"}</span>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  )
}
 