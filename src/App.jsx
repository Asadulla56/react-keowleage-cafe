import './App.css'
import Header from './compontents/Header/Header'
import Blogs from './compontents/Blogs/Blogs'
import Booksmarks from './compontents/Bo/Booksmarks'
import { useState } from 'react'

function App() {

  const [bookmarks ,setBookmarks] = useState([]);
  const handleAddToBookmark =blogs =>{
     const newBookmarks = [...bookmarks,blogs]
     setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
      <Booksmarks bookmarks={bookmarks}></Booksmarks>
      </div>
    </>
  )
}

export default App
