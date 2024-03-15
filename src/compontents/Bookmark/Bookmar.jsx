import PropTypes from "prop-types";


const Bookmar = ({ bookmark,}) => {
  const { title } = bookmark;
  return (
    <div className="bg-green-200 p-4 m-4 rounded-xl">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};
Bookmar.propTypes = {
  bookmark: PropTypes.object,
  readingTime:PropTypes.number
};
export default Bookmar;
