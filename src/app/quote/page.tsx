"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Quote() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [domesticOptions, setDomesticOptions] = useState({villa: false,apartment: false,office: false,});
  const [bhkOptions, setBhkOptions] = useState({bhk1: false,bhk2: false,bhk3: false,bhk4: false,bhk5: false,bhk6: false,});
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  // Form Validation & Status
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState({ name: "", email: "", mobile: "", serviceType: "", movingType: "", villaSize: "", origin: "", destination: "" });

  const handleDomesticCheckboxChange = (option: "villa" | "apartment" | "office") => {
    setDomesticOptions((prev) => {
      const isCurrentlyChecked = prev[option];
      const updated = {
        villa: option === "villa" ? !isCurrentlyChecked : false,
        apartment: option === "apartment" ? !isCurrentlyChecked : false,
        office: option === "office" ? !isCurrentlyChecked : false,
      };
      
      // Reset BHK selections when changing property type
      setBhkOptions({ bhk1: false, bhk2: false, bhk3: false, bhk4: false, bhk5: false, bhk6: false });
      return updated;
    });
  };

  const handleBhkCheckboxChange = (option: "bhk1" | "bhk2" | "bhk3" | "bhk4" | "bhk5" | "bhk6") => {
    setBhkOptions((prev) => {
      const isCurrentlyChecked = prev[option];
      return {
        bhk1: option === "bhk1" ? !isCurrentlyChecked : false,
        bhk2: option === "bhk2" ? !isCurrentlyChecked : false,
        bhk3: option === "bhk3" ? !isCurrentlyChecked : false,
        bhk4: option === "bhk4" ? !isCurrentlyChecked : false,
        bhk5: option === "bhk5" ? !isCurrentlyChecked : false,
        bhk6: option === "bhk6" ? !isCurrentlyChecked : false,
      };
    });
    // Clear validation error when a size is selected
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated.bhkOptions;
      return updated;
    });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setServiceType(val);
    if (errors.serviceType) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.serviceType;
        return updated;
      });
    }
    // Reset child states if not Domestic Move
    if (val !== "Domestic Move") {
      setDomesticOptions({ villa: false, apartment: false, office: false });
      setBhkOptions({ bhk1: false, bhk2: false, bhk3: false, bhk4: false, bhk5: false, bhk6: false });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (serviceType === "Domestic Move" && (domesticOptions.villa || domesticOptions.apartment)) {
      const hasSelectedBhk = Object.values(bhkOptions).some((checked) => checked);
      if (!hasSelectedBhk) {
        newErrors.bhkOptions = domesticOptions.villa ? "Please select a villa size" : "Please select an apartment size";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    const selectedMovingTypes = Object.entries(domesticOptions)
      .filter(([_, checked]) => checked)
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
      .join(", ") || "N/A";

    const selectedBhkSizes = Object.entries(bhkOptions)
      .filter(([_, checked]) => checked)
      .map(([key]) => {
        if (domesticOptions.apartment) {
          if (key === "bhk1") return "1 BHK";
          if (key === "bhk2") return "2 BHK";
          if (key === "bhk3") return "3 BHK";
          if (key === "bhk4") return "4 BHK";
          if (key === "bhk5") return "5 BHK";
          if (key === "bhk6") return "6 BHK";
        } else if (domesticOptions.villa) {
          if (key === "bhk1") return "1 Bedroom";
          if (key === "bhk2") return "2 Bedrooms";
          if (key === "bhk3") return "3 Bedrooms";
          if (key === "bhk4") return "4 Bedrooms";
        }
        return "";
      })
      .filter(Boolean)
      .join(", ") || "N/A";

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ firstName, secondName, email, mobile, serviceType, movingType: selectedMovingTypes, villaSize: selectedBhkSizes, origin, destination, message, }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmittedDetails({ name: `${firstName} ${secondName || ""}`.trim(), email, mobile, serviceType, movingType: selectedMovingTypes, villaSize: selectedBhkSizes, origin, destination });
        setIsSubmitted(true);

        // Clear all form inputs
        setFirstName("");
        setSecondName("");
        setMobile("");
        setEmail("");
        setServiceType("");
        setDomesticOptions({ villa: false, apartment: false, office: false });
        setBhkOptions({ bhk1: false, bhk2: false, bhk3: false, bhk4: false, bhk5: false, bhk6: false });
        setOrigin("");
        setDestination("");
        setMessage("");
      } else {
        alert("Failed to submit request: " + (result.message || "Please try again."));
      }
    } catch (error) {
      console.error("Quote submission error:", error);
      alert("An error occurred while sending your request. Please check your internet connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

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
            <Link href="/services" className="nav-link">
              Services
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
        <div className="quote-container">
          <div className="quote-card">
            {isSubmitted ? (
              <div className="success-container">
                <div className="success-icon-wrapper">
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="success-title">Thank You!</h3>
                <p className="success-subtitle">Your quote request has been submitted successfully.<br />We will get back to you soon.</p>
                
                <div className="success-summary-box">
                  <h4>Request Summary</h4>
                  <div className="summary-grid">
                    <span className="summary-label">Name:</span>
                    <span className="summary-value">{submittedDetails.name}</span>
                    
                    <span className="summary-label">Email:</span>
                    <span className="summary-value">{submittedDetails.email}</span>
                    
                    <span className="summary-label">Mobile:</span>
                    <span className="summary-value">{submittedDetails.mobile}</span>
                    
                    <span className="summary-label">Service:</span>
                    <span className="summary-value">{submittedDetails.serviceType}</span>
                    
                    {submittedDetails.serviceType === "Domestic Move" && (
                      <>
                        <span className="summary-label">Moving Type:</span>
                        <span className="summary-value">{submittedDetails.movingType}</span>
                      </>
                    )}
                    
                    {submittedDetails.serviceType === "Domestic Move" && (submittedDetails.movingType.toLowerCase().includes("villa") || submittedDetails.movingType.toLowerCase().includes("apartment")) && (
                      <>
                        <span className="summary-label">{submittedDetails.movingType.toLowerCase().includes("villa") ? "Villa" : "Apartment"} Size:</span>
                        <span className="summary-value">{submittedDetails.villaSize}</span>
                      </>
                    )}

                    <span className="summary-label">Origin:</span>
                    <span className="summary-value">{submittedDetails.origin}</span>

                    <span className="summary-label">Destination:</span>
                    <span className="summary-value">{submittedDetails.destination}</span>
                  </div>
                </div>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={() => setIsSubmitted(false)} className="cta-button" style={{ border: "none", cursor: "pointer", fontSize: "1.1rem", padding: "12px 30px" }}>
                    Request Another Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="quote-form-title">REQUEST A QUOTE</h2>

                <div className="form-grid">
                  {/* First Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">
                      First Name <span className="required-star">*</span>
                    </label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.firstName;
                          return updated;
                        });
                      }
                    }} placeholder="First Name" className={`form-input ${errors.firstName ? "error" : ""}`}/>
                    {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                  </div>

                  {/* Second Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="secondName"> Second Name </label>
                    <input type="text" id="secondName" value={secondName} onChange={(e) => setSecondName(e.target.value)} placeholder="Second Name (optional)" className="form-input"/>
                  </div>

                  {/* Mobile */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="mobile">Mobile <span className="required-star">*</span></label>
                    <input type="tel" id="mobile" value={mobile} onChange={(e) => {
                      setMobile(e.target.value);
                      if (errors.mobile) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.mobile;
                          return updated;
                        });
                      }
                    }} placeholder="e.g. +971 58 162 7744" className={`form-input ${errors.mobile ? "error" : ""}`}/>
                    {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email <span className="required-star">*</span></label>
                    <input type="email" id="email" value={email} onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.email;
                          return updated;
                        });
                      }
                    }} placeholder="Email" className={`form-input ${errors.email ? "error" : ""}`}/>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  {/* Origin */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="origin">Moving From</label>
                    <input type="text" id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="e.g. Area, Street, City" className="form-input"/>
                  </div>

                  {/* Destination */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="destination">Moving To</label>
                    <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Area, Street, City" className="form-input"/>
                  </div>

                  {/* Service Dropdown */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="serviceType">What service do you need? <span className="required-star">*</span></label>
                    <select id="serviceType" value={serviceType} onChange={handleServiceChange} className={`form-select ${errors.serviceType ? "error" : ""}`}>
                      <option value="">Select a service option...</option>
                      <option value="self storage">Self Storage</option>
                      <option value="Domestic Move">Domestic Move</option>
                      <option value="International Move">International Move</option>
                    </select>
                    {errors.serviceType && <span className="error-text">{errors.serviceType}</span>}
                  </div>
                </div>

                {/* Conditional Domestic Move Options */}
                {serviceType === "Domestic Move" && (
                  <div className="conditional-section">
                    <h3 className="conditional-title">Select Moving Type:</h3>
                    <div className="checkbox-grid">
                      <label className={`checkbox-card ${domesticOptions.villa ? "checked" : ""}`}>
                        <input type="checkbox" checked={domesticOptions.villa} onChange={() => handleDomesticCheckboxChange("villa")} />
                        <span className="checkbox-label">Villa</span>
                      </label>
                      <label className={`checkbox-card ${domesticOptions.apartment ? "checked" : ""}`}>
                        <input type="checkbox" checked={domesticOptions.apartment} onChange={() => handleDomesticCheckboxChange("apartment")} />
                        <span className="checkbox-label">Apartment</span>
                      </label>
                      <label className={`checkbox-card ${domesticOptions.office ? "checked" : ""}`}>
                        <input type="checkbox" checked={domesticOptions.office} onChange={() => handleDomesticCheckboxChange("office")} />
                        <span className="checkbox-label">Office</span>
                      </label>
                    </div>

                    {/* Conditional Apartment BHK Options */}
                    {domesticOptions.apartment && (
                      <div className="conditional-section" style={{ borderLeftColor: "#ff6b00", marginTop: "16px", marginBottom: "0" }}>
                        <h3 className="conditional-title">Select Apartment Size: <span className="required-star">*</span></h3>
                        <div className="checkbox-grid" style={{ marginBottom: errors.bhkOptions ? "8px" : "0" }}>
                          <label className={`checkbox-card ${bhkOptions.bhk1 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk1} onChange={() => handleBhkCheckboxChange("bhk1")} />
                            <span className="checkbox-label">1 BHK</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk2 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk2} onChange={() => handleBhkCheckboxChange("bhk2")} />
                            <span className="checkbox-label">2 BHK</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk3 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk3} onChange={() => handleBhkCheckboxChange("bhk3")} />
                            <span className="checkbox-label">3 BHK</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk4 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk4} onChange={() => handleBhkCheckboxChange("bhk4")} />
                            <span className="checkbox-label">4 BHK</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk5 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk5} onChange={() => handleBhkCheckboxChange("bhk5")} />
                            <span className="checkbox-label">5 BHK</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk6 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk6} onChange={() => handleBhkCheckboxChange("bhk6")} />
                            <span className="checkbox-label">6 BHK</span>
                          </label>
                        </div>
                        {errors.bhkOptions && <span className="error-text">{errors.bhkOptions}</span>}
                      </div>
                    )}

                    {/* Conditional Villa BHK Options */}
                    {domesticOptions.villa && (
                      <div className="conditional-section" style={{ borderLeftColor: "#ff6b00", marginTop: "16px", marginBottom: "0" }}>
                        <h3 className="conditional-title">Select Villa Size: <span className="required-star">*</span></h3>
                        <div className="checkbox-grid" style={{ marginBottom: errors.bhkOptions ? "8px" : "0" }}>
                          <label className={`checkbox-card ${bhkOptions.bhk1 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk1} onChange={() => handleBhkCheckboxChange("bhk1")} />
                            <span className="checkbox-label">1 Bedroom</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk2 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk2} onChange={() => handleBhkCheckboxChange("bhk2")} />
                            <span className="checkbox-label">2 Bedrooms</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk3 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk3} onChange={() => handleBhkCheckboxChange("bhk3")} />
                            <span className="checkbox-label">3 Bedrooms</span>
                          </label>
                          <label className={`checkbox-card ${bhkOptions.bhk4 ? "checked" : ""}`}>
                            <input type="checkbox" checked={bhkOptions.bhk4} onChange={() => handleBhkCheckboxChange("bhk4")} />
                            <span className="checkbox-label">4 Bedrooms</span>
                          </label>
                        </div>
                        {errors.bhkOptions && <span className="error-text">{errors.bhkOptions}</span>}
                      </div>
                    )}
                  </div>
                )}

                {/* Message Textarea */}
                <div className="form-group" style={{ marginBottom: "30px" }}>
                  <label className="form-label" htmlFor="message"> Message / Additional Details </label>
                  <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="form-textarea" />
                </div>

                {/* Submit Button */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button type="submit" className="cta-button" style={{ border: "none", cursor: "pointer" }} disabled={isSending}>
                    {isSending ? "Sending Request..." : "Submit Quote Request"}
                    {!isSending && (
                      <span className="cta-button-icon">
                        <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
