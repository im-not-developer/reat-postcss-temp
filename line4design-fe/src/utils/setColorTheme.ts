export const setColorTheme = (value: string) => {
  const bodyElement = document.getElementsByTagName('body')[0];

  if (value === 'light') {
    bodyElement && bodyElement.classList.add('light-mode');
  } else if (value === 'dark') {
    bodyElement && bodyElement.classList.add('dark-mode');
  } else {
    bodyElement && bodyElement.classList.remove('light-mode');
  }
};
