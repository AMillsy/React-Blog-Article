import "./articleComponent.module.css";

interface ArticleData {
  title: string;
  content: string;
}

function ArticleComponent(data: ArticleData) {
  return <h2>{data.title}</h2>;
}

export default ArticleComponent;
