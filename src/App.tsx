import './App.css'
import AboutMe from './components/AboutMe'
import BetterFuture from './components/BetterFuture'
import ContactInfo from './components/ContactInfo'
import DailyPicture from './components/DailyPicture'
import DarkMode from './components/DarkMode'
import Empathetech from './components/Empathetech'
import Footer from './components/Footer'
import { IPictureOfTheDay } from './models/models'
import usePictureOfTheDay from './services/nasaQuery'
import { useState, useRef } from 'react'
import { useIntersectionObserver } from './hooks/hooks'

const baseUrl = import.meta.env.VITE_APP_NASA_BASE_URL
const apiKey = import.meta.env.VITE_APP_NASA_API_KEY
const nasaUrl = `${baseUrl}${apiKey}`;

const App: React.FC = () => {

  //Used for setting Light and Dark mode;
  const [theme, setTheme] = useState<string>("");

  //Fetches NASA's Picture of the Day
  const [pictureOfTheDay, setPictureOfTheDay] = useState<IPictureOfTheDay>();
  usePictureOfTheDay({ nasaUrl, setPictureOfTheDay });

  //observer for contact info coming into viewport
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref)

  const NAME = "John Nelson"
  const TAG_LINE = "Software Engineer"
  const PROJECT_HEADER = "Projects"

  return (
    <>
      <div className='background'></div>
      <div id="app" className="app">
        <DarkMode theme={theme} setTheme={setTheme} />
        <h1 className='app-title animate glow'>{NAME}</h1>
        <p className='tag-line animate glow delay-1'>{TAG_LINE}</p>
        <h2 className='project-header animate glow delay-2'>{PROJECT_HEADER}</h2>
        <BetterFuture />
        <br />
        <Empathetech theme={theme} />
        <DailyPicture pictureOfTheDay={pictureOfTheDay} />
        <AboutMe theme={theme} />
        <ContactInfo theme={theme} isVisible={isVisible} myRef={ref} />
        <Footer />
      </div>
    </>
  )
}

export default App;
