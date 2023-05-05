import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
import { Contexts } from '../App'
import { useContext } from 'react'
const NabBar = () => { 
 const {NumberOfFavorite}=useContext(Contexts)
  return (
    <header className='heder'>
      <div>
        <h2 style={{color:"red",cursor:'pointer'}}>YOO</h2>
      </div>
      <nav>
        <ul>
          <li>
               <Search />
          </li>
            <li>
                <Link to='/'>Film-List</Link>
            </li>
            
            <li>
                <Link to='/favorite'>
                    Favorite <span className='favoriteNo'><sup>{NumberOfFavorite.length}</sup></span>
                </Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default NabBar
