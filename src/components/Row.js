import axios  from '../api/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"


//props 사용으로 정보 가져오기
export default function Row ({isLargeLow, title, id, fetchUrl}) {
  const[movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  },[])
//비동기니까 async
  const fetchMovieData = async() => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results)
    console.log(request,'request')
  }
  return (
    <section>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>
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
                alt={movie.name}
                />
        ))}
      </div>
      <div className='slider__arrow-right'>
        <span className='arrow'>{">"}</span>
      </div>
    </section>
  )
}
 