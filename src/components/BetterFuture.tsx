
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
      <h3>Choropleth map and tooltip using React, D3, and lots of JavaScript</h3>
      <p className="grey-text">I was inspired by
        <a href="https://shirleywu.studio/filmflowers/" target="_blank"> Shirley Wu's Film Flowers </a>
        where she uses IMDB ratings and D3 to create a flower petal concept.
        Taking that a step further, I created a dynamic tooltip and choropleth map.
        Each of the tooltip's petal size is scaled accurately, and its corresponding subcategories bloom to represent the data.
      </p>
      <iframe height="500px" width="100%" src="https://betterfutureforall.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>

    <div className="project">
      <h3>React.js Stamp Book, explore the definitions and sources </h3>
      <p className="grey-text">Using artwork created by
        <a href="https://www.gingeryartistry.com/" target="_blank"> Jannah Minnix, </a>
        I created a react stamp book to engage users. There is also a physical stamp book to accompany this project.
      </p>
      <iframe height="500px" width="100%" src="https://bffa-definitions.netlify.app/">
        Your browser does not support embedded frames (iFrames)
        <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
      </iframe>
    </div>
  </>
)
export default BetterFuture;