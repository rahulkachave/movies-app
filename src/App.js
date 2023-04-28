
import './App.css';
import Movhead from './components/Movhead';
import Movie from './components/Movie';
import movies from './movie.json'//movies name declare the ourself
function App() {
  return (
    <div className="App">
      < Movhead/>    {/* its for header js file */}
      <div className='main'>
        {
          movies.map((Element,index)=> { //its for a movies js file
            return(
            <Movie
             key ={index}//Each child in a list should have a unique "key" prop.
            Title={Element.Title} //import the movie json file
            year={Element.Year}
            img={Element.Poster}
            />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
