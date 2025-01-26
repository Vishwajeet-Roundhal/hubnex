import "../styles/metrics.css"
import { ArrowRight } from "lucide-react";


export default function Metrics() {
  const certifications = [
    {
      name: "AWS Certified",
      logo: "https://www.hubnex.in/logo/1.png",
    },
    {
      name: "CCNA",
      logo: "https://www.hubnex.in/logo/2.png",
    },
    {
      name: "ISO9001 Certified",
      logo: "https://www.hubnex.in/logo/3.png",
    },
  ]

  const metrics = [
    {
      number: "6+",
      title: "Years of experience",
      description: "We've helped over 4,000 amazing global companies.",
    },
    {
      number: "4.8/5",
      title: "Success rate",
      description: "We've helped over 4,000 amazing global companies.",
    },
    {
      number: "30M+",
      title: "Global users",
      description: "We've helped over 4,000 amazing global companies.",
    },
    {
      number: "60+",
      title: "Projects completed",
      description: "We've helped over 4,000 amazing global companies.",
    },
  ]

  return (
    <section className="metrics-section">
      <div className="metrics-container">
        <div className="certifications">
          {certifications.map((cert, index) => (
            <img key={index} src={cert.logo || "/placeholder.svg"} alt={cert.name} className="certification-logo" />
          ))}
        </div>

        <h1 className="main-heading">Start building high performing website & grow your business fast.</h1>

        <div className="social-proof">
          <div className="companies-joined">
            <div className="avatar-group">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src="/placeholder.svg" alt={`Company ${i}`} />
              ))}
            </div>
            <span>
              456+ Companies
              <br />
              joined to make their business success!
            </span>
          </div>

          <div className="rating">
            <div className="stars">{"★".repeat(5)}</div>
            4.5 (from 200+ reviews)
          </div>
        </div>

        <a href="#" className="cta-button">
          Connect Sales <ArrowRight  size={16} color="white" />
        </a>

        <h2 className="secondary-heading">We are big enough to deliver and small enough to care</h2>
        <p className="secondary-description">Teams large and small rely on Hubnex Labs</p>

        <a href="#" className="cta-button outline">
          Connect Sales <ArrowRight  size={16} color="black" />
        </a>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-number">{metric.number}</div>
              <h3 className="metric-title">{metric.title}</h3>
              <p className="metric-description">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

