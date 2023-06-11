import empathetechLogo from '../assets/empathetech.svg'
import empathetechLogoWhite from '../assets/empathetech-white.svg'

interface Props {
  theme: string;
}

const Empathetech: React.FC<Props> = ({ theme }) => (

  <>
    <div className="card animate glow delay-2">
      <h3 className='project-header' title="Empathetech">
        <a href="https://empathetech-org.vercel.app/" target="_blank">
          <img src={theme == "Dark" ? empathetechLogo : empathetechLogoWhite} className={'logo animate glow delay-5'} alt="Empathetech logo" />
        </a>
      </h3>

      <p className="grey-text">
        {"(pronounced “empathetic”)"}
        <br />
        <br />
        <h4>
          {"An empathy-driven community for software engineers in every stage of their career."}
        </h4>
        {" We center our community through the lens of non-traditional and diverse people in tech, and we welcome all folks who believe that good software engineers are good humans."}
      </p>

      <div className="project">
        <h3>{"🤗 Empathetech Community Website "}</h3>
        <p className="grey-text">
          {"An diverse tech community who believe that good software engineers are good humans. "}
        </p>
        <iframe height="650px" width="100%" src="https://empathetech-org.vercel.app/">
          Your browser does not support embedded frames (iFrames)
          <a href="https://empathetech-org.vercel.app/" target="_blank">further</a>
        </iframe>
        <p className="alt-text">
          {"Built using Next.JS, React, TypeScript, JavaScript, HTML, and CSS."}
        </p>
        <p className="alt-text">
          {"Collaboratively designed as an Office Hours Workshop."} 
          <br />
          <ul>
          {"Personal contributions include:"} 
            <li>
              {"Navigation Bar,"}
            </li>
            <li>
              {"Code of Conduct,"}
            </li>
            <li>
              {"Footer"}
            </li>
          </ul>
        </p>
        <p className="grey-text">
          {"GitHub - "}
          <a href="https://github.com/empathetech/" target="_blank">
            {`https://github.com/empathetech/`}
          </a>
        </p>
      </div>
    </div>
  </>
)

export default Empathetech;