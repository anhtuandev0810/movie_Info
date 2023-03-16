import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import Contents from './components/Contents/Contents';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';
import MovieSearch from './components/MovieSearch/MovieSearch';


function App() {
  const { movieDetail } = useSelector(state => state.infoMovies);
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Intro />
      <Contents/>
      <MovieDetail movie={movieDetail} showModal={movieDetail ? true : false}/>
      {/* <MovieSearch /> */}
    </div>
  );
}

export default App;
