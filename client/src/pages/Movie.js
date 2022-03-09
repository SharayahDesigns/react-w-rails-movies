import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {DataContext} from '../providers/DataProvider'

const Movie = (props) => {
  const{deleteMovie} = useContext(DataContext)
  const navigate =useNavigate()
  const {id, title, director, stars, source}= props
  
  return (
    <div className='border'>
      <h2>#{id}</h2>
      <h1>Movie: {title}</h1>
      <h2>{director}</h2>
      <p>{stars}</p>
      <a href={source}>{source}</a>
      <div className='border' style={{display: 'flex',justifyContent: 'center'}}>
        <button onClick={()=>navigate(`/movies/${id}/edit`)} style={{margin: '10px'}}>edit</button>
      
        <button style={{margin: '10px'}} onClick={()=> deleteMovie(id)} >delete</button>
        
        <button onClick={() => navigate(`/movies/${id}`, {state: {id, title, director, stars, source}})} style={{margin: '10px'}}>show</button>
        
      
      </div>
      
      
      
      
      
    </div>
  )
}

export default Movie
