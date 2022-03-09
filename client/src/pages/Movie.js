import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {DataContext} from '../providers/DataProvider'

const Movie = (props) => {
  const{deleteMovie} = useContext(DataContext)
  const navigate =useNavigate()
  const {id, title, director, stars,genre, text} = props
  
  return (
    <div className='border'>
      <h2>#{id} Movie</h2>
      <h1 className='info'>{title}</h1>
      <h2 className='info'>{director}</h2>
      <p className='info'>{stars}</p>
      <p className='info'>{genre}</p>
      <p className='description'>{text}</p>
      <div className='border' style={{display: 'flex',justifyContent: 'center'}}>
        
        <button onClick={() => navigate(`/movies/${id}/edit`, {state: props})} style={{margin: '10px'}}>edit</button>
      
        <button style={{margin: '10px'}} onClick={()=> deleteMovie(id)} >delete</button>
        
        <button onClick={() => navigate(`/movies/${id}`, {state: {id, title, director, stars, genre, text }})} style={{margin: '10px'}}>show</button>
        
      
      </div>
      
      
      
      
      
    </div>
  )
}

export default Movie
