import React, {useEffect} from 'react'

const MovieForm = (props) => {
  useEffect(() => {
  // runs when component mounts
    console.log('Movie Form mounted')
    
     return () => {
        console.log('MovieForm unMounted')
   }
  
    
  },[])
  
  return (
    <div className='border'>
      <h1>Movie form</h1>
    </div>
  )
}

export default MovieForm
