import {Link,Outlet} from 'react-router-dom';
import moviepic from '../src/Images/moviepic.jpg'


function App() {
  return (
    <div className='border'>
      <h1 className='head'>LIST OF BEST MOVIES</h1>
      
      <nav className='navbar'>  
        <img className='pic' src={moviepic} height={140} />
        
          <Link className='movies' to='/movies'>Movies</Link> {' '}
          <Link className='newmovies' to='/movies/new'>New Movies</Link> {' '}
          
        </nav>
      <p className='info'>The Secret to film is that it's an illusion</p>
      <p className='info'>- George Lucus</p>
        <Outlet />
    </div>
  );
}

export default App;
