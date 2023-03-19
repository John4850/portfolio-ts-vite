import { IPictureOfTheDay } from "../models/models";

interface Props {
  pictureOfTheDay?: IPictureOfTheDay;
}

const DailyPicture: React.FC<Props> = ({ pictureOfTheDay }) => (
  <>
    <div className='picture-of-the-day'>
      <p className="grey-text">Heres an API call to grab a Picture of the Day from NASA</p>
      <h3>NASA's Picture of the Day</h3>
      <a href={pictureOfTheDay?.hdurl} target="_blank">
        <img
          src={pictureOfTheDay?.hdurl}
          alt={pictureOfTheDay?.explanation}
          className="picture-of-the-day"
        />
      </a>
      <h4 className='picture-title'>{pictureOfTheDay?.title}</h4>
      <h5 className='explanation'>{pictureOfTheDay?.explanation}</h5>
      <div className='reference'>
        <p>{`You can find their API at `}
          <a href="https://api.nasa.gov/index.html" target="_blank">
            https://api.nasa.gov/index.html
          </a>
        </p>
      </div>
    </div>
  </>
)

export default DailyPicture