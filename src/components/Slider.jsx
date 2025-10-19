import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


function Slider() {
    const [movieList, setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalAPI.getTrendingVideo.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
  return (
    <div className='md:px-16 p-5 px-3'>
    <div> 
         <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-0 mt-[150px] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-17 mt-[150px] cursor-pointer right-0' 
        onClick={()=>sliderRight(elementRef.current)}/>
        </div>

    <div className='flex overflow-x-auto w-full py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path}
            className='min-w-full md:h-[300px] object-cover object-left-top mr-8 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out ' />
        ))}
    </div>
    </div>
  )
}

export default Slider
