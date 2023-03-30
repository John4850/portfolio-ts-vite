import './App.css'
import { useState } from 'react'
import { IPictureOfTheDay } from './models/models'
import DailyPicture from './components/DailyPicture'
import ContactInfo from './components/ContactInfo'
import BetterFuture from './components/BetterFuture'
import DarkMode from './components/DarkMode'
import instagramLogo from './assets/Instagram_Glyph_Gradient.png'
import usePictureOfTheDay from './services/nasaQuery'

const baseUrl = import.meta.env.VITE_APP_NASA_BASE_URL
const apiKey = import.meta.env.VITE_APP_NASA_API_KEY
const nasaUrl = `${baseUrl}${apiKey}`;

const App: React.FC = () => {

  //Used for setting Light and Dark mode;
  const [theme, setTheme] = useState<string>("");

  //Fetches NASA's Picture of the Day
  const [pictureOfTheDay, setPictureOfTheDay] = useState<IPictureOfTheDay>();
  usePictureOfTheDay({ nasaUrl, setPictureOfTheDay });

  return (
    <>
      <div id="app" className="app">
        <DarkMode theme={theme} setTheme={setTheme} />
        <h1 className='app-title animate glow'> John Nelson </h1>
        <p className='tag-line animate glow delay-1'>
          Software Engineer, Problem Solver
        </p>

          <h2 className='project-header'>Projects</h2>
        <div className="card animate glow">
          <BetterFuture />
        </div>
        <DailyPicture pictureOfTheDay={pictureOfTheDay} />
        <p className="alt-text">
          <span>In my personal life, I spend a lot of time with dogs and being outdoors. </span>
          You can find me out on the trails around PDX with Zuko
        </p>
        <p className="alt-text">
          Want to know more? Let's connect!
        </p>
        <ContactInfo theme={theme} />
        <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
        </a>
      </div>
        <p className="alt-text">
          This portfolio is built using TypeScript, React, and assembled with Vite. 
          Check back as I learn more and do  more.
        </p>
    </>
  )
}

export default App;
