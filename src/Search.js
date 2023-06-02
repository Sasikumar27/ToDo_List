import React from 'react'

const Search = ({search, setSearch}) =>{
    return (
        <form className='form' onSubmit={(e)=> e.preventDefault()} >
            <label className='lab'>
                Search
            </label>
            <input id='inp'
                type='text'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    )

}
export default Search;