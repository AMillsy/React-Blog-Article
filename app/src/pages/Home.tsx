import ArticleCardComponent from "../components/articleCardComponent";
import blogs from "./blog.json";
import styles from "./styles.module.css";
interface blogData {
  id: number;
  title: string;
  description: string;
}

function Home() {
  const renderedBlogs: Array<blogData> = blogs.map((blog) => blog);

  return (
    <>
      <h2>Welcome to the page</h2>
      <p>This is the home page</p>
      <article className={styles.cardContainer}>
        {renderedBlogs.map((blog) => (
          <ArticleCardComponent
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
          ></ArticleCardComponent>
        ))}
      </article>
    </>
  );
}

export default Home;
