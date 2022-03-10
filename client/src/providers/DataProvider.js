import React,{useEffect,useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const navigate = useNavigate()
  const [movies,setMovies] = useState([]);
  
  useEffect(() => {
  // runs when component mounts
    console.log('data provider mounted')
    getMovies()
  },[])
  
  const getMovies = async () => {
    try {          // (api/movies is our rails project)
      let res = await axios.get('/api/movies')
      console.log(res)
      setMovies(res.data)
    } catch(err) {
    alert('err getting movies')
    }
  }
  //create
  // 1.get data from form to method
  const addMovie = async (movie) => {
    console.log(movie)
  // 2. Add to DB
    try {
      let res = await axios.post('/api/movies',movie)
      console.log(res)
      //3. add to state
      setMovies([res.data, ...movies])
      //4. UX step Navigate
      navigate('/movies')
    } catch(err) {
      console.log(err)
      console.log(err.res)
    }
  }
  //update
  // 1. get data from form to method
  const updateMovie = async (movie) => {
    // 2. add to DB
    try {
      let res = await axios.put(`/api/movies/${movie.id}`,movie)
      //3. update to State
      const updatedMovies = movies.map(m => m.id === res.data.id ? res.data : m)
      setMovies(updatedMovies)
      //4. UX step
      navigate('/movies')
    console.log(res)
    } catch(err) {
      console.log('err on update')
      console.log (err.res)
    }
  
  
  }
  
  
  
  //1. NEED TO REMOVE FROM DB
  //2. NEED TO REMOVE FROM FE
  //3. NEED TO Hookup button click
  
  const deleteMovie = async (id) => {
    try {
      //Step 1
      let res = await axios.delete(`/api/movies/${id}`)
      //Step 2
      let filteredMovies = movies.filter(m => m.id !== res.data.id)
      setMovies(filteredMovies)
      
    } catch(err) {
    alert('err deleting movies')
    }
  }
  
  
  

  // create an object that will be 'global state'
  const dataProviderThing = {
   getMovies,
    deleteMovie,   
    addMovie,
    updateMovie,
    movies,
   
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
