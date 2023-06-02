import React from 'react'

function Header(props) {
    return (
        <header className='header'>
       <h1>{props.title}</h1>
       </header>
    )
}

Header.defaultProps={
    title: "To do List"
}
export default Header;