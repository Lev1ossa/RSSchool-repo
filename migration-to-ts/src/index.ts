import App from './components/app/app';
import './global.css';
import { initColorTheme } from './components/theme/theme';

const app = new App();
app.start();
initColorTheme();
