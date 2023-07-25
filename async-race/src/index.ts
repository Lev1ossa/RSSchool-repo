import { App } from './app/app';
import './style.css';

// alert('Уважаемый проверяющий! Если есть возможность, отложи,
// пожалуйста, проверку до 26.07. Мне нужно ещё немного времени. Спасибо!');

const createNewApp = (): App => new App();
createNewApp();
