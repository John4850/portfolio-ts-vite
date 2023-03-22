
const BetterFuture: React.FC = () => (
  <>
    <h3 className='project-header'><a href="https://bffa.org/" target="_blank"> Better Future For All 🔗</a></h3>
    <p className="grey-text">
      I used the 
    <a href="http://www.socialprogress.org/framework" target="_blank"> SPI framework </a> 
    created by 
    <a href="http://socialprogress.org/" target="_blank"> Social Progress Imperative </a> 
    to create intuitive tools for exploring data.</p>
    <div className="project">
      <p>Choropleth map and tooltip using React, D3, and lots of JavaScript</p>
      <iframe height="500px" width="100%" src="https://betterfutureforall.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>
    <div className="project">
      <p>React.js App for exploring the definitions and sources </p>
      <iframe height="500px" width="100%" src="https://bffa-definitions.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>
  </>
)
export default BetterFuture;