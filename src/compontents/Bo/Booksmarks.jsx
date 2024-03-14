import PropTypes from "prop-types";
import Bookmar from "../Bookmark/Bookmar";
const Booksmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="mb-5 text-2xl">Bookmarked Blogs:{bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmar key={bookmark.id} bookmark={bookmark}></Bookmar>)
      }
    
    </div>
  );
};
Booksmarks.propTypes = {
  bookmarks: PropTypes.array
};
export default Booksmarks;
