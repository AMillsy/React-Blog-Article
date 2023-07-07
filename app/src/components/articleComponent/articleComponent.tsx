import styles from "./articleComponent.module.css";
interface ArticleData {
  title: string;
  content?: string;
}

function ArticleComponent(data: ArticleData) {
  return (
    <div className={styles.articleContainer}>
      <h2>{data.title}</h2>
      <article>{data.content}</article>
    </div>
  );
}

export default ArticleComponent;
