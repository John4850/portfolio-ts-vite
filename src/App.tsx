import './App.css'
import { useEffect, useState } from 'react'
import githubMark from './assets/github-mark-white.png'
import emailLogo from './assets/gmail-logo.png'
import linkedInLogo from './assets/LI-In-Bug.png'
import instagramLogo from './assets/Instagram_Glyph_Gradient.png'
import { useWindowSize } from './hooks/hooks';
const baseUrl = import.meta.env.VITE_APP_NASA_BASE_URL
const apiKey = import.meta.env.VITE_APP_NASA_API_KEY
const nasaURL = `${baseUrl}${apiKey}`;

let email = 'JohnNelson4850@gmail.com';

function App() {
  interface IQuoteData { data: any, loading: boolean, error: any }
  interface IPictureOfTheDay {
    copyright: string,
    date: Date,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
  }

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

  let pictureElement = (
    <>
      <a href={pictureOfTheDay?.hdurl} target="_blank">
        <img
          src={pictureOfTheDay?.hdurl}
          alt={pictureOfTheDay?.explanation}
          className="img-of-the-day"
          width={windowSize[0] * .8} height={"auto"}
        />
      </a>
      <h4 className='picture-title'>{pictureOfTheDay?.title}</h4>
      <h5 className='explanation'>{pictureOfTheDay?.explanation}</h5>
    </>
  )

  return (
    <>
      <div id="app" className="app">
        <h1 className='app-title'>John Nelson</h1>
        <p>

        </p>
        <div className='contact-info'>
          <a href="https://github.com/John4850" target="_blank">
            <img src={githubMark} className="contact-logo delay-1" alt="GitHub logo" />
            John4850
          </a>
          <a href={`mailto:${email} subject=""  body="" `} target="_blank">
            <img src={emailLogo} className="contact-logo delay-2" alt="GitHub logo" />
            Gmail
          </a>
          <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank">
            <img src={linkedInLogo} className="contact-logo delay-3" alt="LinkedIn logo" />
            JohnNelson4850
          </a>
        </div>
        <p className="read-the-docs">A data visual tool I built for
          <a href="https://bffa.org/" target="_blank"> Better Future For All</a>
        </p>
        <iframe height="500px" width="100%" src="https://betterfutureforall.netlify.app/">
          Your browser does not support embedded frames (iframes)
          <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
        </iframe>
        <div className="card">

        </div>
        <div className='picture-of-the-day'>
          <p className="read-the-docs">Heres an API call to grab a Picture of the Day from NASA</p>
          <h3>NASA's Picture of the Day</h3>
          {pictureElement}
          <div className='reference'>
            <p>{`You can find their API at `}  
              <a href="https://api.nasa.gov/index.html" target="_blank">
                https://api.nasa.gov/index.html
              </a>
            </p>
          </div>
        </div>
        <p>
          This portfolio the first app I have built using TypeScript,
          so check back as I learn more and do  more.
        </p>
        <p className="read-the-docs">
          check out the IG if you like dog pictures and reels, Zuko is really cute
        </p>
        <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
          <img src={instagramLogo} className="contact-logo" alt="Instagram logo" />
        </a>
      </div>

    </>
  )
}

export default App;
