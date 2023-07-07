export interface Article {
  id: number;
  article_content?: string;
  author?: string;
  createdAt: string;
  description?: string;
  title: string;
  updatedAt: string;
}

export interface Test<T> {
  property: T;
}
