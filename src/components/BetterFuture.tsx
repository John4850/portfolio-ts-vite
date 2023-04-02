
const BetterFuture: React.FC = () => (
  <>
    <h3 className='project-header'><a href="https://bffa.org/" target="_blank"> Better Future For All 🔗</a></h3>
    <p className="grey-text">
      Created intuitive tools for exploring the
      <a href="http://www.socialprogress.org/framework" target="_blank"> SPI framework </a>
      from the 
      <a href="http://socialprogress.org/" target="_blank"> Social Progress Imperative </a>
      </p>

    <div className="project">
      <h3>Choropleth map and tooltip using React, D3, and lots of JavaScript</h3>
      <p className="grey-text">Inspired by
        <a href="https://shirleywu.studio/filmflowers/" target="_blank">{` Shirley Wu's Film Flowers, `}</a>
      </p>  
      <p className="grey-text">
       D3.js map and tooltip for viewing scores at a glance.
      </p>
      <iframe height="500px" width="100%" src="https://betterfutureforall.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>

    <div className="project">
      <h3>React.js Stamp-Book, Definitions and Sources </h3>
      <p className="grey-text">
       React Stamp-Book with physical version available. Artwork by
        <a href="https://www.gingeryartistry.com/" target="_blank"> Jannah Minnix, </a>
      </p>
      <iframe height="500px" width="100%" src="https://bffa-definitions.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>
  </>
)
export default BetterFuture;