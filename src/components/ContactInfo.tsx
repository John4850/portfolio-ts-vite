import githubMark from '../assets/github-mark.png'
import githubMarkWhite from '../assets/github-mark-white.png'
import resume from '../assets/resume.png'
import resumeWhite from '../assets/resume-white.png'
import emailLogo from '../assets/gmail-logo.png'
import linkedInLogo from '../assets/LI-In-Bug.png'

interface Props {
  theme: string;
}

let email: string = 'JohnNelson4850@gmail.com';

const ContactInfo: React.FC<Props> = ({ theme }) => {
  return (
    <>
    <div className='resume animate glow delay-2'>
      <a href="https://drive.google.com/file/d/1erporqoScv8UuoXKucAd5JxeElHaMYNP/view?usp=sharing" target="_blank">
        <img src={theme == "Dark" ? resume : resumeWhite} className="resume-logo" alt="Resume link" />
        Resume
      </a>
    </div>
    <div id="" className="contact-info" >
      <a href="https://github.com/John4850" target="_blank">
        <img src={theme == "Dark" ? githubMark : githubMarkWhite} className="contact-logo animate glow delay-3" alt="GitHub logo" />
      </a>
      <a href={`mailto:${email} subject=""  body="" `} target="_blank">
        <img src={emailLogo} className="contact-logo animate glow delay-4" alt="GitHub link" />
      </a>
      <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank">
        <img src={linkedInLogo} className="contact-logo animate glow delay-5" alt="LinkedIn link" />
      </a>
    </div>

    </>
  )
};
export default ContactInfo;