import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '1b6714bc3f3c48d6ac3239ae1f78c017', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
