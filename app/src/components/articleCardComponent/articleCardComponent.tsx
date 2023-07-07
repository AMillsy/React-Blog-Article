import styles from "./styles.module.css";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface CardInterface {
  id: number;
  title: string;
  description: string;
}

function ArticleCardComponent(data: CardInterface) {
  const navigate = useNavigate();

  function clickedCard(e: React.ChangeEvent<any>) {
    navigate(`/blogs/${data.id}`);
  }

  return (
    <>
      <div data-id={data.id} onClick={clickedCard} className={styles.card}>
        <h2 className={styles.title}>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </>
  );
}

export default ArticleCardComponent;
