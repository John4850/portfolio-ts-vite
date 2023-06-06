interface Props {
  theme: string;
}

const AboutMe: React.FC<Props> = ({ theme }) => {

  const DESCRIPTION_TEXT =
    <ul className="about-me-list" >
      <li>{"🎓 Completed a professional software development bootcamp at Alchemy Code Lab in 2019"}</li>
      <li>{"🧑🏼‍💻 Worked as the lead software engineer at"}{<a href="https://bffa.org/" target="_blank">{" BFFA.org"}</a>}{" creating intuitive user interfaces"}</li>
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
        <h2>{"About Me"}</h2>
        {DESCRIPTION_TEXT}
      </div>
    </>
  )
}

export default AboutMe