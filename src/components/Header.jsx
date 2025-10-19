import React, {useState} from 'react'
import Disney from './../assets/images/Disney.svg'
import Profile from './../assets/images/Profile-user.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlay,
    HiTv} from 'react-icons/hi2';
import { HiDotsVertical, HiPlus} from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
const [toggle, setToggle]=useState(false); 
const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCHLIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlay
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
  return (
    <div className='flex items-center justify-between md:px-16 p-5 px-3 mt-8'>
             <div className='flex gap-8 items-center'>
                <img src={Disney} alt="logo Disney" className=
                 'w-[80px] md:w-[115px] object-cover'/>

                 <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
                </div>

                <div className='flex md:hidden gap-5'>
                {menu.map((item,index)=>index<3&&(
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
                </div>

                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle? <div className='absolute mt-3 bg-[#121212]
                    border-[1px] border-gray-700 p-3 px-5 py-4'>
                        {menu.map((item,index)=>index>2&&(
                        <HeaderItem name={item.name} Icon={item.icon}/>
                        ))}
                    </div>:null }
                </div>

             </div>
        <img src={Profile} alt="profile-user" className='w-[80px] rounded-full'/>
    </div>
  )
}

export default Header
 