import React from 'react';
import Itemlist from './Itemlist';

const Content = ({item, handlechange, handledelete }) => {
  
  return (
   <>
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
   </>
  )

}

export default Content;