import bffaIcon from '../assets/bffa-icon.png'
import johnAndZuko from '../assets/john-and-zuko.jpg'

interface Props {
  theme: string;
}

const AboutMe: React.FC<Props> = ({ theme }) => {
  const bffaImg = <img src={bffaIcon} alt='better future for all icon' className='bffa-icon'/>

  const DESCRIPTION_TEXT =
    <ul className="about-me-list" >
      <li>{bffaImg}{" Worked as the lead software engineer at"}{<a href="https://bffa.org/" target="_blank">{" BFFA.org"}</a>}{" creating intuitive user interfaces"}</li>
      <li>{"🎓 Trained professionally in software development Alchemy Code Lab in 2019"}</li>
      <li>{"⛑ Former FireFighter, EMT-Paramedic, and Emergency Room Technician"}</li>
      <li>{"🐕‍🦺 Training a rescued husky malamute mix named Zuko for therapy"}</li>
      <li>{"🥾 Can be found hiking the trails around Portland with dogs"}</li>
      <li>{"⛷ Active with snow sports, especially skijoring"}</li>
      <li>{"🧠 Nerd for sci-fi, fantasy, and comic books"}</li>
      <li>{"⛵️ Enjoy building Lego's and models"}</li>
      <li>{"🪴 Caretaker of many houseplants"}</li>
      <li>{"🌱 Currently learning "}{<a href="https://nextjs.org/" target="_blank">NextJS</a>}</li>
    </ul>

  return (
    <>
      <div className='about-me card animate glow delay-2'>
        <h3 className='alt-text'>{"About Me"}</h3>
        <img src={johnAndZuko} className="about-image" alt="John sitting on the ground with his dog laying across his lap" />
        {DESCRIPTION_TEXT}
      </div>
    </>
  )
}

export default AboutMe