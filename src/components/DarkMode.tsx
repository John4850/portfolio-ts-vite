import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.add('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      rootElement.classList.toggle('dark');
      rootElement.classList.toggle('light');
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div>
  );
};