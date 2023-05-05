import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import ALLMeetup from './pag/ALLMeetup';
import NabBar from './component/NabBar';
import useSearch from './component/searchCustom'
import { useState ,createContext} from 'react';
import FavoriteList from './component/FavoriteList';
export const Contexts=createContext();
const App=() =>{
  
  const [FilmName,setFilmName]=useState('Avatar')
  const {movieList}=useSearch(`http://www.omdbapi.com/?s=${FilmName}&apikey=c8be7522`)
  const [NumberOfFavorite,setNoOfFavorite]=useState([ ])
  console.log(NumberOfFavorite)
  return (
    <Contexts.Provider value={{setFilmName,FilmName,movieList,NumberOfFavorite,setNoOfFavorite}}>
   <Router>
    <div className="App">
      <div className='heder'>
     <NabBar/>
      </div>
     <div>
    <Switch>
    <Route exact path='/'>
    {movieList.Search && <ALLMeetup/>}
     </Route>
    
     <Route path='/favorite'>
      <FavoriteList />
     </Route>
    </Switch>
    </div>
    </div>
    </Router>
    </Contexts.Provider>
  );
}

export default App;
