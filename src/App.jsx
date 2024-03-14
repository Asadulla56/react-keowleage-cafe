import { useState } from 'react'
import './App.css'
import Header from './compontents/Header/Header'
import Blogs from './compontents/Blogs/Blogs'
import Booksmarks from './compontents/Booksmarks/Booksmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Booksmarks></Booksmarks>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
