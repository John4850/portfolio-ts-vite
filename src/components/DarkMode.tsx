import { useEffect, useState } from "react";

interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const DarkMode: React.FC<Props> = ({ theme, setTheme }) => {

  useEffect(() => {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDarkMode) {
        rootElement.classList.add('dark');
        setTheme("Light");
      } else {
        rootElement.classList.add('light');
        setTheme("Dark");
      }
      console.log(rootElement.classList)
    }
  }, []);

  const toggleTheme = () => {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      rootElement.classList.toggle('dark');
      rootElement.classList.toggle('light');
      setTheme(theme === "Light" ? "Dark" : "Light");
      console.log(rootElement.classList);
    }
  };
  let emoji:string = (theme == "Light") ? "💡" : "🕶️";
  return (
    <div>
      <button className="theme-button" onClick={toggleTheme}>{`${emoji}${theme}-Mode`}</button>
    </div>
  );
};

export default DarkMode;