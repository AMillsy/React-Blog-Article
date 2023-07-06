import { render } from "@testing-library/react";
import styles from "./articleComponent.module.css";
import ParagraphComponent from "./paragraphComponent";
interface ArticleData {
  title: string;
  content?: string;
}

function ArticleComponent(data: ArticleData) {
  let splitContent!: Array<string>;
  function renderContent() {
    if (!data.content) return;
    const article = document.querySelector(`article`);
    splitContent = data.content?.split(`\r`);
    console.log(splitContent);
  }
  renderContent();

  return (
    <div className={styles.articleContainer}>
      <h2>{data.title}</h2>
      <article>{splitContent.map((text) => ParagraphComponent(text))}</article>
    </div>
  );
}

export default ArticleComponent;
