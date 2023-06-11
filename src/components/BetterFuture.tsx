import bffaIcon from '../assets/bffa-icon.png'
import githubMark from '../assets/github-mark.png'
import githubMarkWhite from '../assets/github-mark-white.png'

interface Props {
  theme: string;
}

const BetterFuture: React.FC<Props> = ({ theme }) => {

  let getImg = <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`git-link`} alt="GitHub logo" />

  return (
    <>
      <div className="card animate glow delay-2">

        <h3 className='project-header' title="bffa.org">
          <a href="https://bffa.org/" target="_blank">
            <img src={bffaIcon} alt='better future for all icon' className='bffa-icon'/>
            {" Better Future For All "}
          </a>
        </h3>

        <p className="grey-text">
          {"Intuitive tools for exploring the"}
          <a href="http://www.socialprogress.org/framework" target="_blank">{" SPI framework "}</a>
          {"from the"}
          <a href="http://socialprogress.org/" target="_blank">{" Social Progress Imperative "}</a>
        </p>

        <div className="project">
          <a href="https://betterfutureforall.netlify.app/" title="open in new window" target="_blank">
            <h3>{"⚙️ Choropleth Map and Tooltip "}</h3>
          </a>
          <p className="grey-text">
            {"View scores from around the world at a glance"}
          </p>
          <iframe height="650px" width="100%" src="https://betterfutureforall.netlify.app/">
            Your browser does not support embedded frames (iFrames)
            <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
          </iframe>
          <p className="alt-text">
            {"Built using React, D3, JavaScript, HTML, and CSS. Deployed using GitHub and Netlify"}
          </p>
          <p className="grey-text">
            {"Inspired by"}
            <a href="https://shirleywu.studio/filmflowers/" target="_blank">
              {` Shirley Wu's Film Flowers`}
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
            <h3>{"📖 Definitions Stamp-Book"}</h3>
          </a>
          <p className="grey-text">
            {"Stamp-Book for exploring the definitions and their sources, physical version available at "}
            <a href="https://bffa.org/" target="_blank">
              {" BFFA.org"}
            </a>.
          </p>
          <iframe height="650px" width="100%" src="https://bffa-definitions.netlify.app/">
            Your browser does not support embedded frames (iFrames)
            <a href="https://betterfutureforall.netlify.app/" target="_blank">further</a>
          </iframe>
          <p className="alt-text">
            {"Built using React.js, JavaScript, HTML, and CSS. Tested with Jest, Deployed with GitHub and Netlify"}
          </p>
          <p className="grey-text">
            {"🎨 Artwork by"}
            <a href="https://www.gingeryartistry.com/" target="_blank">
              {" Jannah Minnix "}
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