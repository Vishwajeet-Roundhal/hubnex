
import { useState } from "react"
import "../styles/testimonials.css"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      primaryQuote:
        "People now recognise that having a good performance conversation means that something happens as a result.",
      secondaryQuote:
        "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
      author: "Rajat Shina",
      title: "Product Manager, Sisyphus",
    },
    // Add more testimonials as needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Driving results for leaders across the globe</h2>

        <div className="testimonial-slider">
          <button className="slider-button prev-button" onClick={prevSlide} aria-label="Previous testimonial">
          <img src="https://www.hubnex.in/arrow/Arrow%20down-circle.png" alt="Previous" />

          </button>

          <div className="slide">
            <p className="primary-quote">{testimonials[currentSlide].primaryQuote}</p>
            <p className="secondary-quote">{testimonials[currentSlide].secondaryQuote}</p>
            <div className="author-info">
              <span className="author-name">{testimonials[currentSlide].author}</span>
              <span className="author-title">{testimonials[currentSlide].title}</span>
            </div>
          </div>

          <button className="slider-button next-button" onClick={nextSlide} aria-label="Next testimonial">
          <img src="https://www.hubnex.in/arrow/Icon.png" alt="Previous" />

          </button>
        </div>

        <div className="pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

