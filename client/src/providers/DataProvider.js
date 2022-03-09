import React,{useEffect,useState} from "react";
import axios from 'axios'

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
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
