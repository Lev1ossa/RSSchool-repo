import './news.css';
import { INewsItemArticle } from '../../../types/types';
import placeholderImgSrc from './img/news-placeholder.png';

class News {
  draw(data: INewsItemArticle[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement | null;

      if (idx % 2) {
        newsClone?.querySelector('.news__item')?.classList.add('alt');
      }

      const metaPhotoEl = newsClone?.querySelector('.news__meta-photo') as HTMLTemplateElement;
      metaPhotoEl.style.backgroundImage = `url(${item.urlToImage || placeholderImgSrc})`;

      const metaAuthorEl = newsClone?.querySelector('.news__meta-author') as HTMLTemplateElement;
      metaAuthorEl.textContent = item.author || item.source.name;

      const metaDateEl = newsClone?.querySelector('.news__meta-date') as HTMLTemplateElement;
      metaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const desriptionTitleEl = newsClone?.querySelector('.news__description-title') as HTMLTemplateElement;
      desriptionTitleEl.textContent = item.title;

      const desriptionSourceEl = newsClone?.querySelector('.news__description-source') as HTMLTemplateElement;
      desriptionSourceEl.textContent = item.source.name;

      const desriptionContentEl = newsClone?.querySelector('.news__description-content') as HTMLTemplateElement;
      desriptionContentEl.textContent = item.description;

      const desriptionReadmoreEl = newsClone?.querySelector('.news__read-more a') as HTMLTemplateElement;
      desriptionReadmoreEl.setAttribute('href', item.url);

      if (newsClone) {
        fragment.append(newsClone);
      }
    });

    const newsEl = document.querySelector('.news') as HTMLTemplateElement;
    newsEl.innerHTML = '';
    newsEl.appendChild(fragment);
  }
}

export default News;
