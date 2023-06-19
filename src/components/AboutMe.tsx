import bffaIcon from '../assets/bffa-icon.svg'
import johnAndZuko from '../assets/john-and-zuko.jpg'
import johnAndZukoSmall from '../assets/john-and-zuko-small.jpg'
import johnAndZukoSmallWebP from '../assets/john-and-zuko-small.webp'
import johnAndZukoWebP from '../assets/john-and-zuko.webp'

interface Props {
  theme: string;
}

const AboutMe: React.FC<Props> = ({ theme }) => {
  const bffaImg = <img src={bffaIcon} alt='better future for all icon' className='bffa-icon' />

  const DESCRIPTION_TEXT =
    <ul className="about-me-list animate glow delay-1" >
      <li className="animate glow delay-1">{bffaImg}{" Worked as the lead software engineer at "}{<a href="https://bffa.org/" target="_blank">{"bffa.org"}</a>}{" creating intuitive user interfaces"}</li>
      <li className="animate glow delay-2">{"🎓 Trained professionally in software development Alchemy Code Lab in 2019"}</li>
      <li className="animate glow delay-3">{"⛑ Former Firefighter, EMT-Paramedic, and Emergency Room Technician"}</li>
      <li className="animate glow delay-4">{"🐕‍🦺 Training a rescued husky malamute mix named Zuko for therapy"}</li>
      <li className="animate glow delay-5">{"🥾 Can be found hiking the trails around Portland with dogs"}</li>
      <li className="animate glow delay-6">{"⛷ Active with snow sports, especially skijoring"}</li>
      <li className="animate glow delay-7">{"🧠 Nerd for sci-fi, fantasy, and comic books"}</li>
      <li className="animate glow delay-8">{"⛵️ Enjoy building Lego's and models"}</li>
      <li className="animate glow delay-9">{"🪴 Caretaker of many houseplants"}</li>
      <li className="animate glow delay-10">{"🌱 Currently learning "}{<a href="https://nextjs.org/" target="_blank">NextJS</a>}</li>
    </ul>

  return (
    <>
      <div className='about-me card'>
        <h2 className='alt-text animate glow delay-2'>{"About Me"}</h2>
        <picture>
          <source srcSet={johnAndZukoWebP} type="image/webp" />
          <source srcSet={johnAndZukoSmallWebP} type="image/webp" media="(max-width: 300px)"/>
          <source srcSet={johnAndZuko} type="image/png" media="(min-width: 601px)" />
          <img src={johnAndZukoSmall} className="image" alt="John sitting on the ground with his dog laying across his lap" />
        </picture>
        {DESCRIPTION_TEXT}
      </div>
    </>
  )
}

export default AboutMe