import PropTypes from "prop-types";


const Bookmar = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-sate-200 p-4 m-4">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};
Bookmar.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmar;
