import React from 'react'
import { MdOutlineDeleteSweep } from 'react-icons/md'

const Itemlist = ({item,handlechange,handledelete}) => {
  return (
    <ul>
    {item.map((i) => (
         <li key={i.id}>
          <input type='checkbox' onChange={() => handlechange(i.id)} checked={i.checked} />
            <label className='label'
            style={ (i.checked) ? {textDecoration: "line-through"} : null}>
              {i.items}</label>     
            <button className='butt' onClick={() => handledelete(i.id)} ><MdOutlineDeleteSweep /></button>
        </li>
    ))}
  </ul> 
  )
}
export default Itemlist;