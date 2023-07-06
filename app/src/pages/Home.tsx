import ArticleCardComponent from "../components/articleCardComponent";
import blogs from "./blog.json";
import styles from "./styles.module.css";
interface blogData {
  id: number;
  title: string;
  description: string;
}

function Home() {
  function renderNewCards() {
    console.log(blogs);
    const blogsArr: Array<blogData> = [];
    blogs.forEach(({ id, title, description }: blogData) => {
      blogsArr.push({ id, title, description });
    });
    return blogsArr;
  }

  return (
    <>
      <h2>Welcome to the page</h2>
      <p>This is the home page</p>
      <article className={styles.cardContainer}>
        {renderNewCards().map((blog) => (
          <ArticleCardComponent
            key={blog.id}
            title={blog.title}
            description={blog.description}
          ></ArticleCardComponent>
        ))}
      </article>
    </>
  );
}

export default Home;
