import React, { useState,useEffect } from 'react'
import { Contexts } from '../App'
import { useContext } from 'react'
const FavoriteList = () => {
  const {setNoOfFavorite}=useContext(Contexts)
  const [filmFavorite,setFavoriteList]=useState([])
  useEffect(()=>{
    const filmFavorite=JSON.parse(localStorage.getItem('your-favorite'))
    setFavoriteList(filmFavorite)
    setNoOfFavorite(filmFavorite)
   },[])
   const saveToLocalStorage=(FavoriteList)=>{
    localStorage.setItem('your-favorite',JSON.stringify(FavoriteList))
  }
  const removeFavorite=(film)=>{
    const filmFavorite=JSON.parse(localStorage.getItem('your-favorite'))
    setFavoriteList(filmFavorite)
    const newList=filmFavorite.filter((films)=>{
      return (films.imdbID!==film.imdbID)
    })
    alert('are you shoure do you went to remove from favorite')
    setFavoriteList(newList)
    saveToLocalStorage(newList)
    setNoOfFavorite(newList)
  }
  return (
    <>
    <h1 style={{color:'red'}}>Your Favorite List</h1>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',overflow:'visible'}}>
    {
       filmFavorite.map((film)=>(
         <div key={film.imdbID}  className='container'>
           <img className='eachImg' src={film.Poster} />
           <div className='discription'>
           <h2>{film.Title}</h2>
           <h3>{film.Year}</h3>
           <button className='btn' onClick={()=>{removeFavorite(film)}}>Rmove-From-Fvorite</button>
           </div>
           </div>
           
       ))
      
     } 
     </div>
     </>
  )
}

export default FavoriteList
