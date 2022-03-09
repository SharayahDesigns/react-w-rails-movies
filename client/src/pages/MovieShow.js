import axios from 'axios'
import React,{useContext, useEffect, useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {DataContext} from '../providers/DataProvider'
import {useNavigate} from 'react-router-dom'



const MovieShow = (props) => {
  const params = useParams()
  const {state} = useLocation()
  const {title, director, stars}= state
  
  
  useEffect(() => {
    getMovieFromProvider()
    // getMovie()
    getMovieFromAPI()
    setMovieFromRouter(state)
  },[])
  
  // three ways to get this fact data
  // through our provider
  const [movieFromDataProvider,setMovieFromDataProvider] = useState(null)
  const [movieFromAPI,setMovieFromAPI] = useState(null)
  const [movieFromRouter,setMovieFromRouter] = useState(null)
  
  const {movies} = useContext(DataContext)
  
  const getMovieFromAPI = async () => {
    try {
      let res = await axios.get(`/api/movies/${params.id}`)
      setMovieFromAPI(res.data)
    } catch(err) {
    alert('err')
    }
  }
  
  
  const getMovieFromProvider =()=> {
    
    let movie = movies.find(m => m.id === parseInt(params.id))
    // console.log(movies)
    // console.log(movie)
    setMovieFromDataProvider(movie)
  }
  
  return (
    <div className='border'>
      
      <h1 style={{textAlign:'center' }}>{title}</h1>
      <h3 style={{textAlign:'center' }}>{director}</h3>
      <h3 style={{textAlign:'center' }}>{stars}</h3>
      
      {/* <p>id: {params.id}</p> 
      <code>{JSON.stringify(movieFromDataProvider)}</code> */}
      {/* <p>movieFromAPI</p>
      <code>{JSON.stringify(movieFromAPI)}</code> */}
      {/* <p>Movie from Router</p>  */}
      {/* <code>{JSON.stringify(movieFromRouter)}</code> */}
    </div>
  )
}

export default MovieShow
