import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About Hubnex Labs</h3>
            <p>
              We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our
              client-centric approach enables us to design tailored solutions that keep businesses ahead in the
              ever-evolving digital landscape.
            </p>
          </div>

          <nav className="footer-nav">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">For Partners</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">Grievance Redressal Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Insights</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-link" aria-label="YouTube">
              y
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              t
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              f
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              i
            </a>
          </div>

          <div className="copyright">© 2025, All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

