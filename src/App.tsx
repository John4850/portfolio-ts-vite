import './App.css'
import { useEffect, useState } from 'react'
import { IQuoteData, IPictureOfTheDay } from './models/models'
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
        <ContactInfo theme={theme} />
        <div className="card animate glow">
          <h3 className='project-header'>Projects</h3>
          <BetterFuture />
        </div>
        <DailyPicture pictureOfTheDay={pictureOfTheDay} />
        <p className="alt-text">
          This portfolio the first app I have built using TypeScript,
          so check back as I learn more and do  more.
        </p>
        <p className="alt-text">
          IG for dog pictures and reels {<br />} 🐺 Zuko is really cute
        </p>
        <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
        </a>
      </div>
    </>
  )
}

export default App;
