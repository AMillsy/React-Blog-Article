import "./articleComponent.module.css";

interface ArticleData {
  title: string;
  content?: string;
}

function ArticleComponent(data: ArticleData) {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Random things</p>
    </div>
  );
}

export default ArticleComponent;
