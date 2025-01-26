import "../styles/Parteneres.css"

export default function Partners() {
  const partners = [
    {
      name: "Dealers Matrix",
      logo: "https://www.hubnex.in/logo/4.png",
      url: "#",
    },
    {
      name: "JSW ONE",
      logo: "https://www.hubnex.in/logo/5.png",
      url: "#",
    },
    {
      name: "AUXO Ai",
      logo: "https://www.hubnex.in/logo/6.png",
      url: "#",
    },
    {
      name: "Lifesight",
      logo: "https://www.hubnex.in/logo/7.png",
      url: "#",
    },
    {
      name: "AXIS BANK",
      logo: "https://www.hubnex.in/logo/8.png",
      url: "#",
    },
  ]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-heading">Join 4,000+ companies already growing</h2>
        <div className="partners-logo-grid">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              className="partner-logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="partner-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

