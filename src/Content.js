import React from 'react';
import Itemlist from './Itemlist';

const Content = ({item, handlechange, handledelete }) => {
  
  return(
   <main className='main'>
      { (item.length) ? (
        <Itemlist
          item = {item}
          handlechange={handlechange}
          handledelete={handledelete}
         />
        ) :  
      (
        <p>Your list is Empty..</p>
      )}
   </main>
  )

}

export default Content;