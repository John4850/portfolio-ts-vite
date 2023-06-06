interface Props {
  theme: string;
}

const AboutMe: React.FC<Props> = ({ theme }) => {

  const DESCRIPTION_TEXT =
    <ul className="about-me-list" >
      <li>{"🎓 Studied software engineering in 2019 at Alchemy Code Labs"}</li>
      <li>{"🧑🏼‍💻  Worked as the independent software developer at "}{<a href="https://bffa.org/" target="_blank">BFFA.org</a>}</li>
      <li>{"⛑ Formerly a FireFighter, Paramedic, and ER Technician"}</li>
      <li>{"🐕‍🦺 Training a rescued husky malamute mix named Zuko"}</li>
      <li>{"🥾 Love hiking the trails around Portland with dogs"}</li>
      <li>{"🧠 Nerd out on sci-fi, fantasy, and comic books"}</li>
      <li>{"⛷ Love snow sports, especially skijoring"}</li>
      <li>{"⛵️ Love building Lego's and models"}</li>
      <li>{"🪴 Caretaker of many houseplants"}</li>
      <li>{"🌱 Currently learning "}{<a href="https://nextjs.org/" target="_blank">NextJS</a>}</li>
    </ul>

  return (
    <>
    <div>
    <h2 className='about-me animate glow delay-2'>{"About Me"}</h2>
    {DESCRIPTION_TEXT}
    </div>
    </>
  )
}

export default AboutMe