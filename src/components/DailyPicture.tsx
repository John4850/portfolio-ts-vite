import { IPictureOfTheDay } from "../models/models";

interface Props {
  pictureOfTheDay?: IPictureOfTheDay;
}

const DailyPicture: React.FC<Props> = ({ pictureOfTheDay }) => {

  if (pictureOfTheDay) { //may be undefined if waiting on API
    let videoFrame = (
      <>
        <iframe className="picture-of-the-day" height="500px" width="100%" src={pictureOfTheDay.url}></iframe>
        <h6 className='copyright'>©{pictureOfTheDay.date.slice(0, 4)} {pictureOfTheDay?.copyright}</h6>
      </>
    )

    let pictureFrame = (
      <div className="picture-of-the-day" >
        <a href={pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url} target="_blank">
          <img
            src={pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url}
            alt={pictureOfTheDay?.explanation}
            className="picture"
          />
          <h6 className='copyright'>© {pictureOfTheDay.date.slice(0, 4)} {pictureOfTheDay?.copyright}</h6>
        </a>
      </div>
    );

    let media = pictureOfTheDay.media_type; //Checks if media is a video or picture
    let displayedFrame: JSX.Element = media === "video" ? videoFrame : pictureFrame; //Chooses the proper element

    return (
      <>
        <div className='picture-frame'>
          <h2 className="grey-text">
            {"🔭 "}
            {media.charAt(0).toUpperCase() + media.slice(1)}
            {" of the Day from NASA's API"}
          </h2>
          <div className='description'>
            <p className="grey-text">
              {"What's not to love about staring at the stars and ultra hd images of them?"}
            </p>
          </div>
          <h2>{"NASA's "}
            {media.charAt(0).toUpperCase() + media.slice(1)}
            {" of the Day"}
          </h2>
          {displayedFrame}
          <div className="picture-text">
            <h4 className='picture-title'>{pictureOfTheDay?.title}</h4>
            <h5 className='explanation'>{pictureOfTheDay?.explanation}</h5>
          </div>
          <p className="alt-text">
            {"API call made to"}
            <br />
            <a href="https://api.nasa.gov/index.html" target="_blank">
              {"https://api.nasa.gov/index.html"}
            </a>
            <br />
            {"using"}
            <br />
            <a href="https://tanstack.com/query/latest" target="_blank">
              {"Tanstack / react-query"}
            </a>
          </p>
        </div>
      </>
    )
  }
  else return (
    <div className='picture-frame'>
      <h2>{"Loading from NASA's api. . . "}</h2>
      <p>
        {"🚧 Sorry the API is down 🚧"}
      </p>
      <p>
        {"Check out "}
        <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
          {"Astronomy Picture of the Day"}
        </a>
        {" for more info"}
      </p>
    </div>
  )
}


export default DailyPicture