import empathetechLogo from '../assets/empathetech.svg'
import empathetechLogoWhite from '../assets/empathetech-white.svg'
import githubMark from '../assets/github-mark.svg'
import githubMarkWhite from '../assets/github-mark-white.svg'

interface Props {
  theme: string;
}

const Empathetech: React.FC<Props> = ({ theme }) => {

  let getImg = <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`git-link`} alt="GitHub logo" />

  return (
    <>
      <div className="card animate glow delay-2">
        <h2 className="project-title">
          {"🤗 empathetech.org"}
        </h2>
        <a href="https://empathetech.org" target="_blank">
          <h3 className='project-header' title="Empathetech">
            <img
              src={theme == "Dark" ? empathetechLogo : empathetechLogoWhite}
              className={'logo animate svg glow delay-5'}
              alt="Empathetech logo"
              loading='lazy'
            />
          </h3>
          <span >
            {"(pronounced “empathetic”)"}
          </span>
          <h4 className='empathetech-tag-line'>
            {"A hug-o-tron community. Beep beep boop boop."}
          </h4>
        </a>
        <div className="project">
          <div className="alt-text">
            <p className="grey-text">
              {"Personal contributions: "}
            </p>
            <ul className="project-list">
              <li>
                {"🤖 Created navigation bar, footer, and code of conduct components for the "}
                <a href="https://empathetech.org" target="_blank" >{"website"}</a>
              </li>
              <li>
                {"👨🏻‍🏫 Biweekly Office Hours: Led demonstrations on using D3.js with React"}
              </li>
              <li>
                {getImg}
                {" Collaborated using GitHub for issues, code reviews, and pull requests"}
              </li>
              <li>
                {"🔧 Technical expert with "}
                <a href="https://bbaoregon.org/" target="_blank">{"Black Business Association of Oregon"}</a>
              </li>
            </ul>
          </div>
          <p className="alt-text">
            {"🧰 Next.JS, React, TypeScript, JavaScript, HTML, and CSS."}
          </p>
          <p className="grey-text">
            <a className="git-link" href="https://github.com/empathetech/" target="_blank">
              {getImg}{` GitHub `}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
export default Empathetech;