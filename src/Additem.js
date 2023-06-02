import React from 'react'
import {FaPlus} from 'react-icons/fa'

const Additem = ({newItem, setNewitem ,handlesubmit}) => {
  return (
    <form className='form' onSubmit={handlesubmit}>
        <label htmlFor="addItem">
            Add your task
        </label>
        <input 
            id='inp' type="text" 
            placeholder='type'
            autoFocus
            value={newItem}
            onChange={(e)=> setNewitem(e.target.value)}
        />
        <button className='but'
        type='submit'>
            <FaPlus />
        </button>

    </form>
  )
}

export default Additem