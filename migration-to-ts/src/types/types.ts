export interface INewsItemSource {
  id: string;
  name: string;
  discription: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface INewsItemArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INews {
  status: string;
  articles?: INewsItemArticle[];
  sources?: INewsItemSource[];
}

export type Request = {
  endpoint: string;
  options?: Partial<Options>;
};

export enum Endpoints {
  everything = 'everything',
  sources = 'sources',
}

export enum Errors {
  error401 = 401,
  error404 = 404,
}

export type Options = Record<string, string>;

export type NewsArticles = Pick<INews, 'status' | 'articles'>;

export type NewsSources = Pick<INews, 'status' | 'sources'>;

export type NewsReadOnly = Readonly<INews>;
