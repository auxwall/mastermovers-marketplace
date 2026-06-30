import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-chevron">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L13 12L6 6M13 18L20 12L13 6" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="logo-text-footer">SMU</span>
          </div>
          <p className="footer-desc">
            Dubai's premium relocation and storage service provider. Fast response, secure handling, and transparent pricing.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col links-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/quote">Get Quote</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact details & Location */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon" style={{ marginTop: "3px" }}>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.242 1.242 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Link href="https://wa.me/971581627744" target="_blank" className="contact-link">
                  +971 58 162 7744 (WhatsApp)
                </Link>
                <a href="tel:+97148350287" className="contact-link">
                  +971 4 835 0287 (Landline)
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon" style={{ marginTop: "3px" }}>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <a href="mailto:info@mastermovers.ae" className="contact-link">info@mastermovers.ae</a>
                <a href="mailto:sales@mastermovers.ae" className="contact-link">sales@mastermovers.ae</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1 1 19.5 10.5Z" />
                </svg>
              </span>
              <span className="contact-text">
                Dubai Investment Park 1, Dubai, UAE
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} SMU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
