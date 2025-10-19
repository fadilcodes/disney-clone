import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className= 
    'flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-1' >
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
