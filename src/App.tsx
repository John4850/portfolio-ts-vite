import './App.css'
import { useEffect, useState } from 'react'
import { IQuoteData, IPictureOfTheDay } from './models/models'
import DailyPicture from './components/DailyPicture'
import ContactInfo from './components/ContactInfo'
import instagramLogo from './assets/Instagram_Glyph_Gradient.png'
import { useWindowSize } from './hooks/hooks';
import BetterFuture from './components/BetterFuture'
const baseUrl = import.meta.env.VITE_APP_NASA_BASE_URL
const apiKey = import.meta.env.VITE_APP_NASA_API_KEY
const nasaURL = `${baseUrl}${apiKey}`;

const App: React.FC = () => {

  let [buttonMessage, setButtonMessage] = useState<String>("dark");
  let [quoteData, setQuoteData] = useState<IQuoteData>();
  let [quoteString, setQuoteString] = useState<string>('Click the button to get a random Quote');
  let [pictureOfTheDay, setPictureOfTheDay] = useState<IPictureOfTheDay>();
  let windowSize = useWindowSize();

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
      <h1 className='app-title'> John Nelson </h1>
      <ContactInfo />
      <div className="card">
        <BetterFuture/>
      </div>
      <DailyPicture pictureOfTheDay={pictureOfTheDay} />
      <p className="grey-text">
        This portfolio the first app I have built using TypeScript,
        so check back as I learn more and do  more.
      </p>
      <p className="grey-text">
        IG for dog pictures and reels, Zuko is really cute 🐺
      </p>
      <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
        <img src={instagramLogo} className="contact-logo" alt="Instagram logo" />
      </a>
    </div>
  )
}

export default App;
