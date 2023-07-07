import ArticleComponent from "../components/articleComponent";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import blogData from "./blog.json";
import { Article } from "../definitons";

function Blogs() {
  const [article, setArticle] = useState<Article | null>(null);
  const params = useParams();
  useEffect(() => {
    if (!article) {
      fetch(`/api/blogs/${params.id}`).then(async (response) => {
        const res = await response.json();
        setArticle(res);
      });
    }
  }, [article, params]);

  if (!article) return null;

  return (
    <ArticleComponent
      //REPLACE KEY WITH THE BLOGS ID
      key={article.id}
      title={article.title}
      content={article.article_content}
    ></ArticleComponent>
  );
}

export default Blogs;
