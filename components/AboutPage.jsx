"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./AboutPage.css";
import dhavalImg from "@/assets/dhavalsir1.jpeg";
import rahulImg from "@/assets/rahul.jpg";
import arjunImg from "@/assets/arjun.jpg";
import {
  FiArrowRight,
  FiCheck,
  FiLayers,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiCompass,
  FiUsers,
  FiUser,
  FiAward
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export default function AboutPage() {
  const leadership = [
    {
      name: "CS Dhaval Gohel",
      role: "Founder | Business & Corporate Consultant",
      experience: "8+ Years Experience",
      initials: "CS",
      image: dhavalImg,
      imagePosition: "center 55%",
      bio: "With 8+ years of professional experience, Dhaval leads The Corporate Hub with a focus on helping entrepreneurs build, structure and grow their businesses.",
      expertise: [
        "Business Consulting & Startup Structuring",
        "Corporate Law & Secretarial Advisory",
        "Trademark & Intellectual Property Advisory",
        "Business Growth Consulting",
        "Investment & Financial Advisory (SEBI registered)",
        "Visiting Faculty for Professional & Business Programs"
      ]
    },
    {
      name: "CA Rahulsingh Panwar",
      role: "Co-Founder | Tax & Financial Consultant",
      experience: "8+ Years Experience",
      initials: "CA",
      image: rahulImg,
      imagePosition: "center 25%",
      bio: "With 8+ years of experience, Rahulsingh brings strong expertise in taxation, audit, financial management and international accounting, helping businesses strengthen their financial and compliance framework.",
      expertise: [
        "GST & Indirect Taxation",
        "GST Litigation & Advisory",
        "Audit & Assurance",
        "International Accounting & Taxation",
        "Business Financial Management",
        "Internal Audit & Financial Assistance"
      ]
    },
    {
      name: "CMA Arjun Bhatt",
      role: "Co-Founder | Income Tax & Accounting Consultant",
      experience: "10+ Years Experience",
      initials: "CMA",
      image: arjunImg,
      imagePosition: "center 25%",
      bio: "With 10+ years of experience, Arjun specializes in taxation, accounting and financial compliance, with extensive experience supporting businesses, trusts and non-profit organisations.",
      expertise: [
        "Income Tax Planning & Advisory",
        "Accounting & Bookkeeping",
        "Tax Compliance & Consulting",
        "Trust & NGO Advisory",
        "Financial Accounting",
        "Visiting Faculty for Tally & Accounting"
      ]
    }
  ];

  const lifecycleStages = [
    { num: "01", title: "Business Registration", desc: "Private Limited, LLP, OPC, Section 8, Partnerships & sole proprietorship structuring." },
    { num: "02", title: "Trademark & IP Protection", desc: "Brand name, logo, copyright, patent protection, objections & portfolio advisory." },
    { num: "03", title: "Accounting & Taxation", desc: "Routine bookkeeping, GST compliance, Income Tax audits & international taxation." },
    { num: "04", title: "ROC & Secretarial Compliance", desc: "Statutory ROC filings, annual returns, minutes drafting & MCA regulatory management." },
    { num: "05", title: "Business Licensing", desc: "FSSAI, Import Export Code (IEC), ISO, MSME/Udyam, Shop Act & industry permits." },
    { num: "06", title: "Startup Advisory & Valuation", desc: "Cap table advisory, SEBI registered valuation reports, pitch-deck & investor readiness." },
    { num: "07", title: "Funding Support & Due Diligence", desc: "Financial modeling, transaction advisory, legal diligence & investor reporting." },
    { num: "08", title: "IPO & Listed Compliance", desc: "SME IPO preparation, corporate governance architecture & exchange compliance." },
    { num: "09", title: "Business Expansion", desc: "Cross-border expansion, corporate restructuring, M&A advisory & scaling frameworks." }
  ];

  const ecosystemPartners = [
    "Merchant Bankers",
    "Registrars & Transfer Agents (RTA)",
    "Registered Valuers",
    "Bankers & Financial Institutions",
    "Financial & Audit Professionals",
    "Legal & Dispute Counsel",
    "Industry Specialists",
    "Business & Networking Groups"
  ];

  return (
    <div className="about-theme-wrapper">
      {/* Executive Header Banner */}
      <section className="about-hero">
        <div className="about-theme-container">
          <div className="about-hero-inner">
            <span className="about-kicker-badge">ABOUT THE CORPORATE HUB</span>
            <h1 className="about-main-title">
              Building Businesses. Strengthening Bharat.
            </h1>
            <p className="about-hero-tagline">
              CA • CS • CMA Expertise — All Under One Roof
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="about-main-body">
        <div className="about-theme-container">

          {/* Flagship Executive Overview Card */}
          <div className="about-white-card executive-overview-card">
            <div className="executive-grid">
              {/* Left Column: Firm Overview */}
              <div className="executive-main-col">
                <span className="card-top-tag">FIRM OVERVIEW</span>
                <h2 className="executive-heading">
                  Integrated Business Consulting & Complete Corporate Services
                </h2>
                <p className="executive-lead-text">
                  The Corporate Hub is a multidisciplinary corporate advisory practice built to support
                  entrepreneurs, growing enterprises, and established institutions across every stage of business.
                </p>
                <p className="card-body-text">
                  By bringing together seasoned expertise across <strong>Chartered Accountancy (CA)</strong>,{" "}
                  <strong>Company Secretary (CS)</strong>, and <strong>Cost & Management Accountancy (CMA)</strong>,
                  we eliminate fragmented advisory and deliver synchronized corporate, financial, and legal
                  solutions under one single roof.
                </p>
                <p className="card-body-text">
                  From starting a company and safeguarding intellectual property to managing complex taxation,
                  board governance, licensing, valuations, due diligence, and capital expansion — our mandate is to
                  make doing business easier, thoroughly compliant, and growth-oriented.
                </p>

                <div className="executive-btn-row">
                  <Link href="/contact" className="about-cta-primary">
                    <span>Consult Our Specialists</span>
                    <FiArrowRight />
                  </Link>
                  <a href="#leadership" className="about-cta-secondary">
                    <span>Meet Leadership</span>
                  </a>
                  <a
                    href="https://wa.me/918866901544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-cta-whatsapp"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 5 Pillars Architectural Box */}
              <div className="executive-pillars-col">
                <div className="pillars-box-header">
                  <span className="pillars-box-subtitle">CORE SERVICE ARCHITECTURE</span>
                  <h3 className="pillars-box-title">Start • Protect • Manage • Comply • Grow</h3>
                </div>

                <div className="pillars-step-list">
                  <div className="pillar-step-item">
                    <span className="pillar-step-badge">01</span>
                    <div className="pillar-step-content">
                      <strong>Start</strong>
                      <p>Business registration, LLP, Pvt Ltd, OPC & entity structuring.</p>
                    </div>
                  </div>

                  <div className="pillar-step-item">
                    <span className="pillar-step-badge">02</span>
                    <div className="pillar-step-content">
                      <strong>Protect</strong>
                      <p>Trademark, copyright, patent filing & IP portfolio protection.</p>
                    </div>
                  </div>

                  <div className="pillar-step-item">
                    <span className="pillar-step-badge">03</span>
                    <div className="pillar-step-content">
                      <strong>Manage</strong>
                      <p>Accounting, bookkeeping, GST, Income Tax & audit management.</p>
                    </div>
                  </div>

                  <div className="pillar-step-item">
                    <span className="pillar-step-badge">04</span>
                    <div className="pillar-step-content">
                      <strong>Comply</strong>
                      <p>ROC filings, secretarial governance & MCA statutory adherence.</p>
                    </div>
                  </div>

                  <div className="pillar-step-item">
                    <span className="pillar-step-badge">05</span>
                    <div className="pillar-step-content">
                      <strong>Grow</strong>
                      <p>Valuations, investor diligence, capital readiness & SME IPO advisory.</p>
                    </div>
                  </div>
                </div>

                <div className="pillars-box-footer">
                  <span>Your Business. Our Expertise. Bharat&apos;s Growth.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Overview Card */}
          <div className="about-white-card metrics-card">
            <div className="metrics-grid">
              <div className="metric-box">
                <span className="metric-number">10+</span>
                <span className="metric-title">Years Experience</span>
                <span className="metric-desc">Seasoned corporate leadership</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-number">CA • CS • CMA</span>
                <span className="metric-title">All Under One Roof</span>
                <span className="metric-desc">Unified professional umbrella</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-number">10+</span>
                <span className="metric-title">In-House Experts</span>
                <span className="metric-desc">Tax, corporate law & finance specialists</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box">
                <span className="metric-number">100%</span>
                <span className="metric-title">Lifecycle Support</span>
                <span className="metric-desc">From incorporation to SME IPO</span>
              </div>
            </div>
          </div>

          {/* Section: From an Idea to an Enterprise */}
          <div className="about-white-card section-card">
            <div className="card-top-tag">Comprehensive Corporate Lifecycle</div>
            <h2 className="card-section-title">From an Idea to an Enterprise</h2>
            <p className="card-lead-text">
              We believe that registering a business is only the beginning.
            </p>
            <p className="card-body-text">
              The real journey starts after incorporation — managing taxation, maintaining regulatory compliance,
              protecting intellectual property, obtaining licenses, raising capital and making the right strategic
              decisions as the business grows.
            </p>
            <div className="partner-callout">
              That is where <strong>The Corporate Hub</strong> becomes more than a professional service provider.
              We become your <strong>dedicated business partner</strong>.
            </div>

            <h3 className="subgrid-heading">End-to-End Assistance Across Your Entire Business Lifecycle:</h3>
            <div className="lifecycle-cards-grid">
              {lifecycleStages.map((stage) => (
                <div key={stage.num} className="lifecycle-item">
                  <div className="lifecycle-num">{stage.num}</div>
                  <h4 className="lifecycle-item-title">{stage.title}</h4>
                  <p className="lifecycle-item-desc">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Mission & Vision */}
          <div className="mission-vision-row">
            {/* Mission Card */}
            <div className="about-white-card mv-single-card mission-border">
              <div className="mv-card-header">
                <div className="mv-icon-circle mission-icon">
                  <FiCompass />
                </div>
                <div>
                  <div className="mv-label">OUR MISSION</div>
                  <h3 className="mv-name">To Build Better Businesses.</h3>
                </div>
              </div>
              <p className="mv-text">
                Our mission is to help entrepreneurs transform their ideas into strong, compliant and sustainable
                businesses through professional expertise, practical guidance and complete corporate solutions.
              </p>
              <p className="mv-text">
                We believe that when businesses grow, they create employment, innovation, investment, opportunities
                and economic value. And when thousands of such businesses grow together, <strong>Bharat grows with them</strong>.
              </p>
              <div className="mv-highlight-note">
                Our purpose goes beyond completing registrations — we build businesses that contribute to building Bharat.
              </div>
            </div>

            {/* Vision Card */}
            <div className="about-white-card mv-single-card vision-border">
              <div className="mv-card-header">
                <div className="mv-icon-circle vision-icon">
                  <FiTrendingUp />
                </div>
                <div>
                  <div className="mv-label">OUR VISION</div>
                  <h3 className="mv-name">A Complete Consulting Ecosystem.</h3>
                </div>
              </div>
              <p className="mv-text">
                Our vision is to create a complete business consulting ecosystem where entrepreneurs can access the
                professional expertise they need to <strong>Start, Protect, Manage, Comply and Grow</strong> their
                businesses under one roof.
              </p>
              <p className="mv-text">
                We aspire to make The Corporate Hub a trusted business partner for entrepreneurs, startups, SMEs
                and growing companies across India — simplifying complex corporate requirements while unlocking real potential.
              </p>
              <div className="mv-highlight-note">
                Your Business. Our Expertise. Bharat&apos;s Growth.
              </div>
            </div>
          </div>

          {/* Strategic Approach Grid: Beyond Compliance, Borders, Philosophy */}
          <div className="about-white-card section-card">
            <div className="card-top-tag">Strategic Direction</div>
            <h2 className="card-section-title">Beyond Compliance. Towards Growth.</h2>
            <p className="card-body-text">
              Modern businesses need more than compliance. They need the right corporate structure, financial discipline,
              regulatory foresight and strategic direction.
            </p>

            <div className="pillars-three-grid">
              <div className="pillar-box">
                <div className="pillar-header">
                  <FiShield className="pillar-icon" />
                  <h4>Strategic Growth Advisory</h4>
                </div>
                <p>
                  Our advisory approach extends beyond routine filings to critical corporate milestones: business
                  restructuring, investor readiness, funding support, valuations, due diligence, and IPO advisory.
                </p>
                <div className="pillar-mantra">
                  Make business simpler. Make compliance stronger. Make growth possible.
                </div>
              </div>

              <div className="pillar-box">
                <div className="pillar-header">
                  <FiGlobe className="pillar-icon" />
                  <h4>Business Beyond Borders</h4>
                </div>
                <p>
                  For businesses looking beyond India, we provide support for export setup, Import Export Code (IEC),
                  statutory registrations, and cross-border regulatory compliance to explore global opportunities.
                </p>
                <div className="pillar-mantra">
                  Guiding Indian enterprises into international marketplaces with regulatory clarity.
                </div>
              </div>

              <div className="pillar-box">
                <div className="pillar-header">
                  <FiAward className="pillar-icon" />
                  <h4>Our Philosophy</h4>
                </div>
                <p>
                  We believe professional consulting should be simple, transparent, practical and accessible. Inspired
                  by the spirit of <em>Ease of Doing Business</em>, <em>Startup India</em>, and <em>Make in India</em>.
                </p>
                <div className="pillar-mantra">
                  Reducing regulatory friction so entrepreneurs focus on building their business.
                </div>
              </div>
            </div>
          </div>

          {/* Meet Our Leadership Section */}
          <div className="about-white-card section-card leadership-section-card" id="leadership">
            <div className="card-top-tag">Multidisciplinary Leadership</div>
            <h2 className="card-section-title">Meet Our Leadership</h2>
            <p className="card-body-text">
              Our leadership brings together expertise across Corporate Law, Taxation, Intellectual Property,
              Finance, Accounting and Business Advisory — providing businesses with multidisciplinary professional
              support under one roof.
            </p>

            <div className="leadership-cards-container">
              {leadership.map((leader, index) => (
                <div key={index} className="leader-profile-box">
                  <div className="leader-photo-slot-wrapper">
                    {leader.image ? (
                      <div className="leader-image-frame has-image">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                          className="leader-portrait-img"
                          style={leader.imagePosition ? { objectPosition: leader.imagePosition } : undefined}
                          priority={index === 0}
                        />
                        <div className="leader-image-badge-tag">{leader.initials}</div>
                      </div>
                    ) : (
                      <div className="leader-image-frame placeholder-frame" aria-label={`Photo slot for ${leader.name}`}>
                        <div className="placeholder-silhouette-container">
                          <div className="placeholder-avatar-bubble">
                            <FiUser className="placeholder-user-icon" />
                          </div>
                          <span className="placeholder-initials-badge">{leader.initials}</span>
                          <span className="placeholder-slot-label">Official Portrait Slot</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="leader-card-body">
                    <div className="leader-header-bar">
                      <div className="leader-meta">
                        <h3 className="leader-full-name">{leader.name}</h3>
                        <div className="leader-designation-text">{leader.role}</div>
                        <span className="leader-exp-pill">{leader.experience}</span>
                      </div>
                    </div>

                    <p className="leader-bio-paragraph">{leader.bio}</p>

                    <div className="leader-expertise-section">
                      <div className="expertise-header-label">CORE EXPERTISE</div>
                      <ul className="leader-expertise-bullets">
                        {leader.expertise.map((item, idx) => (
                          <li key={idx}>
                            <FiCheck className="check-bullet" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extended Team & Professional Ecosystem */}
          <div className="about-white-card section-card">
            <div className="card-top-tag">Collaborative Platform</div>
            <h2 className="card-section-title">Our Team & Professional Network</h2>

            <div className="team-ecosystem-grid">
              <div className="team-col">
                <h3 className="subcol-title">Expertise Beyond Our Leadership</h3>
                <p className="card-body-text">
                  Behind our leadership is a growing team of <strong>10+ professionals and team members</strong> with
                  experience across CA, CS, taxation, accounting, corporate compliance, intellectual property, and
                  business advisory matters.
                </p>
                <p className="card-body-text">
                  Our multidisciplinary approach enables us to manage diverse business requirements through a
                  coordinated team, giving our clients access to multiple areas of expertise through one professional platform.
                </p>
                <div className="ecosystem-banner-note">
                  One Team. Multiple Expertise. One Business Partner.
                </div>
              </div>

              <div className="ecosystem-col">
                <h3 className="subcol-title">A Strong Professional Ecosystem</h3>
                <p className="card-body-text">
                  To support businesses through specialised transactions and different stages of growth, The Corporate
                  Hub also works within a strong professional network that includes:
                </p>
                <div className="network-chips-grid">
                  {ecosystemPartners.map((item, idx) => (
                    <div key={idx} className="network-chip">
                      <FiLayers className="chip-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="ecosystem-footer-note">
                  This ecosystem connects businesses with the right institutions when specialized expertise is required
                  for funding, valuation, corporate transactions, IPOs, or expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="about-white-card cta-summary-card">
            <div className="cta-summary-inner">
              <span className="cta-badge">PARTNER WITH THE CORPORATE HUB</span>
              <h2 className="cta-title">Your Business. Our Expertise. Bharat&apos;s Growth.</h2>
              <p className="cta-description">
                At The Corporate Hub, our objective is not simply to provide individual professional services. We aim
                to create a complete business support ecosystem where entrepreneurs can access the expertise,
                professional connections and guidance they need to start, manage and grow their businesses with confidence.
              </p>
              <div className="cta-actions-group">
                <Link href="/contact" className="about-cta-primary">
                  <span>Speak With Our Team</span>
                  <FiArrowRight />
                </Link>
                <Link href="/services/business-registration" className="about-cta-secondary">
                  <span>Explore Services</span>
                </Link>
                <a
                  href="https://wa.me/918866901544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-cta-whatsapp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
