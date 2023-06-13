 const Footer: React.FC = () => {
  const GITHUB_LINK = <a href="https://github.com/John4850/portfolio-ts-vite" target="_blank">Portfolio</a>
  const NETLIFY_LINK = <a href="https://www.netlify.com/" target="_blank">Netlify</a>

  return (
    <p className="footer">
      {"© 2023 | This "}
      {GITHUB_LINK}
      {" is built using TypeScript, React, and assembled with Vite. Hosted using "}
      {NETLIFY_LINK}
    </p>
  )
}

export default Footer