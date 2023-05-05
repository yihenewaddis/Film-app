import React, { useEffect, useState } from 'react'
import { Contexts } from '../App'
import { useContext } from 'react'

const List = () => {
const {setNoOfFavorite}=useContext(Contexts)
const [FavoriteList,setFavoriteList]=useState([])

 useEffect(()=>{
  const filmFavorite=JSON.parse(localStorage.getItem('your-favorite'))
  setFavoriteList(filmFavorite)
  
 },[])

const saveToLocalStorage=(FavoriteList)=>{
  
  localStorage.setItem('your-favorite',JSON.stringify(FavoriteList))
}

const AddFavorite=(item)=>{
 const isItemExist= FavoriteList.filter((Favor)=>{
  return (item.Title==Favor.Title)?{Favor}:null
 } 
 )
 if(isItemExist[0]){
  alert('alredy exist')
 }
 else{
  alert('Confirm To add Favorite')
  const favoritelist=[...FavoriteList,item]
  setFavoriteList(favoritelist)
  saveToLocalStorage(favoritelist)
  setNoOfFavorite(favoritelist)
 }
 
}

  const {movieList}=useContext(Contexts)
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
     {
        movieList.Search.map((film)=>(
          <div key={film.imdbID}  className='container'>
            <img className='eachImg' src={film.Poster} />
            <div className='discription'>
            <h2>{film.Title}</h2>
            <h3>{film.Year}</h3>
            <button className='btn' onClick={()=>{AddFavorite(film)}}>Add Favorite</button>
            </div>
            </div>
            
        ))
       
      } 
      </div>
  )
}

export default List
