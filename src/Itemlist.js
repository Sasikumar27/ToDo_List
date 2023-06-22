import React from 'react'
import { MdOutlineDeleteSweep } from 'react-icons/md'

const Itemlist = ({item,handlechange,handledelete}) => {
  return (
    <div className="list">
      <ul>
      {item.map((i) => (
        <div className='task'>
          <li key={i.id}>
          <input className='checkbox' type='checkbox' onChange={() => handlechange(i.id)} checked={i.checked} />
              <label className='label'
              style={ (i.checked) ? {textDecoration: "line-through"} : null}>
                {i.items}</label>     
              <button className='button' onClick={() => handledelete(i.id)} >< MdOutlineDeleteSweep /></button>
          </li>
        </div>
      ))}
    </ul> 
  </div>
  )
}
export default Itemlist;