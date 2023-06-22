import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer className='footer'>
      <p>{length} {length ===1 ? "item" :"items" } 
      <br/> Copyright &copy; {year.getFullYear()} </p>
      </footer>
  )
}

export default Footer;
