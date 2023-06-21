import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import './App.css';
import Additem from './Additem';
import Search from './Search';

function App() {
  //const API_URL = " http://localhost:3500/items"
  const [item, setItem] = useState([])
  const [newItem, setNewitem] = useState('')
  const [search, setSearch] = useState('')
  useEffect( () => {
    JSON.parse(localStorage.getItem('todolist'))
  },[] )
  
/*   useEffect (()=> {
      const fetchitems = () =>{
        try{
            /* const response = await fetch(API_URL)
            if (!response.ok) throw Error("Data not received")
            const items = await response.json() 
            setItem(items)
            setfetchError(null)
        } catch (err)
        {
          setfetchError(err.message)
        }
        finally{
          setisLoading(false)
        }
      }
      fetchitems()
  },[]) */

  const addItem = (items) =>{
    const id = item.length? item[item.length-1].id + 1 : 1
    const addNewItems = {
      id,
      checked : false,
      items: items
    }
    const final = [...item, addNewItems]
    setItem(final)
    localStorage.setItem("todolist", JSON.stringify(final))
    /* const postOptions = {
      method : 'POST',
      headers : {
          'Content-type' : 'application/json'
      },
      body : JSON.stringify(addNewItems)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setfetchError(result) */
  }

  const handlechange = (id) => {
    const list = item.map((items) =>
    items.id === id ? {...items, checked:!items.checked} : items)
    setItem(list)
    localStorage.setItem("todolist", JSON.stringify(list))
    /* const myItem = list.filter ( item => item.id === id)
    const updateOptions = {
      method : 'PATCH',
      headers : {
          'Content-type' : 'application/json'
      },
      body : JSON.stringify( {checked: myItem[0].checked})
    }
    const reqURl = `${API_URL}/${id}`
    const result = await apiRequest(reqURl,updateOptions)
    if(result) setfetchError(result) */
  }
  const handledelete= (id) => {
    const list = item.filter((item) =>
    item.id !== id )
    setItem(list)
    localStorage.setItem("todolist", JSON.stringify(list))
    /* const deleteOptions = {
      method : 'DELETE'
    }
    const reqURl = `${API_URL}/${id}`
    const result = await apiRequest(reqURl,deleteOptions)
    if(result) setfetchError(result) */
  }
  function handlesubmit(e) {
      e.preventDefault()
      if (!newItem) return; 
      addItem(newItem)
      setNewitem('')
  }
    
  return (
    <div>  
      <Header title="TO DO LIST" />
      <body className='body'>
        <Additem 
          newItem = {newItem}
          setNewitem= {setNewitem}
          handlesubmit= {handlesubmit}
        />    
        <Search 
          search={search}
          setSearch={setSearch}
        />
        <Content 
            item = {item.filter(item => ((item.items).toLowerCase()).includes(search.toLowerCase()))}
            handlechange={handlechange}
            handledelete={handledelete}
          />
      </body> 
      <Footer 
        length = {item.length}p
      />
    </div>
  );
}

export default App;
