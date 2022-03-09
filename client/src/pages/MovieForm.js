import React, {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {DataContext} from '../providers/DataProvider'



const MovieForm = (props) => {
  const {addMovie} = useContext(DataContext)
  const {state} = useLocation()
  const [title,setTitle] = useState(state && state.title)
  const [director,setDirector] = useState(state && state.director)
  const [stars,setStars] = useState(state && state.stars)
  const [source, setSource] = useState(state && state.source)
  
  
  
  console.log(state)
  console.log(useLocation)
  
  
  useEffect(() => {
  // runs when component mounts
    console.log('Movie Form mounted')
    
     return () => {
        console.log('MovieForm unMounted')
   }
  
    
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(state && state.id) {
    
    } else {
      addMovie({title, director, stars, source})
    }
    
  
  }
  return (
    <div className='border'>
      <h1>Movie form</h1>
      
      <form onSubmit={handleSubmit}>
        <p>Movie Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Director</p>
        <input value={director} onChange={(e) => setDirector(e.target.value)} />
        <p>stars</p>
        <input value={stars} onChange={(e) => setStars(e.target.value)} />
        <p>source</p>
        <input value={source} onChange={(e)=> setSource(e.target.value)}/>
        
        <button>{state && state.id ? 'Edit': 'New'}</button>
        
      </form>
      <p>{JSON.stringify(state && state.title)}</p>
      
    </div>
  )
}

export default MovieForm
