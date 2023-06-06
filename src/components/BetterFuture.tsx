
const BetterFuture: React.FC = () => (
  <>
    <div className="card animate glow delay-2">
      <h3 className='project-header'><a href="https://bffa.org/" target="_blank"> Better Future For All <br /> 🔗</a></h3>
      <p className="grey-text">
        Intuitive tools for exploring the
        <a href="http://www.socialprogress.org/framework" target="_blank"> SPI framework </a>
        from the
        <a href="http://socialprogress.org/" target="_blank"> Social Progress Imperative </a>
      </p>

      <div className="project">
        <h3>Choropleth Map with Tooltip</h3>
        <p className="grey-text">
          View scores from around the world at a glance
        </p>
        <iframe height="650px" width="100%" src="https://betterfutureforall.netlify.app/">
          Your browser does not support embedded frames (iFrames)
          <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
        </iframe>
        <a href="https://betterfutureforall.netlify.app/" title="open in new window" target="_blank">🔗</a>
        <p className="alt-text">
          Built using React, D3, and lots of JavaScript, HTML, and CSS.
        </p>
        <p className="grey-text">Inspired by
          <a href="https://shirleywu.studio/filmflowers/" target="_blank">{` Shirley Wu's Film Flowers`}</a>
        </p>
      </div>
      <div className="project">
        <h3>Definitions Stamp-Book</h3>
        <p className="grey-text">
          Stamp-Book for exploring the definitions and their sources, physical version available at <a href="https://bffa.org/" target="_blank"> BFFA.org</a>.
        </p>
        <iframe height="650px" width="100%" src="https://bffa-definitions.netlify.app/">
          Your browser does not support embedded frames (iFrames)
          <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
        </iframe>
        <a href="https://bffa-definitions.netlify.app/" title="open in new window" target="_blank">🔗</a>
        <p className="alt-text">
          Built using React.js, JavaScript, HTML, and CSS.
        </p>
        <p className="grey-text">
          Artwork by
          <a href="https://www.gingeryartistry.com/" target="_blank"> Jannah Minnix </a>
        </p>
      </div>
    </div>
  </>
)
export default BetterFuture;