import { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import githubMark from './assets/github-mark-white.png'
import linkedInLogo from './assets/LI-In-Bug.png'
import instagramLogo from './assets/Instagram_Glyph_Gradient.png'
import './App.css'
import { useFetch } from './hooks/hooks';
const avatarUrl = "https://last-airbender-api.fly.dev/api/v1/characters";
const quoteUrl = "http://quotes.rest/quote/random.json";
const nasaURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

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

  // let quoteClickHandler = () => {
  //   if (!quoteData) {
  //     useFetch(quoteUrl).then((res: IQuoteData) => setQuoteData(res))
  //   }
  // };

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
      <LazyLoadImage
        src={pictureOfTheDay?.hdurl}
        alt={pictureOfTheDay?.explanation}
        className="img-of-the-day"
        width={700} height={500}
        placeholderSrc={pictureOfTheDay?.url}
      />
      <h4>{pictureOfTheDay?.title}</h4>
    </>
  )

  return (
    <>
      <div id="app" className="App">
        <div>
          <a href="https://github.com/John4850" target="_blank">
            <img src={githubMark} className="logo" alt="GitHub logo" />
            https://github.com/John4850
          </a>
          <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank">
            <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
            https://www.linkedin.com/in/johnnelson4850/
          </a>
        </div>
        <h1>John Nelson</h1>
        <div className="card">
          <p>
            Click on the GitHub and LinkedIn logos to learn more,
            This is the first app I have built out with TypeScript
            so check back as I learn more and do  more.
          </p>
        </div>
        <div className='picture-of-the-day'>
          <h3>NASA's Picture of the Day</h3>
          {pictureElement}
          <p>You can find their API here</p>
          <a href="https://api.nasa.gov/index.html" target="_blank">
            https://api.nasa.gov/index.html
          </a>
        </div>
        <p className="read-the-docs">
          or check out the IG if you like Dog pictures and reels
        </p>
        <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
          <img src={instagramLogo} className="logo" alt="Instagram logo" />
        </a>

      </div>
    </>
  )
}

export default App

// NASA API endpoint
// {
//   "copyright": "Neil Corke",
//   "date": "2023-03-16",
//   "explanation": "Globular star cluster Omega Centauri, also known as NGC 5139, is 15,000 light-years away. The cluster is packed with about 10 million stars much older than the Sun within a volume about 150 light-years in diameter. It's the largest and brightest of 200 or so known globular clusters that roam the halo of our Milky Way galaxy. Though most star clusters consist of stars with the same age and composition, the enigmatic Omega Cen exhibits the presence of different stellar populations with a spread of ages and chemical abundances. In fact, Omega Cen may be the remnant core of a small galaxy merging with the Milky Way. Omega Centauri's red giant stars (with a yellowish hue) are easy to pick out in this sharp, color telescopic view.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2303/NGC5139_Omega_Centauri_3700px.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "Millions of Stars in Omega Centauri",
//   "url": "https://apod.nasa.gov/apod/image/2303/NGC5139_Omega_Centauri_1024px.jpg"
//   }