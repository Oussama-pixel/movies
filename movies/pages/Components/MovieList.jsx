import React, { useRef, useState } from 'react'
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import MovieItem from './MovieItem'
import styles from '../../styles/MovieList.module.scss'



export default function MovieList() {
  const moviesListRef = useRef();
  const [i, setI] = useState(0);
  
  const moveList = (n)=>{
    console.log(moviesListRef.current.style,moviesListRef.current )
    console.log(moviesListRef.current.getBoundingClientRect())
    let x = moviesListRef.current.getBoundingClientRect().x;
    let k = moviesListRef.current.querySelectorAll("img").length;

    if((n+x)<=150){
      if(n<0){
       setI(i+1)
      }else{
       setI(i-1)
      }
    }

    if(i<=k){
      moviesListRef.current.style.transform =  "translateX("+(n+x)+"px)" ;
    }
  }
  return (
    <div className={styles.movieListContainer}>
        <div className={styles.movieListTitle }>
            <h1>
                NEW RELEASES
            </h1>
        </div>
        <div className={styles.moviesListWrapper}  >
          <BiLeftArrow className={`${styles.arrow} ${styles.left}`} onClick={()=>moveList(300)}/>
          <div className={styles.movieList} ref={ref=>ref!==null&&(moviesListRef.current = ref)}>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
            <MovieItem/>
          </div>
          <BiRightArrow className={styles.arrow} onClick={()=>moveList(-400)}/>
        </div>
  </div>
  )
}
