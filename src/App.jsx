import "./App.css";
import Header from "./compontents/Header/Header";
import Blogs from "./compontents/Blogs/Blogs";
import Booksmarks from "./compontents/Bo/Booksmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  const handleAddToBookmark = (blogs) => {
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
      </div>
    </>
  );
}

export default App;
