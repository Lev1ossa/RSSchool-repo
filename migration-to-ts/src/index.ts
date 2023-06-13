import App from './components/app/app';
import './global.css';
import { initColorTheme } from './components/theme/theme';

const app = new App();
app.start();
initColorTheme();
// const colorThemeButton = document.querySelector('.theme-button') as HTMLTemplateElement;
// const bodyEl = document.querySelector('.body') as HTMLTemplateElement;

// const toggleColorTheme = (): void => {
//   if (bodyEl.classList.contains('dark-theme')) {
//     bodyEl.classList.remove('dark-theme');
//   } else {
//     bodyEl.classList.add('dark-theme');
//   }
// };

// colorThemeButton.addEventListener('click', () => {
//   toggleColorTheme();
// });
