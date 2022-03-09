import React, {useContext, useEffect} from 'react'
import {DataContext} from '../providers/DataProvider'
import Movie from './Movie'



const Movies = (props) => {
  const {movies} = useContext(DataContext)
  
  useEffect(() => {
  // runs when component mounts
    console.log('Movies mounted')
    
  },[])
  
  
  const renderMovies = ()=> {
    return movies.map((m) => {
      //<Movie id={m.id} title={m.title}/>
      return <Movie key={m.id}{...m}/>
    })
  }
  return (
    <div className='border'>
      <h1>Movies</h1>
      <div className='border'>
        <code>{renderMovies()}</code>
        </div>
      <div className='border'>
        <code>{JSON.stringify(movies)}</code>
        </div>
    </div>
  )
}

export default Movies
