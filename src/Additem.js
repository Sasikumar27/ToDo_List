import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({newItem, setNewitem ,handlesubmit}) => {
  const inputref = useRef()
  return (
    <form className='form' onSubmit={handlesubmit}>
        <label htmlFor="addItem">
            Add your task
        </label>
        <input 
            ref={inputref}
            id='inp' type="text" 
            placeholder='type'
            autoFocus
            value={newItem}
            onChange={(e)=> setNewitem(e.target.value)}
        />
        <button 
          className='but'
          type='submit'
          onClick={ () => inputref.current.focus()}
        >
            <FaPlus />
        </button>

    </form>
  )
}

export default Additem