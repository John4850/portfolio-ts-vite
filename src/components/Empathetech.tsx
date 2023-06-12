import empathetechLogo from '../assets/empathetech.svg'
import empathetechLogoWhite from '../assets/empathetech-white.svg'
import githubMark from '../assets/github-mark.png'
import githubMarkWhite from '../assets/github-mark-white.png'

interface Props {
  theme: string;
}

const Empathetech: React.FC<Props> = ({ theme }) => {

  let getImg = <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`git-link`} alt="GitHub logo" />

  return (
    <>
      <div className="card animate glow delay-2">
        <a href="https://empathetech.org" target="_blank">
          <h3 className='project-header' title="Empathetech">
            <img src={theme == "Dark" ? empathetechLogo : empathetechLogoWhite} className={'logo animate svg glow delay-5'} alt="Empathetech logo" />
          </h3>
        </a>
        <h5 >
          {"(pronounced “empathetic”)"}
        </h5>
        <h4 className='alt-text'>
          {"A hug-o-tron community. Beep beep boop boop."}
        </h4>
        <div className="project">
          <p className="alt-text">
            <h5 className="grey-text">
              {"Personal contributions: "}
            </h5>
            <ul>
              <li>
                {"🤖 Created navigation bar, footer, and code of conduct components for the website."}
              </li>
              <li>
                {"👨🏻‍🏫 Biweekly Office Hours: Demonstrating lessons learned with D3.js and React"}
              </li>
              <li>
                {getImg}
                {" Collaborated on issues/code reviews/pull requests using GitHub"}
              </li>
              <li>
                {"🔧 Technical expert with "}
                <a href="https://bbaoregon.org/" target="_blank">{"Black Business Association of Oregon"}</a>
              </li>
            </ul>
          </p>
          <p className="grey-text">
            <a className="git-link" href="https://github.com/empathetech/" target="_blank">
              {getImg}{` GitHub `}
            </a>
          </p>
          <p className="alt-text">
            {"🧰 Next.JS, React, TypeScript, JavaScript, HTML, and CSS."}
          </p>
        </div>
      </div>
    </>
  )
}
export default Empathetech;