import "../styles/hero.css"

export default function Hero() {
  const stats = [
    { number: "40+", label: "Integrations" },
    { number: "600%", label: "Return on investment" },
    { number: "4k+", label: "Global customers" },
  ]

  const featuredLogos = [
    { name: "Dailyhunt", url: "https://www.hubnex.in/logo/9.png" },
    { name: "Times of India", url: "https://www.hubnex.in/logo/10.png" },
    { name: "Hindustan Times", url: "https://www.hubnex.in/logo/11.png" },
  ]

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Unleash the full power of data</h1>
          <p className="hero-description">
            We guide global businesses through the challenges of developing purposeful technology that addresses their
            needs and advances their growth. We have established offices in India, the UAE, and the USA.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="featured-section">
            <p className="featured-title">Featured in</p>
            <div className="featured-logos">
              {featuredLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.url || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  className="featured-logo"
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://www.hubnex.in/world.png"
            alt="Global presence illustration"
            className="globe-illustration"
          />
        </div>
      </div>
    </section>
  )
}

