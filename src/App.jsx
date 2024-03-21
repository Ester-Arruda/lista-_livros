import './App.css';
import Menu  from "./components/menu/Menu";
import BookListPage from "./pages/bookListPage/BookListPage";
import { useState } from 'react';


function App() {

  const [filter, setFilter] = useState('')
  const actionFilterBook = (value) => {
    if(value){
      setFilter(value);
    }
  };

  return (
    <>
      <Menu actionFilterBook={actionFilterBook}/>
      <BookListPage termFilter={filter}/> 
    </>
  )
}

export default App
