export function initColorTheme(): void {
  const colorThemeButton = document.querySelector('.theme-button') as HTMLTemplateElement;
  const bodyEl = document.querySelector('.body') as HTMLTemplateElement;

  const toggleColorTheme = (): void => {
    if (bodyEl.classList.contains('dark-theme')) {
      bodyEl.classList.remove('dark-theme');
    } else {
      bodyEl.classList.add('dark-theme');
    }
  };

  colorThemeButton.addEventListener('click', () => {
    toggleColorTheme();
  });
}
