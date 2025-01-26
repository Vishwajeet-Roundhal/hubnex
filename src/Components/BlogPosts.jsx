import "../styles/blogp.css"

export default function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Bill Walsh leadership lessons",
      excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "https://www.hubnex.in/blog/1.png",
      author: "Alec Whitten",
      date: "17 Jan 2022",
      href: "#",
    },
    {
      id: 2,
      title: "PM mental models",
      excerpt: "Mental models are simple expressions of complex processes or relationships.",
      image: "https://www.hubnex.in/blog/2.png",
      author: "Demi Wilkinson",
      date: "16 Jan 2022",
      href: "#",
    },
    {
      id: 3,
      title: "What is Wireframing?",
      excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "https://www.hubnex.in/blog/3.png",
      author: "Candice Wu",
      date: "15 Jan 2022",
      href: "#",
    },
  ]

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog posts for the community</h2>
          <p className="blog-description">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-meta">
                <span>{post.author}</span>
                <span className="meta-separator" />
                <span>{post.date}</span>
              </div>
              <h3 className="blog-card-title">
                {post.title}
                +
              </h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

