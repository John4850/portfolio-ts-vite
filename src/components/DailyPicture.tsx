import { IPictureOfTheDay } from "../models/models";

interface Props {
  pictureOfTheDay?: IPictureOfTheDay;
}

const DailyPicture: React.FC<Props> = ({ pictureOfTheDay }) => {
  if (pictureOfTheDay) {
    let videoFrame = (<iframe className="picture-of-the-day" height="500px" width="100%" src={pictureOfTheDay.url}></iframe>)
    let pictureFrame = (
      <a href={pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url} target="_blank">
        <img
          src={pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url}
          alt={pictureOfTheDay?.explanation}
          className="picture-of-the-day"
        />
      </a>
    );
    let media = pictureOfTheDay.media_type;
    let displayedFrame = media === "video" ? videoFrame : pictureFrame;

    return (
      <>
        <div className='picture-of-the-day'>
          <p className="grey-text">Heres an API call to grab a Picture or Video of the Day from NASA</p>
          <h2>NASA's {media.charAt(0).toUpperCase() + media.slice(1)} of the Day</h2>
          {displayedFrame}
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
  }
  else return <div><h2>Loading from NASA's api. . . </h2></div>
}


export default DailyPicture