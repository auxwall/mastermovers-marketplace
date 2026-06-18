import Link from "next/link";

export default function About() {
  return (
    <>
      <header className="site-header">
        <div className="container header-flex">
          <Link href="/" className="logo-link">
            <div className="logo-container">
              <span className="logo-chevron">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L13 12L6 6M13 18L20 12L13 6" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="logo-text">
                <span className="logo-main">SMU</span>
              </div>
            </div>
          </Link>
          <div className="header-navigation-wrapper">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="https://wa.me/971581627744" target="_blank" className="header-cta-btn">
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Simple Top Banner for About Page */}
        <section className="about-hero" style={{
          backgroundColor: "var(--light-bg)",
          padding: "60px 0 40px 0",
          borderBottom: "1px solid rgba(0, 112, 139, 0.1)",
          textAlign: "center"
        }}>
          <div className="container">
            <h1 className="hero-title" style={{ fontSize: "2.8rem", margin: "0 auto 15px auto", color: "var(--dark-teal)" }}>
              About <span className="highlight" style={{ color: "var(--primary-teal)" }}>Us</span>
            </h1>
            <p className="hero-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
              Learn more about SMU and our commitment to seamless relocation.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="about-content" style={{ padding: "60px 0" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="about-card" style={{
              background: "white",
              padding: "40px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              border: "1px solid #e5e7eb"
            }}>
              <h2 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.8rem", marginBottom: "20px" }}>
                Who We Are
              </h2>
              <p style={{ color: "#374151", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "20px" }}>
                SMU is Dubai's leading destination for securing quick, reliable, and premium moving and storage services. We specialize in connecting residents and businesses across the UAE with vetted, professional relocation experts who understand the nuances of hassle-free transitions.
              </p>
              
              <h2 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.8rem", marginBottom: "20px", marginTop: "40px" }}>
                Our Mission
              </h2>
              <p style={{ color: "#374151", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "20px" }}>
                Moving to a new home or office can be challenging. Our mission is to simplify the entire process. By offering an instant connection via WhatsApp, we make it effortless to request a quote, schedule your service, and secure climate-controlled storage solutions tailored to your unique requirements.
              </p>

              <h2 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.8rem", marginBottom: "25px", marginTop: "40px" }}>
                Why Choose SMU?
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ background: "var(--light-bg)", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ fontFamily: "var(--font-title)", color: "var(--primary-teal)", marginBottom: "8px", fontSize: "1.15rem" }}>
                    Fast Response
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: "1.5" }}>
                    No long forms or waiting. Get connected straight to our WhatsApp chat team for a direct response.
                  </p>
                </div>
                <div style={{ background: "var(--light-bg)", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ fontFamily: "var(--font-title)", color: "var(--primary-teal)", marginBottom: "8px", fontSize: "1.15rem" }}>
                    Expert Quality
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: "1.5" }}>
                    Our moving teams are highly trained professionals using premium packing materials and tools.
                  </p>
                </div>
                <div style={{ background: "var(--light-bg)", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ fontFamily: "var(--font-title)", color: "var(--primary-teal)", marginBottom: "8px", fontSize: "1.15rem" }}>
                    100% Free Quotes
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: "1.5" }}>
                    Get your transparent estimate with absolutely no hidden costs or future obligations.
                  </p>
                </div>
                <div style={{ background: "var(--light-bg)", padding: "20px", borderRadius: "12px" }}>
                  <h3 style={{ fontFamily: "var(--font-title)", color: "var(--primary-teal)", marginBottom: "8px", fontSize: "1.15rem" }}>
                    Climate Controlled Storage
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: "1.5" }}>
                    Highly secure storage units monitored 24/7 to protect your valuables from dust and humidity.
                  </p>
                </div>
              </div>

              {/* Instant CTA inside card */}
              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <Link
                  href="https://wa.me/971581627744"
                  target="_blank"
                  className="cta-button"
                  style={{ display: "inline-flex" }}
                >
                  Chat on WhatsApp Now
                  <span className="cta-button-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SMU. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Mobile CTA Bar */}
      <div className="sticky-mobile-bar">
        <Link
          href="https://wa.me/971581627744"
          target="_blank"
          className="sticky-mobile-btn"
        >
          Get a Free Quote
          <span className="sticky-mobile-icon">
            <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
}
