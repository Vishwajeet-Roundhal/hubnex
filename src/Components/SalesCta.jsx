import "../styles/salescta.css"
import { ArrowRight } from "lucide-react";


export default function SalesCta() {
  return (
    <section className="sales-cta">
      <div className="cta-container">
        <div className="cta-image-wrapper">
          <img
            src="https://www.hubnex.in/blue.png"
            alt="Business professionals collaborating"
            className="cta-image"
          />
        </div>

        <div className="cta-content">
          <h2 className="cta-heading">Increase your sales revenue by 32% using Hubnex Labs.</h2>

          <p className="cta-description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis
            ipsum, facilisi odio pellentesque bibendum viverra tempus."
          </p>

          <div className="social-proof">
            <div className="avatar-group">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src="/placeholder.svg" alt="" className="avatar" />
              ))}
            </div>
            <div className="companies-text">
              <strong>456+ Companies</strong>
              <br />
              joined to make their business success!
            </div>
          </div>

          <div className="cta-buttons">
            <a href="#" className="cta-button primary-button">
              Join Us <ArrowRight  size={16} color="blue" />
            </a>
            <a href="#" className="cta-button secondary-button">
              Contact Us <ArrowRight  size={16} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

