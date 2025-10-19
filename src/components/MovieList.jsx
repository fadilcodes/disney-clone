import React from 'react'
import GlobalApi from '../Services/GlobalAPI'
import { useEffect, useState, useRef } from 'react'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

const screenWidth=window.innerWidth;

function MovieList({genreId,index_}) {
    const [movieList, setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const sliderRight=(element)=>{
        element.scrollBy({
            left: (screenWidth-110)/2,
            behavior: 'smooth'
        })
    }
    const sliderLeft=(element)=>{
        element.scrollBy({
            left: -(screenWidth-110)/2,
            behavior: 'smooth'
        })
    }

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

  return (
<>
     <div className='relative'> 
        <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className={`
            hidden md:block text-white text-[30px] absolute  cursor-pointer z-10 ${index_%3==0? 'mt-[80px]':'mt-[150px]'} `}/>
        <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className={`
            hidden md:block text-white text-[30px] absolute  cursor-pointer right-0 z-10 ${index_%3==0? 'mt-[80px]':'mt-[150px]'} `}/>
        </div>

    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth p-5 px-3'>
      {movieList.map((item,index)=>(
        <>
         {index_%3==0?<HrMovieCard movie={item}/> : <MovieCard movie={item} />}
         </>
      ))}
    </div>
    </>
    )
}

export default MovieList
