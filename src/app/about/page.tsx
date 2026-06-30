import Link from "next/link";
import Footer from "@/components/Footer";

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
            <Link href="/quote" className="header-cta-btn">
              Get Quote
            </Link>
            <Link href="https://wa.me/971581627744" target="_blank" className="header-cta-btn whatsapp-btn">
              <span className="btn-text">WhatsApp</span>
              <span className="btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.019-5.114-2.877-6.973-1.858-1.859-4.331-2.88-6.969-2.881-5.437 0-9.86 4.42-9.864 9.864-.001 1.73.457 3.419 1.32 4.933l-.994 3.635 3.72-.975zM17.18 14.53c-.305-.153-1.802-.889-2.083-.99-.28-.102-.485-.153-.688.153-.203.305-.785.99-.962 1.192-.177.203-.355.228-.66.076-.305-.153-1.287-.474-2.451-1.511-.906-.807-1.517-1.805-1.695-2.11-.178-.305-.019-.47.133-.621.137-.136.305-.356.457-.534.153-.178.203-.305.305-.51.102-.203.05-.381-.025-.533-.076-.153-.688-1.658-.942-2.27-.247-.597-.5-.516-.688-.526-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.813.381-.28.305-1.066 1.042-1.066 2.541 0 1.498 1.092 2.946 1.244 3.149.153.203 2.15 3.284 5.207 4.605.727.314 1.294.502 1.737.643.73.232 1.393.2 1.917.12.584-.087 1.802-.736 2.056-1.447.254-.71.254-1.32.178-1.447-.076-.127-.28-.203-.585-.356z"/>
                </svg>
              </span>
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
      <Footer />
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
