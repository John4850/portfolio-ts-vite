import githubMark from '../assets/github-mark.svg'
import githubMarkWhite from '../assets/github-mark-white.svg'
import resume from '../assets/resume.png'
import resumeWhite from '../assets/resume-white.png'
import emailLogo from '../assets/gmail-logo.png'
import linkedInLogo from '../assets/LI-In-Bug.png'
import instagramLogo from '../assets/Instagram_Glyph_Gradient_RGB.svg'

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
      <div className='resume wiggle delay-1'>
        <a href="https://drive.google.com/file/d/1erporqoScv8UuoXKucAd5JxeElHaMYNP/view?usp=sharing" target="_blank">
          <img src={theme == "Dark" ? resume : resumeWhite} className={`resume-logo ${isVisible ? 'wiggle delay-1' : ''}`} alt="Resume link" title="Resume" />
        </a>
      </div>
      <div id="" className="contact-info" ref={myRef} >
        <a href="https://github.com/John4850" target="_blank" className="contact-link">
          <img src={theme == "Dark" ? githubMark : githubMarkWhite} className={`contact-logo ${isVisible ? 'wiggle delay-2' : ''}`} alt="GitHub logo" title='GitHub' />
        </a>
        <a href={`mailto:${email}`} target="_blank" className="contact-link">
          <img src={emailLogo} className={`contact-logo ${isVisible ? 'wiggle delay-3' : ''}`} alt="Email" title="Email" />
        </a>
        <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank" className="contact-link">
          <img src={linkedInLogo} className={`contact-logo ${isVisible ? 'wiggle delay-4' : ''}`} alt="LinkedIn link" title='LinkedIn'/>
        </a>
      </div>
      <a href="https://www.instagram.com/johnnelson4850/" target="_blank" className="contact-link" title="Instagram">
        <img src={instagramLogo} className={`contact-logo ${isVisible ? 'wiggle delay-5' : ''}`} alt="Instagram logo" />
      </a>
    </>
  )
};
export default ContactInfo;