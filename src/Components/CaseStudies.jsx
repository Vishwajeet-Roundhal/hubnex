
import "../styles/caseS.css"

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "What is Ad Exposure and Why It Matters?",
      excerpt: "Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "https://www.hubnex.in/Article-Image/1.png",
      link: "#",
    },
    {
      id: 2,
      title: "What is Ad Exposure and Why It Matters?",
      excerpt: "Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "https://www.hubnex.in/Article-Image/1.png",
      link: "#",
    },
    {
      id: 3,
      title: "What is Ad Exposure and Why It Matters?",
      excerpt: "Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      image: "https://www.hubnex.in/Article-Image/1.png",
      link: "#",
    },
  ]

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className="case-studies-title">Case studies for the community</h2>
          <p className="case-studies-description">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsu
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article key={study.id} className="case-study-card">
              <img src={study.image || "/placeholder.svg"} alt={study.title} className="case-study-image" />
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-excerpt">{study.excerpt}</p>
                <a href={study.link} className="read-more-link">
                  Read Full Article 
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

