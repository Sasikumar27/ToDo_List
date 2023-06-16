import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import './App.css';
import Additem from './Additem';
import Search from './Search';
import apiRequest from './apiRequest';

function App() {
  const API_URL = " http://localhost:3500/items"
  const [item, setItem] = useState ([])
  const [newItem, setNewitem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setfetchError] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect (()=> {
      const fetchitems = async() =>{
        try{
            const response = await fetch(API_URL)
            if (!response.ok) throw Error("Data not received")
            //console.log(response)
            const items = await response.json()
            //console.log(items)
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
      setTimeout( ()=> {(async () => await fetchitems()) ()}, 1000)
  },[])

  const addItem = async (items) =>{
    const id = item.length? item[item.length-1].id + 1 : 1
    const addNewItems = {
      id,
      checked : false,
      items: items
    }
    const final = [...item, addNewItems]
    setItem(final)

    const postOptions = {
      method : 'POST',
      headers : {
          'Content-type' : 'application/json'
      },
      body : JSON.stringify(addNewItems)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setfetchError(result)
  }

  const handlechange = async(id) => {
    const list = item.map((j) =>
    j.id === id ? {...j, checked:!j.checked} : j)
    setItem(list)

    const myItem = list.filter ( item => item.id === id)
    const updateOptions = {
      method : 'PATCH',
      headers : {
          'Content-type' : 'application/json'
      },
      body : JSON.stringify( {checked: myItem[0].checked})
    }
    const reqURl = `${API_URL}/${id}`
    const result = await apiRequest(reqURl,updateOptions)
    if(result) setfetchError(result)
  }
  const handledelete= async(id) => {
    const list = item.filter((j) =>
    j.id !== id )
    setItem(list)

    const deleteOptions = {
      method : 'DELETE'
    }
    const reqURl = `${API_URL}/${id}`
    const result = await apiRequest(reqURl,deleteOptions)
    if(result) setfetchError(result)
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
      <Additem 
        newItem = {newItem}
        setNewitem= {setNewitem}
        handlesubmit= {handlesubmit}
      />    
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <main className='main'>
        {isLoading && <p>Loading Items..</p>}
        { fetchError && <p> {`Error : ${fetchError}`} </p>}
        {!isLoading && !fetchError && <Content 
          item = {item.filter(item => ((item.items).toLowerCase()).includes(search.toLowerCase()))}
          handlechange={handlechange}
          handledelete={handledelete}
        />}
      </main>
      <Footer 
        length = {item.length}p
      />
    </div>
  );
}

export default App;