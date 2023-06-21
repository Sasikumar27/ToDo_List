import React from 'react'

const Search = ({search, setSearch}) =>{
    return (
        <form className='searchform' onSubmit={(e)=> e.preventDefault()} >
            <label className='lab'>
                Search
            </label>
            <input className='searchbox' 
                id='inp'
                type='text'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    )

}
export default Search;