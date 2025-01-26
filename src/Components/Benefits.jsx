import "../styles/Benefits.css"
import { SearchCheck } from "lucide-react";


export default function Benefits() {
  const benefits = [
    {
      title: "On time delivery:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Dedicated Project Manager:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "24×7 round the clock support:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "100% customer satisfaction:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe:",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
  ]

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-heading">Benefits to Join Hubnex Labs</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-content">
                <SearchCheck className="searchCheck" />
                <div className="benefit-text">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

