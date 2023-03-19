import './App.css'
import { useEffect, useState } from 'react'
import { IQuoteData, IPictureOfTheDay } from './models/models'
import DailyPicture from './components/DailyPicture'
import ContactInfo from './components/ContactInfo'
import BetterFuture from './components/BetterFuture'
import DarkMode from './components/DarkMode'
import instagramLogo from './assets/Instagram_Glyph_Gradient.png'
import { useWindowSize } from './hooks/hooks';

const baseUrl = import.meta.env.VITE_APP_NASA_BASE_URL
const apiKey = import.meta.env.VITE_APP_NASA_API_KEY
const nasaURL = `${baseUrl}${apiKey}`;

const App: React.FC = () => {
  
  //Used for setting Light and Dark mode;
  const [theme, setTheme] = useState<string>("");
  
  //Fetches NASA's Picture of the Day
  const [pictureOfTheDay, setPictureOfTheDay] = useState<IPictureOfTheDay>();
  useEffect(() => {
    fetch(nasaURL)
      .then((res) => res.json())
      .then((JSON) => {
        if (JSON.error) { console.log(JSON.error) }
        setPictureOfTheDay(JSON);
      })
  }, []);

  return (
    <div id="app" className="app">
      <DarkMode theme={theme} setTheme={setTheme}/>
      <h1 className='app-title'> John Nelson </h1>
      <ContactInfo theme={theme}/>
      <div className="card">
        <BetterFuture/>
      </div>
      <DailyPicture pictureOfTheDay={pictureOfTheDay} />
      <p className="alt-text">
        This portfolio the first app I have built using TypeScript,
        so check back as I learn more and do  more.
      </p>
      <p className="alt-text">
        IG for dog pictures and reels, Zuko is really cute 🐺
      </p>
      <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
        <img src={instagramLogo} className="contact-logo" alt="Instagram logo" />
      </a>
    </div>
  )
}

export default App;
