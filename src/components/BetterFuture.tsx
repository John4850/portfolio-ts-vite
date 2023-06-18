import bffaIcon from '../assets/bffa-icon.svg'
import bffaDefinitions from '../assets/bffa-definitions.png'
import bffaDefinitionsSmall from '../assets/bffa-definitions-small.png'
import bffaDefinitionsWebP from '../assets/bffa-definitions.webp'
import githubMark from '../assets/github-mark.svg'
import githubMarkWhite from '../assets/github-mark-white.svg'
import worldMap from '../assets/world-map.png'
import worldMapSmall from '../assets/world-map-small.png'
import worldMapWebP from '../assets/world-map.webp'

interface Props {
  theme: string;
}

const BetterFuture: React.FC<Props> = ({ theme }) => {

  const getImg = <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`git-link`} alt="GitHub logo" />

  const bffaImg = <img src={bffaIcon} alt='better future for all icon' className='bffa-icon' />
  
  const worldImg = (
    <picture>
      <source srcSet={worldMapWebP} type="image/webp" />
      <source srcSet={worldMap} type="image/png" media="(min-width: 601px)" />
      <img src={worldMapSmall} alt='World map and Tooltip' className='image' />
    </picture>
  )

  const definitionsImg = (
    <picture>
      <source srcSet={bffaDefinitionsWebP} type="image/webp" />
      <source srcSet={bffaDefinitions} type="image/png" media="(min-width: 601px)" />
      <img src={bffaDefinitionsSmall} alt='Definitions stamp book' className='image' />
    </picture>
  )

  return (
    <>
      <div className="card animate glow delay-2">

        <h3 className="project-title" title="bffa.org">
          <a href="https://bffa.org/" target="_blank">
            {bffaImg}
            {" Better Future For All "}
          </a>
        </h3>

        <p className="explanation">
          {"Using art to promote measuring and improving a society's ability to meet people's basic needs, empower communities, and unlock individual potential."}
          <br />
          <br />
          {"I created intuitive tools for exploring the"}
          <a href="http://www.socialprogress.org/framework" target="_blank">{" SPI framework "}</a>
          {"from the"}
          <a href="http://socialprogress.org/" target="_blank">{" Social Progress Imperative "}</a>
        </p>

        <div className="project">
          <a href="https://betterfutureforall.netlify.app/" title="open in new window" target="_blank">
            <h3 className="project-title">{"⚙️ Choropleth Map and Tooltip "}</h3>
          </a>
          <p className="grey-text">
            {"View scores from around the world at a glance"}
            <br />
            {"3 Dimensions, 4 Components and 60 indicators for over 160 countries"}
          </p>
          <a href="https://betterfutureforall.netlify.app/" target="_blank" className='project-frame'>
            {worldImg}
          </a>
          <p className="alt-text">
            {"🧰 Tools: React, D3.js, JavaScript, HTML, and CSS"}
          </p>
          <p className="alt-text">
            {"🌸 Inspired by"}
            <a href="https://shirleywu.studio/filmflowers/" target="_blank">
              {` Shirley Wu's Film Flowers`}
            </a>
          </p>
          <p className="alt-text">
            {"🎨 Iconography by"}
            <a href="https://www.chibiyeti.com/" target="_blank">
              {" Wakey Nelson "}
            </a>
          </p>
          <p className="grey-text">
            <a className="git-link" href="https://github.com/BetterFutureForAll/bffa-fe" target="_blank">
              {getImg}{` GitHub `}
            </a>
          </p>
        </div>

        <div className="project">
          <a href="https://bffa-definitions.netlify.app/" title="open in new window" target="_blank">
            <h3 className="project-title">{"📖 Definitions Stamp-Book"}</h3>
          </a>
          <p className="grey-text">
            {"Explore each component's definition and sources"}

          </p>
          <a href="https://bffa-definitions.netlify.app/" target="_blank" className='project-frame'>
            {definitionsImg}
          </a>
          <p className="alt-text">
            {"🧰 Tools: React.js, JavaScript, HTML, and CSS"}
            <br />
            {"🗜 Testing: Jest"}
          </p>
          <p className="alt-text">
            {"🎨 Artwork by"}
            <a href="https://www.gingeryartistry.com/" target="_blank">
              {" Jannah Minnix "}
            </a>
            <br />
            {"📓 Physical stamp book available at "}
            <br />
            <a href="https://bffa.org/" target="_blank">
              {bffaImg}
              {" bffa.org"}
            </a>
          </p>
          <p className="grey-text">
            <a className="git-link" href="https://github.com/BetterFutureForAll/definitions-app" target="_blank">
              {getImg}{` GitHub `}
            </a>
          </p>
        </div>
      </div>
    </>
  )
};
export default BetterFuture;