import githubMark from '../assets/github-mark.png'
import githubMarkWhite from '../assets/github-mark-white.png'
import resume from '../assets/resume.png'
import resumeWhite from '../assets/resume-white.png'
import emailLogo from '../assets/gmail-logo.png'
import linkedInLogo from '../assets/LI-In-Bug.png'
import instagramLogo from '../assets/Instagram_Glyph_Gradient.png'

interface Props {
  theme: string;
  isVisible: boolean,
  myRef: React.RefObject<any>
}

let email: string = 'JohnNelson4850@gmail.com';

const ContactInfo: React.FC<Props> = ({ theme, isVisible, myRef }) => {
  return (
    <>
      <p className="alt-text">
        {"Want to know more? Let's connect!"}
      </p>
      <div className='resume animate glow delay-2'>
        <a href="https://drive.google.com/file/d/1erporqoScv8UuoXKucAd5JxeElHaMYNP/view?usp=sharing" target="_blank">
          <img src={theme == "Dark" ? resume : resumeWhite} className={`resume-logo ${isVisible ? 'animate glow delay-1' : ''}`} alt="Resume link" />
        </a>
      </div>
      <div id="" className="contact-info" ref={myRef} >
        <a href="https://github.com/John4850" target="_blank" className="contact-link">
          <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`contact-logo ${isVisible ? 'animate glow delay-2' : ''}`} alt="GitHub logo" />
        </a>
        <a href={`mailto:${email}`} target="_blank" className="contact-link">
          <img src={emailLogo} className={`contact-logo ${isVisible ? 'animate glow delay-3' : ''}`} alt="GitHub link" />
        </a>
        <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank" className="contact-link">
          <img src={linkedInLogo} className={`contact-logo ${isVisible ? 'animate glow delay-4' : ''}`} alt="LinkedIn link" />
        </a>
      </div>
      <a href="https://www.instagram.com/johnnelson4850/" target="_blank">
        <img src={instagramLogo} className={`logo ${isVisible ? 'animate glow delay-5' : ''}`} alt="Instagram logo" />
      </a>
    </>
  )
};
export default ContactInfo;