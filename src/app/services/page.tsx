import Link from "next/link";
import Footer from "@/components/Footer";

export default function Services() {
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
            <Link href="/about" className="nav-link">
              About
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
        {/* Top Banner */}
        <section className="services-hero" style={{
          backgroundColor: "var(--light-bg)",
          padding: "60px 0 40px 0",
          borderBottom: "1px solid rgba(0, 112, 139, 0.1)",
          textAlign: "center"
        }}>
          <div className="container">
            <h1 className="hero-title" style={{ fontSize: "2.8rem", margin: "0 auto 15px auto", color: "var(--dark-teal)" }}>
              Our <span className="highlight" style={{ color: "var(--primary-teal)" }}>Services</span>
            </h1>
            <p className="hero-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
              Explore our full range of moving, storage, and relocation services in Dubai, UAE.
            </p>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px"
            }}>
              {/* Service 1 */}
              <div className="service-detail-card" style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  background: "var(--light-bg)",
                  color: "var(--primary-teal)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-3-1m-7.5-3.409 3-1.091M6.75 7.364V21m0 0h12m0 0v-7.5m-12 0h12"></path>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.4rem", marginBottom: "12px" }}>
                  Self Storage
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                  Highly secure, climate-controlled storage units monitored 24/7 to protect your valuables from Dubai's dust and humidity. Perfect for personal items, furniture, and inventory.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Climate controlled & clean units
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Sizes from 25 sq.ft to 2000 sq.ft
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Flexible monthly & yearly plans
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="service-detail-card" style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  background: "var(--light-bg)",
                  color: "var(--primary-teal)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177V18.75m0-11.177L12 3.75M12 3.75H3.375A1.125 1.125 0 0 0 2.25 4.875v9.375m10.125-10.5h1.5"></path>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.4rem", marginBottom: "12px" }}>
                  Domestic Moving
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                  Complete home, villa, or apartment relocation services. We handle everything from safe wrapping and packing to transport, dismantling, and perfect setup at your new residence.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Professional packing materials & boxes
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Furniture dismantling & reassembling
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Experienced and trained loaders
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="service-detail-card" style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  background: "var(--light-bg)",
                  color: "var(--primary-teal)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"></path>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.4rem", marginBottom: "12px" }}>
                  International Relocations
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                  Stress-free global relocation solutions. We offer sea, air, and road shipping services combined with complete documentation and customs clearance handling.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Direct door-to-door worldwide delivery
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Customs clearance & paperwork assistance
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Multi-modal transit and tracking
                  </li>
                </ul>
              </div>

              {/* Service 4 - New Service */}
              <div className="service-detail-card" style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{
                  background: "var(--light-bg)",
                  color: "var(--primary-teal)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}>
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 16.5h1.5m3 0H15"></path>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-title)", color: "var(--dark-teal)", fontSize: "1.4rem", marginBottom: "12px" }}>
                  Office & Commercial Move
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "20px" }}>
                  Minimize downtime and keep your operations smooth. We provide dedicated planners to handle sensitive server systems, IT setup, office furniture, and specialized equipment relocation.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Structured project management
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Secure handling of IT infrastructure
                  </li>
                  <li style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "0.95rem", color: "#374151" }}>
                    <span style={{ color: "var(--primary-teal)" }}>✓</span> Flexible after-hours & weekend schedules
                  </li>
                </ul>
              </div>
            </div>

            {/* Instant CTA inside card */}
            <div style={{ marginTop: "50px", textAlign: "center" }}>
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
