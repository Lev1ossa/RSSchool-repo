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

// export type TRequest = {
//   endpoint: string;
//   options: Record<string, string>;
// };

export enum Endpoints {
  everything = 'everything',
  sources = 'sources',
}

export enum Errors {
  error401 = 401,
  error404 = 404,
}
