import Link from "next/link";

export default function Home() {
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
                <span className="logo-sub">SERVICE MARKET</span>
              </div>
            </div>
          </Link>
          <div className="header-navigation-wrapper">
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="https://wa.me/971581627744" target="_blank" className="header-cta-btn">
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile-only Header Banner Image */}
      <div className="mobile-hero-banner">
        <img
          src="/ChatGPT Image Jun 15, 2026, 05_57_57 PM.png"
          alt="Mastermovers UAE Team & Truck"
          className="mobile-banner-img"
        />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-wrapper">
          <div className="hero-mask"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Looking for a Moving & Storage <span className="highlight">Company in Dubai, UAE?</span>
              </h1>
              <p className="hero-subtitle">
                Get a free quote in minutes for your moving, storage or relocation needs.
              </p>

            </div>

            {/* Features Row */}
            <div className="features-container">
              <div className="features-row">
                {/* Feature 1 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Fast<br />Response</span>
                </div>

                <div className="feature-divider"></div>

                {/* Feature 2 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.44 1.44 0 0 0 2.037 0l4.318-4.318a1.44 1.44 0 0 0 0-2.037l-9.58-9.581A2.25 2.25 0 0 0 9.568 3Z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h.008v.008H6V7.5Z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Competitive<br />Pricing</span>
                </div>

                <div className="feature-divider"></div>

                {/* Feature 3 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Professional<br />Movers</span>
                </div>

                <div className="feature-divider"></div>

                {/* Feature 4 */}
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Secure Storage<br />Facilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="services-section">
          <div className="container">
            <div className="services-grid">

              {/* Service Card 1: Self Storage */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-header-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-3-1m-7.5-3.409 3-1.091M6.75 7.364V21m0 0h12m0 0v-7.5m-12 0h12"></path>
                    </svg>
                  </div>
                  <h2 className="service-title">Self Storage</h2>
                </div>
                <div className="service-body">
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Climate Controlled Storage
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Units from 25 sq.ft to 2000 sq.ft
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Secure & Flexible Plans
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Card 2: Domestic Move */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-header-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177V18.75m0-11.177L12 3.75M12 3.75H3.375A1.125 1.125 0 0 0 2.25 4.875v9.375m10.125-10.5h1.5"></path>
                    </svg>
                  </div>
                  <h2 className="service-title">Domestic Move</h2>
                </div>
                <div className="service-body">
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Packing & Unpacking
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Furniture Dismantling & Installation
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Professional Moving Team
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Card 3: International Relocations */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-header-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"></path>
                    </svg>
                  </div>
                  <h2 className="service-title">International Relocations</h2>
                </div>
                <div className="service-body">
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Door-to-Door Service
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Customs Assistance
                    </li>
                    <li className="service-item">
                      <span className="checkmark-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                        </svg>
                      </span>
                      Worldwide Destinations
                    </li>
                  </ul>
                </div>
              </div>

            </div>

             {/* CTA Button Section */}
            <div className="cta-container">
              <Link
                href="https://wa.me/971581627744"
                target="_blank"
                className="cta-button"
              >
                Get a Free Quote Quickly
                <span className="cta-button-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </span>
              </Link>

              <div className="cta-subtext">
                <span>
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"></path>
                  </svg>
                  100% Free
                </span>
                <span className="cta-divider">|</span>
                <span>
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
                  </svg>
                  No Obligation
                </span>
                <span className="cta-divider">|</span>
                <span>
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                  Takes less than 2 minutes
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Service Market UAE (SMU). All rights reserved.</p>
          <div className="footer-links">
            <Link href="/about">About Us</Link>
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
