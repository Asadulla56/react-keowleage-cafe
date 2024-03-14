import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="mb-5 w-full rounded-2xl" src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between">
        {/* first div */}
        <div className="flex gap-5">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h1>{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="text-[#111111]">
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-2xl mt-5 text-[#111111]">{title}</h2>
      <p>
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            {" "}
            <a href="">{hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
