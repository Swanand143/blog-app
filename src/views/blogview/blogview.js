import "./blogview.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogView() {
  const { id } = useParams();

  const viewBlog = blogs.find((blogObject) => blogObject.id === id);
  console.log(viewBlog);
  return (
    <div className="View-cards">
      <h1>{viewBlog.title}</h1>
      <p className="View-date">{viewBlog.date}</p>
      <div className="view-image">
        <img src={viewBlog.image} alt={viewBlog.title} />
      </div>

      <p className="View-content">{viewBlog.info.part1}</p>
      <p className="View-content">{viewBlog.info.part2}</p>
    </div>
  );
}

export default BlogView;
