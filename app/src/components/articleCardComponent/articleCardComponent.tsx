import styles from "./styles.module.css";

interface CardInterface {
  title: string;
  description: string;
}

function ArticleCardComponent(data: CardInterface) {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </>
  );
}

export default ArticleCardComponent;
