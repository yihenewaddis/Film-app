
import { useState,useEffect } from 'react'

const useSearch = (url) => {
    const [movieList,setMovieList]=useState([])
    useEffect(()=>{
//searching start
      fetch(url)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setMovieList(data)
      })
//search ending part
    },[url])
  return {movieList}
}

export default useSearch
