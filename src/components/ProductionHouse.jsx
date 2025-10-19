import React from 'react'
import disney from './../assets/images/disney.png'
import pixar from './../assets/images/pixar.png'
import marvel from './../assets/images/marvel.png'
import starwars from './../assets/images/starwar.png'
import nationalg from './../assets/images/nationalG.png'

import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalgV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starwarsV from './../assets/videos/star-wars.mp4'


function ProductionHouse() {

       const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV

        },
        {
            id:2,
            image:marvel,
            video:marvelV

        },
        {
            id:3,
            image:nationalg,
            video:nationalgV

        },
        {
            id:4,
            image:pixar,
            video:pixarV

        },
        {
            id:5,
            image:starwars,
            video:starwarsV
        }

    ] 

  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {ProductionHouseList.map((item)=>(
        <div className='border-[2px] border-grey-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black '>
            <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
            <img src={item.image} className='w-full' />
        </div>
    ))}
    </div>
  )
}

export default ProductionHouse
