import React from 'react'
import { Contexts } from '../App'
import { useContext } from 'react'
const Search = () => {
  const {setFilmName,FilmName}=useContext(Contexts)
  return (
    <div>
      <form>
         <input placeholder='search...'  value={FilmName == null ? '' : FilmName} onChange={(e)=>{ setFilmName(e.target.value)}}/>
      </form>
      
    </div>
  )
}

export default Search
