import "./home.css";
import blogs from "./../../data";
import Blogcard from "../../component/blogs/blogcards";

function Home() {
  console.log(blogs);
  return (
    <>
      <div className="card-container">
        {blogs.map((blogObject, i) => {
          const { id, title, image, date, description } = blogObject;
          return (
            <Blogcard
              key={i}
              id={id}
              title={title}
              image={image}
              description={description}
              date={date}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
