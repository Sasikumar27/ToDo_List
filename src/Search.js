import React from 'react'

const Search = ({search, setSearch}) =>{
    return (
        <div className="search">
            <form className='searchform' onSubmit={(e)=> e.preventDefault()} >
                <label className='label'>
                    Search
                </label>
                <input className='searchbox' 
                    id='inp'
                    type='text'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </form>
        </div>
    )

}
export default Search;