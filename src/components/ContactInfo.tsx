import githubMark from '../assets/github-mark-white.png'
import emailLogo from '../assets/gmail-logo.png'
import linkedInLogo from '../assets/LI-In-Bug.png'

let email = 'JohnNelson4850@gmail.com';

 const ContactInfo: React.FC = () => (

  <div id="" className="contact-info" >
    <a href="https://github.com/John4850" target="_blank">
      <img src={githubMark} className="contact-logo" alt="GitHub logo" />
  </a>
  <a href={`mailto:${email} subject=""  body="" `} target="_blank">
    <img src={emailLogo} className="contact-logo" alt="GitHub logo" />
    </a>
    <a href="https://www.linkedin.com/in/johnnelson4850/" target="_blank">
      <img src={linkedInLogo} className="contact-logo" alt="LinkedIn logo" />
     </a>
    </div>
 );
 export default ContactInfo;