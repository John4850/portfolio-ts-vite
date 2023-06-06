interface Props {
  theme: string;
}

const AboutMe: React.FC<Props> = ({ theme }) => {

  const DESCRIPTION_TEXT =
    <ul className="about-me-list" >
      <li>{"🧑🏼‍💻 Pivoted to software engineering in 2019 at Alchemy Code Labs"}</li>
      <li>{"⛑ Formerly a FireFighter and Paramedic, and ER Technician"}</li>
      <li>{"🐕‍🦺 Training a rescued husky malamute mix, Zuko"}</li>
      <li>{"🥾 Love hiking the trails around Portland"}</li>
      <li>{"🧠 Nerd out on sci-fi, fantasy, and comics"}</li>
      <li>{"⛷ Love snow sports, especially skijoring"}</li>
      <li>{"⛵️ Love building Lego's and other models"}</li>
      <li>{"🪴 Love houseplants and gardening"}</li>
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