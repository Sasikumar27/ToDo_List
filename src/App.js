import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import './App.css';
import Additem from './Additem';
import Search from './Search';

function App() {
  const [item, setItem] = useState  (
    JSON.parse(localStorage.getItem('todo_list'))
  );

  const [newItem, setNewitem] = useState('')
  const [search, setSearch] = useState('')
  
  const addItem = (items) =>{
    const id = item.length+1
    const addNewItems = {
      id: id,
      checked : false,
      items: items
    }
    const final = [...item, addNewItems]
    setItem(final)
    localStorage.setItem("todo_list", JSON.stringify(final)) 
  }

  function handlechange(id) {
    const list = item.map((j) =>
    j.id === id ? {...j, checked:!j.checked} : j
    )
    setItem(list)
    localStorage.setItem("todo_list", JSON.stringify(list)) 
  }
  function handledelete(id) {
    const list = item.filter((j) =>
    j.id !== id )
    setItem(list)
    localStorage.setItem("todo_list", JSON.stringify(list)) 
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
      <Content 
        item = {item.filter(item => ((item.items).toLowerCase()).includes(search.toLowerCase()))
        }
        handlechange={handlechange}
        handledelete={handledelete}
      />
      <Footer 
        length = {item.length}p
      />
    </div>
  );
}

export default App;
