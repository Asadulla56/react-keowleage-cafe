import PropTypes from "prop-types";
import Bookmar from "../Bookmark/Bookmar";
const Booksmarks = ({ bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded-xl ml-4">
      <div>
        <h3 className="text-2xl">Reading Time :{readingTime}</h3>
      </div>
      <h2 className="mb-5 text-2xl text-center pt-3">
        Bookmarked Blogs:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmar key={bookmark.id} bookmark={bookmark}></Bookmar>
      ))}
    </div>
  );
};
Booksmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime:PropTypes.number
};
export default Booksmarks;
