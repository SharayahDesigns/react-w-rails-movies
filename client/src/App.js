import { Link, Outlet } from 'react-router-dom';







function App() {
  return (
    <div className='border'>
      <h1>BEST MOVIES</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
        <Link to='/home'>Home</Link> - {' '}
          <Link to='/movies'>Movies</Link> - {' '}
          <Link to='/movies/new'>New Movies</Link> - {' '}
        
          <Link to='/about'>About</Link>
        </nav>
      <p>The Secret to film is that it's an illusion</p>
      <p>- George Lucus</p>
        <Outlet />
    </div>
  );
}

export default App;
