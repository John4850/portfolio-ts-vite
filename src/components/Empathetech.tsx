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
        <h3 className='project-header' title="Empathetech">
          <a href="https://empathetech-org.vercel.app/" target="_blank">
            <img src={theme == "Dark" ? empathetechLogo : empathetechLogoWhite} className={'logo animate svg glow delay-5'} alt="Empathetech logo" />
          </a>
        </h3>
        {"(pronounced “empathetic”)"}

        <div className="project">
          <p className="grey-text">
            <h4>
              {"An empathy-driven community for software engineers in every stage of their career."}
            </h4>
            {" We center our community through the lens of non-traditional and diverse people in tech,"}
            <br />
            {"and we welcome all folks who believe that good software engineers are good humans."}
            <h4>{"Why Empathy?"}</h4>
            <p className="alt-text">
              <ul>
                <li>
                  {"🤗 Empathy is central to our success as software engineers."}
                </li>
                <li>
                  {"👨‍🔧 As a service-based industry, we identify and address client needs—both spoken and unspoken—through our use of technology."}
                </li>
                <li>
                  {"💡 As a community, we share our technical knowledge openly and collaborate with peers freely"}
                </li>
                <li>
                  {"🫱🏼‍🫲🏾 It is our authentic relationships with people that drive what we develop as software, and how we develop as professionals."}
                </li>
                <li>
                  {"🧗‍♂️ Empathy is both our inspiration and our foundation."}
                </li>
              </ul>
            </p>
          </p>
          <a href="https://empathetech-org.vercel.app/" target="_blank">
            <h3>{"( )=> { clickMe }"}</h3>
          </a>
          <p className="alt-text">
            {"Built using Next.JS, React, TypeScript, JavaScript, HTML, and CSS."}
          </p>
          <p className="alt-text">
            {"Collaboratively designed in an Office Hours Workshop."}
            <br />
            <h5>
              {"Personal contributions:"}
            </h5>
            <ul>
              <li>
                {"👨🏻‍🏫 Biweekly Office Hours, practicing skills and demonstrating technologies like D3.js and TypeScript"}
              </li>
              <li>
                {"🔧 Contract with the Black Business Association of Oregon as a technical subject matter expert, providing assistance and support in tech-driven community projects."}
              </li>
              <li>
                {"🤖 Collaborate on the Empathetech website using Next.js and React. Built the navigation bar, footer, and code of conduct."}
              </li>
            </ul>
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