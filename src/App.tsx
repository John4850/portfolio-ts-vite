import './App.css'
import { useState, useRef } from 'react'
import { IPictureOfTheDay } from './models/models'
import DailyPicture from './components/DailyPicture'
import ContactInfo from './components/ContactInfo'
import BetterFuture from './components/BetterFuture'
import DarkMode from './components/DarkMode'
import usePictureOfTheDay from './services/nasaQuery'
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

  return (
    <>
      <div id="app" className="app">
        <DarkMode theme={theme} setTheme={setTheme} />
        <h1 className='app-title animate glow'> John Nelson </h1>
        <p className='tag-line animate glow delay-1'>
          Software Engineer, Problem Solver
        </p>

        <h2 className='project-header animate glow delay-2'>Projects</h2>
        <div className="card animate glow delay-2">
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
        <ContactInfo theme={theme} isVisible={isVisible} myRef={ref}/>

      </div>
        <p className="alt-text">
          This portfolio is built using TypeScript, React, and assembled with Vite. 
          Check back as I learn more and do  more.
        </p>
    </>
  )
}

export default App;
