import React from 'react'
import { useEffect, useState } from 'react'
import SearchIcon from './search.svg'
import  './index.css'
import Cards from './MovieCard'
//KEY: 519a6b8b


const API_URL = 'https://www.omdbapi.com?apikey=519a6b8b'


export const App = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);



    const searchMovies = async (title)=>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setMovies(data.Search)
    }

    useEffect(() => {
      searchMovies();

    },[])

  return (
    <div className='app'>

        <h1>Movie Theory</h1>
        <div className='search'>
            <input placeholder='Search for movies' value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
            <img src={SearchIcon} alt='searchIcon' onClick={()=> searchMovies(search)}/>
        </div>

        {movies?.length > 0
             ? (<div className='container'>
             {movies.map((movie)=> (
                <Cards movie={movie}/>
             ))}
         </div>) : (
            <div className='empty'>
                <h2>No movies found</h2>
            </div>

         )
        }

        
    </div>
  );
}


export default App;
