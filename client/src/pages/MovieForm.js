import React, {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {DataContext} from '../providers/DataProvider'



const MovieForm = (props) => {
  const {addMovie, updateMovie} = useContext(DataContext)
  const {state} = useLocation()
  const [title,setTitle] = useState(state && state.title)
  const [director,setDirector] = useState(state && state.director)
  const [stars,setStars] = useState(state && state.stars)
  const [text, setText] = useState(state && state.text)
  const [genre, setGenre] = useState(state && state.genre)
  
  
  
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
      //update case
      console.log('update')
      updateMovie({director,title,genre,stars,text,id: state.id});
      console.log()
    } else {
      //new case
      console.log('create')
      addMovie({director,title,genre,stars,text});
      console.log({director, title, genre, stars})
    }
    // e.preventDefault();
    // if(stars <= 0 || stars >= 6) {
    //   alert('invalid star')
    //   return
    //   }
    // if(state && state.id) {
    
    // } else {
      
    // }
  };
  return (
    <div className='border'>
      <h1 className='movietitle' >Movie form</h1>
      
      <form className='form' onSubmit={handleSubmit}>
        <p className='movietitle'>Movie Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Director</p>
        <input value={director} onChange={(e) => setDirector(e.target.value)} />
        <p>Stars</p>
        <input value={stars} onChange={(e) => setStars(e.target.value)} />
        <p>Genre</p>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
        <p>About Movie</p>
        <input value={text} onChange={(e)=> setText(e.target.value)}/>
        
        <button>{state && state.id ? 'Edit': 'New'}</button>
        
      </form>
      {/* <p>{JSON.stringify(state && state.title)}</p> */}
      
    </div>
  )
}

export default MovieForm
