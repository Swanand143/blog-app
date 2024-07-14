import "./blogscards.css";
import { Link } from "react-router-dom";

function BlogCard({ id, title, image, date, description }) {
  return (
    <Link className="card" to={`/blog/${id}`}>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description.substring(0, 100)}...</p>
      <div className="date-container">
        <span className="date">{date}</span>
      </div>
    </Link>
  );
}

export default BlogCard;
