// import React, { useEffect, useRef, useState } from "react";
// import "./index.css";

// // ─── CUSTOM HOOK (must be defined before any component) ───────────────────────
// function useReveal(ref) {
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           obs.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [ref]);
// }

// // ─── DATA ────────────────────────────────────────────────────────────────────

// const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

// const SKILLS = {
//   Backend: ["Java", "Spring Boot", "REST APIs", "Microservices", "JPA/Hibernate", "Spring Security", "JWT", "Exception Handling"],
//   Database: ["PostgreSQL", "MySQL", "SQL", "Schema Design"],
//   Cloud: ["AWS EC2", "AWS S3", "IAM", "RDS", "Lambda", "CloudFront"],
//   Frontend: ["ReactJS", "HTML5", "CSS3", "JavaScript", "Chart.js"],
//   Tools: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Maven", "Linux"],
//   DSA: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "250+ Problems Solved"],
// };

// const PROJECTS = [
//   {
//     title: "QR-Based Event Management",
//     period: "Dec 2025",
//     stack: ["Java", "REST API", "PostgreSQL", "AWS", "JavaScript"],
//     problem: "Manual attendance fraud at college events.",
//     what: "Full-stack ticketing system where participants register online and get a SHA-256 encrypted QR ticket. Duplicate scans are rejected with transaction-safe check-in flags.",
//     highlights: [
//       "8 REST API endpoints — registration, QR validation, live attendance",
//       "SQL injection prevention via PreparedStatements",
//       "Deployed: AWS EC2 + RDS + S3 + CloudFront with HTTPS",
//     ],
//     color: "#6C63FF",
//     github: "https://github.com/AKVishwakrama/QR_Project",
//     live: null,
//   },
//   {
//     title: "Agro Supply Management",
//     period: "Oct 2025",
//     stack: ["Spring Boot", "ReactJS", "PostgreSQL", "JWT", "Chart.js"],
//     problem: "Farmers losing income to supply chain middlemen.",
//     what: "Farmer-to-buyer marketplace with role-based access (Farmer / Dealer / Admin), JWT authentication, and market analytics dashboard.",
//     highlights: [
//       "Role-based access control with Spring Security + JWT",
//       "CRUD REST APIs for products, orders, users",
//       "Sales analytics dashboard with Chart.js",
//     ],
//     color: "#22c55e",
//     github: "https://github.com/AKVishwakrama/agro-supply",
//     live: null,
//   },
//   {
//     title: "AWS Resource Manager",
//     period: "Jan 2025",
//     stack: ["Java", "Spring Boot", "AWS SDK", "REST APIs", "JavaScript"],
//     problem: "No single dashboard to manage multiple AWS resources.",
//     what: "Web dashboard to manage EC2 instances and S3 buckets via Spring Boot REST APIs, integrating AWS SDK for Java with IAM-based security.",
//     highlights: [
//       "EC2 lifecycle ops: list, start, stop, terminate",
//       "IAM credential config + exception handling",
//       "Real-time resource status via REST APIs",
//     ],
//     color: "#f5c542",
//     github: "https://github.com/AKVishwakrama/AWS_Project",
//     live: null,
//   },
// ];

// const TIMELINE = [
//   {
//     role: "Technical Team Member",
//     org: "ISTE Student Chapter, MITS",
//     period: "2024 – Present",
//     desc: "Participated in a hackathon under the chapter. Helped organize technical workshops and events for the student community.",
//   },
//   {
//     role: "Project Lead",
//     org: "Academic Software Projects, MITS",
//     period: "2024 – Present",
//     desc: "Led small teams building Java/Spring Boot apps. Handled task allocation, debugging, and code reviews across multiple projects.",
//   },
// ];

// // ─── COMPONENTS ──────────────────────────────────────────────────────────────

// function CursorGlow() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const move = (e) => {
//       if (ref.current) {
//         ref.current.style.left = e.clientX + "px";
//         ref.current.style.top = e.clientY + "px";
//       }
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);
//   return <div ref={ref} className="cursor-glow hidden md:block" />;
// }

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0, left: 0, right: 0,
//         zIndex: 100,
//         padding: "0 2rem",
//         height: "64px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         transition: "background 0.3s, border-color 0.3s",
//         background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
//         borderBottom: scrolled ? "1px solid rgba(108,99,255,0.12)" : "1px solid transparent",
//         backdropFilter: scrolled ? "blur(16px)" : "none",
//       }}
//     >
//       <span
//         style={{
//           fontFamily: "'Clash Display', sans-serif",
//           fontWeight: 700,
//           fontSize: "20px",
//           background: "linear-gradient(135deg, #6C63FF, #f5c542)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         AKV.
//       </span>

//       {/* Desktop links */}
//       <div style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
//         {NAV_LINKS.map((l) => (
//           <button
//             key={l}
//             onClick={() => scrollTo(l)}
//             className="nav-link"
//             style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Cabinet Grotesk', sans-serif" }}
//           >
//             {l}
//           </button>
//         ))}
//       </div>

//       {/* Hire me CTA */}
//       <a
//         href="mailto:amit2315vishwakarma@gmail.com"
//         style={{
//           padding: "8px 20px",
//           borderRadius: "99px",
//           background: "rgba(108,99,255,0.15)",
//           border: "1px solid rgba(108,99,255,0.4)",
//           color: "#a89cff",
//           fontSize: "13px",
//           fontWeight: 600,
//           textDecoration: "none",
//           transition: "all 0.3s",
//           fontFamily: "'Cabinet Grotesk', sans-serif",
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.background = "#6C63FF";
//           e.target.style.color = "#fff";
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.background = "rgba(108,99,255,0.15)";
//           e.target.style.color = "#a89cff";
//         }}
//         className="hidden md:inline"
//       >
//         Hire Me
//       </a>

//       {/* Mobile hamburger */}
//       <button
//         onClick={() => setOpen(!open)}
//         style={{ background: "none", border: "none", cursor: "pointer", color: "#e2e2f0", fontSize: "22px" }}
//         className="md:hidden"
//       >
//         {open ? "✕" : "☰"}
//       </button>

//       {/* Mobile menu */}
//       {open && (
//         <div
//           style={{
//             position: "absolute",
//             top: "64px",
//             left: 0,
//             right: 0,
//             background: "rgba(10,10,15,0.97)",
//             borderBottom: "1px solid rgba(108,99,255,0.15)",
//             padding: "1.5rem 2rem",
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.2rem",
//           }}
//         >
//           {NAV_LINKS.map((l) => (
//             <button
//               key={l}
//               onClick={() => scrollTo(l)}
//               style={{
//                 background: "none", border: "none", cursor: "pointer",
//                 color: "#9898b0", fontSize: "16px", textAlign: "left",
//                 fontFamily: "'Cabinet Grotesk', sans-serif",
//               }}
//             >
//               {l}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// function Hero() {
//   const titleRef = useRef(null);
//   const subRef = useRef(null);
//   const ctaRef = useRef(null);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     // Staggered entrance using CSS animation delays
//     const els = [titleRef.current, subRef.current, ctaRef.current, imgRef.current];
//     els.forEach((el, i) => {
//       if (el) {
//         el.style.opacity = "0";
//         el.style.transform = "translateY(32px)";
//         el.style.transition = `opacity 0.8s ease ${i * 0.18}s, transform 0.8s ease ${i * 0.18}s`;
//         setTimeout(() => {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         }, 80);
//       }
//     });
//   }, []);

//   return (
//     <section
//       id="about"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//         paddingTop: "80px",
//       }}
//     >
//       {/* Background blobs */}
//       <div
//         className="glow-blob"
//         style={{ width: 500, height: 500, background: "rgba(108,99,255,0.12)", top: "10%", left: "-10%" }}
//       />
//       <div
//         className="glow-blob"
//         style={{ width: 400, height: 400, background: "rgba(245,197,66,0.07)", bottom: "5%", right: "-8%" }}
//       />

//       <div
//         style={{
//           maxWidth: "1100px",
//           width: "100%",
//           margin: "0 auto",
//           padding: "0 2rem",
//           display: "flex",
//           alignItems: "center",
//           gap: "4rem",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {/* Text */}
//         <div style={{ flex: "1 1 420px", minWidth: 0 }}>
//           <div
//             ref={titleRef}
//             style={{ marginBottom: "1.5rem" }}
//           >
//             <span
//               style={{
//                 fontFamily: "'JetBrains Mono', monospace",
//                 fontSize: "13px",
//                 color: "#6C63FF",
//                 letterSpacing: "0.15em",
//                 textTransform: "uppercase",
//                 display: "block",
//                 marginBottom: "1rem",
//               }}
//             >
//               ✦ Java Developer · Backend Engineer
//             </span>
//             <h1
//               style={{
//                 fontFamily: "'Clash Display', sans-serif",
//                 fontSize: "clamp(42px, 6vw, 72px)",
//                 fontWeight: 700,
//                 lineHeight: 1.05,
//                 margin: 0,
//                 color: "#e2e2f0",
//               }}
//             >
//               Amit Kumar
//               <br />
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #6C63FF 0%, #a89cff 45%, #f5c542 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Vishwakarma
//               </span>
//             </h1>
//           </div>

//           <p
//             ref={subRef}
//             style={{
//               color: "#9898b0",
//               fontSize: "17px",
//               lineHeight: 1.75,
//               marginBottom: "2rem",
//               maxWidth: "460px",
//             }}
//           >
//             B.Tech student who has shipped <strong style={{ color: "#e2e2f0" }}>3 production-grade backend projects</strong> to AWS,
//             earned an <strong style={{ color: "#e2e2f0" }}>AWS Cloud Practitioner</strong> certification,
//             and solved <strong style={{ color: "#e2e2f0" }}>250+ DSA problems</strong> — all before finishing Semester III.
//           </p>

//           {/* Stat pills */}
//           <div
//             style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
//           >
//             {[
//               { val: "8.68", label: "CGPA" },
//               { val: "250+", label: "DSA Solved" },
//               { val: "3", label: "AWS Projects" },
//               { val: "AWS", label: "Certified" },
//             ].map((s) => (
//               <div
//                 key={s.label}
//                 style={{
//                   padding: "10px 18px",
//                   borderRadius: "12px",
//                   background: "rgba(108,99,255,0.08)",
//                   border: "1px solid rgba(108,99,255,0.2)",
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontFamily: "'Clash Display', sans-serif",
//                     fontSize: "20px",
//                     fontWeight: 700,
//                     color: "#a89cff",
//                   }}
//                 >
//                   {s.val}
//                 </div>
//                 <div style={{ fontSize: "11px", color: "#6b6b80", marginTop: "2px" }}>{s.label}</div>
//               </div>
//             ))}
//           </div>

//           <div ref={ctaRef} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//             <a
//               href="mailto:amit2315vishwakarma@gmail.com"
//               style={{
//                 padding: "13px 28px",
//                 borderRadius: "99px",
//                 background: "#6C63FF",
//                 color: "#fff",
//                 fontWeight: 700,
//                 fontSize: "15px",
//                 textDecoration: "none",
//                 transition: "transform 0.2s, box-shadow 0.2s",
//                 boxShadow: "0 0 24px rgba(108,99,255,0.4)",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-2px)";
//                 e.target.style.boxShadow = "0 0 36px rgba(108,99,255,0.6)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0)";
//                 e.target.style.boxShadow = "0 0 24px rgba(108,99,255,0.4)";
//               }}
//             >
//               Let's Talk →
//             </a>
//             <a
//               href="https://github.com/AKVishwakrama"
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 padding: "13px 28px",
//                 borderRadius: "99px",
//                 background: "transparent",
//                 border: "1px solid rgba(108,99,255,0.35)",
//                 color: "#a89cff",
//                 fontWeight: 600,
//                 fontSize: "15px",
//                 textDecoration: "none",
//                 transition: "border-color 0.2s, color 0.2s",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.borderColor = "#6C63FF";
//                 e.target.style.color = "#fff";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.borderColor = "rgba(108,99,255,0.35)";
//                 e.target.style.color = "#a89cff";
//               }}
//             >
//               GitHub ↗
//             </a>
//           </div>
//         </div>

//         {/* Profile image */}
//         <div ref={imgRef} style={{ position: "relative", flexShrink: 0 }}>
//           {/* Decorative ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-16px",
//               borderRadius: "50%",
//               background: "conic-gradient(from 0deg, #6C63FF, #a89cff, #f5c542, #6C63FF)",
//               animation: "spin 8s linear infinite",
//               opacity: 0.6,
//               zIndex: 0,
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               inset: "-12px",
//               borderRadius: "50%",
//               background: "#0a0a0f",
//               zIndex: 1,
//             }}
//           />
//           {/* Placeholder / real photo */}
//           <div
//             style={{
//               width: "220px",
//               height: "220px",
//               borderRadius: "50%",
//               background: "linear-gradient(135deg, #1e1e2e 0%, #16161f 100%)",
//               border: "3px solid rgba(108,99,255,0.3)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               position: "relative",
//               zIndex: 2,
//               overflow: "hidden",
//               animation: "float 6s ease-in-out infinite",
//             }}
//           >
//             {/* Replace this img src with your actual photo path */}
//             <img
//               src="/profile.jpg"
//               alt="Amit Kumar Vishwakarma"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               onError={(e) => {
//                 e.target.style.display = "none";
//                 e.target.nextSibling.style.display = "flex";
//               }}
//             />
//             <div
//               style={{
//                 display: "none",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "100%",
//                 height: "100%",
//               }}
//             >
//               <span style={{ fontSize: "56px" }}>👨‍💻</span>
//               <span style={{ fontSize: "11px", color: "#6b6b80", marginTop: "8px" }}>Add profile.jpg</span>
//             </div>
//           </div>

//           {/* Floating badge */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-12px",
//               right: "-20px",
//               background: "rgba(245,197,66,0.12)",
//               border: "1px solid rgba(245,197,66,0.3)",
//               borderRadius: "12px",
//               padding: "8px 14px",
//               zIndex: 3,
//               backdropFilter: "blur(8px)",
//             }}
//           >
//             <div style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", color: "#f5c542" }}>
//               AWS Certified ✓
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </section>
//   );
// }

// function Skills() {
//   const ref = useRef(null);
//   useReveal(ref);

//   return (
//     <section id="skills" ref={ref} className="reveal" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
//       <SectionLabel>Technical Skills</SectionLabel>
//       <h2 className="section-title">What I Work With</h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//           gap: "1.25rem",
//           marginTop: "3rem",
//         }}
//       >
//         {Object.entries(SKILLS).map(([cat, items]) => (
//           <div
//             key={cat}
//             className="glass-card"
//             style={{
//               borderRadius: "16px",
//               padding: "1.5rem",
//               transition: "transform 0.25s, border-color 0.25s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-4px)";
//               e.currentTarget.style.borderColor = "rgba(108,99,255,0.35)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.borderColor = "rgba(108,99,255,0.15)";
//             }}
//           >
//             <div
//               style={{
//                 fontFamily: "'Clash Display', sans-serif",
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 color: "#6C63FF",
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 marginBottom: "1rem",
//               }}
//             >
//               {cat}
//             </div>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//               {items.map((sk) => (
//                 <span key={sk} className="tech-tag">{sk}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Projects() {
//   const ref = useRef(null);
//   useReveal(ref);

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="reveal"
//       style={{
//         padding: "100px 2rem",
//         background: "rgba(108,99,255,0.03)",
//         borderTop: "1px solid rgba(108,99,255,0.08)",
//         borderBottom: "1px solid rgba(108,99,255,0.08)",
//       }}
//     >
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//         <SectionLabel>Projects</SectionLabel>
//         <h2 className="section-title">Things I've Built</h2>

//         <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}>
//           {PROJECTS.map((p, i) => (
//             <ProjectCard key={p.title} project={p} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project: p, index }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="glass-card"
//       style={{
//         borderRadius: "20px",
//         padding: "2rem",
//         transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
//         transform: hovered ? "translateX(6px)" : "translateX(0)",
//         borderColor: hovered ? `${p.color}40` : "rgba(108,99,255,0.15)",
//         boxShadow: hovered ? `0 0 40px ${p.color}15` : "none",
//         borderLeft: `3px solid ${p.color}`,
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           flexWrap: "wrap",
//           gap: "1rem",
//           marginBottom: "1rem",
//         }}
//       >
//         <div>
//           <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "6px" }}>
//             <span
//               style={{
//                 width: "8px", height: "8px", borderRadius: "50%",
//                 background: p.color, display: "inline-block", flexShrink: 0,
//                 boxShadow: `0 0 8px ${p.color}`,
//               }}
//             />
//             <h3
//               style={{
//                 fontFamily: "'Clash Display', sans-serif",
//                 fontSize: "22px",
//                 fontWeight: 700,
//                 color: "#e2e2f0",
//                 margin: 0,
//               }}
//             >
//               {p.title}
//             </h3>
//           </div>
//           <p style={{ fontSize: "13px", color: "#6C63FF", fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>
//             Problem: <span style={{ color: "#9898b0" }}>{p.problem}</span>
//           </p>
//         </div>

//         <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
//           <span style={{ fontSize: "12px", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>{p.period}</span>
//           {p.github && (
//             <a
//               href={p.github}
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 padding: "6px 14px",
//                 borderRadius: "99px",
//                 border: "1px solid rgba(108,99,255,0.3)",
//                 color: "#a89cff",
//                 fontSize: "12px",
//                 textDecoration: "none",
//                 transition: "all 0.2s",
//               }}
//               onMouseEnter={(e) => { e.target.style.background = "#6C63FF"; e.target.style.color = "#fff"; }}
//               onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#a89cff"; }}
//             >
//               GitHub ↗
//             </a>
//           )}
//         </div>
//       </div>

//       <p style={{ color: "#9898b0", fontSize: "15px", lineHeight: 1.7, marginBottom: "1.25rem" }}>
//         {p.what}
//       </p>

//       <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1.25rem" }}>
//         {p.highlights.map((h) => (
//           <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#9898b0" }}>
//             <span style={{ color: p.color, marginTop: "2px", flexShrink: 0 }}>▸</span>
//             {h}
//           </div>
//         ))}
//       </div>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//         {p.stack.map((t) => (
//           <span key={t} className="tech-tag" style={{ borderColor: `${p.color}30`, color: p.color }}>{t}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Experience() {
//   const ref = useRef(null);
//   useReveal(ref);

//   return (
//     <section id="experience" ref={ref} className="reveal" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
//       <SectionLabel>Experience</SectionLabel>
//       <h2 className="section-title">Timeline</h2>

//       <div style={{ position: "relative", marginTop: "3rem", paddingLeft: "2rem" }}>
//         {/* Vertical line */}
//         <div
//           style={{
//             position: "absolute",
//             left: "7px",
//             top: 0,
//             bottom: 0,
//             width: "2px",
//             background: "linear-gradient(to bottom, #6C63FF, rgba(108,99,255,0.1))",
//           }}
//         />

//         <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
//           {/* Education */}
//           <TimelineItem
//             dot="#6C63FF"
//             title="B.Tech – Information Technology (IoT)"
//             org="Madhav Institute of Technology & Science, Gwalior"
//             period="2024 – 2028"
//             desc="CGPA: 8.68 (Sem III) · MMVY Merit Scholarship Holder"
//           />
//           {/* Cert */}
//           <TimelineItem
//             dot="#f5c542"
//             title="AWS Certified Cloud Practitioner"
//             org="Amazon Web Services"
//             period="Jan 2026"
//             desc="Passed AWS CCP — cloud fundamentals, EC2, S3, IAM, billing, and security best practices."
//           />
//           {TIMELINE.map((t) => (
//             <TimelineItem
//               key={t.role}
//               dot="#a89cff"
//               title={t.role}
//               org={t.org}
//               period={t.period}
//               desc={t.desc}
//             />
//           ))}
//           {/* Achievements */}
//           <TimelineItem
//             dot="#22c55e"
//             title="250+ DSA Problems Solved"
//             org="LeetCode & GeeksforGeeks"
//             period="Ongoing"
//             desc="Arrays, linked lists, trees, graphs, dynamic programming, stack, and queue — consistent problem-solving practice."
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function TimelineItem({ dot, title, org, period, desc }) {
//   return (
//     <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
//       {/* Dot */}
//       <div
//         style={{
//           position: "absolute",
//           left: "-1.9rem",
//           top: "6px",
//           width: "14px",
//           height: "14px",
//           borderRadius: "50%",
//           background: dot,
//           border: "2px solid #0a0a0f",
//           boxShadow: `0 0 10px ${dot}80`,
//           zIndex: 1,
//         }}
//       />
//       <div className="glass-card" style={{ borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
//         <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "4px" }}>
//           <span
//             style={{
//               fontFamily: "'Clash Display', sans-serif",
//               fontSize: "17px",
//               fontWeight: 600,
//               color: "#e2e2f0",
//             }}
//           >
//             {title}
//           </span>
//           <span style={{ fontSize: "12px", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>{period}</span>
//         </div>
//         <div style={{ fontSize: "13px", color: "#6C63FF", marginBottom: "6px", fontWeight: 500 }}>{org}</div>
//         <p style={{ fontSize: "14px", color: "#9898b0", margin: 0, lineHeight: 1.65 }}>{desc}</p>
//       </div>
//     </div>
//   );
// }

// function Contact() {
//   const ref = useRef(null);
//   useReveal(ref);

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="reveal"
//       style={{
//         padding: "100px 2rem",
//         background: "rgba(108,99,255,0.03)",
//         borderTop: "1px solid rgba(108,99,255,0.08)",
//         textAlign: "center",
//       }}
//     >
//       <div style={{ maxWidth: "600px", margin: "0 auto" }}>
//         <SectionLabel>Contact</SectionLabel>
//         <h2 className="section-title">Let's Build Something</h2>
//         <p style={{ color: "#9898b0", fontSize: "16px", lineHeight: 1.75, margin: "1.5rem 0 2.5rem" }}>
//           I'm actively looking for Java Developer Internship opportunities.
//           If you're building something interesting, I'd love to contribute.
//         </p>

//         <a
//           href="mailto:amit2315vishwakarma@gmail.com"
//           style={{
//             display: "inline-block",
//             padding: "16px 40px",
//             borderRadius: "99px",
//             background: "#6C63FF",
//             color: "#fff",
//             fontWeight: 700,
//             fontSize: "16px",
//             textDecoration: "none",
//             boxShadow: "0 0 32px rgba(108,99,255,0.5)",
//             transition: "transform 0.2s, box-shadow 0.2s",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = "translateY(-3px)";
//             e.target.style.boxShadow = "0 0 48px rgba(108,99,255,0.7)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "translateY(0)";
//             e.target.style.boxShadow = "0 0 32px rgba(108,99,255,0.5)";
//           }}
//         >
//           amit2315vishwakarma@gmail.com
//         </a>

//         <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
//           {[
//             { label: "GitHub", href: "https://github.com/AKVishwakrama" },
//             { label: "LinkedIn", href: "https://www.linkedin.com/in/amit-vishwakarma-7134a133a/" },
//             { label: "LeetCode", href: "https://leetcode.com/u/A_K_vishwakarma/" },
//           ].map((l) => (
//             <a
//               key={l.label}
//               href={l.href}
//               target="_blank"
//               rel="noreferrer"
//               className="nav-link"
//               style={{ fontSize: "14px" }}
//             >
//               {l.label} ↗
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer
//       style={{
//         textAlign: "center",
//         padding: "2rem",
//         borderTop: "1px solid rgba(108,99,255,0.1)",
//         color: "#6b6b80",
//         fontSize: "13px",
//         fontFamily: "'JetBrains Mono', monospace",
//       }}
//     >
//       Built with React + Tailwind · Amit Kumar Vishwakarma © 2025
//     </footer>
//   );
// }

// // ─── HELPERS ─────────────────────────────────────────────────────────────────

// function SectionLabel({ children }) {
//   return (
//     <div
//       style={{
//         fontFamily: "'JetBrains Mono', monospace",
//         fontSize: "12px",
//         color: "#6C63FF",
//         letterSpacing: "0.2em",
//         textTransform: "uppercase",
//         marginBottom: "0.75rem",
//       }}
//     >
//       ✦ {children}
//     </div>
//   );
// }

// // ─── HELPERS ─────────────────────────────────────────────────────────────────

// // ─── APP ─────────────────────────────────────────────────────────────────────

// export default function App() {
//   return (
//     <>
//       <CursorGlow />
//       <Navbar />
//       <main>
//         <Hero />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import "./index.css";

// ─── CUSTOM HOOK (must be defined before any component) ───────────────────────
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  Backend: ["Java", "Spring Boot", "REST APIs", "Microservices", "JPA/Hibernate", "Spring Security", "JWT", "Exception Handling"],
  Database: ["PostgreSQL", "MySQL", "SQL", "Schema Design"],
  Cloud: ["AWS EC2", "AWS S3", "IAM", "RDS", "Lambda", "CloudFront"],
  Frontend: ["ReactJS", "HTML5", "CSS3", "JavaScript", "Chart.js"],
  Tools: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Maven", "Linux"],
  DSA: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "250+ Problems Solved"],
};

const PROJECTS = [
  {
    title: "QR-Based Event Management",
    period: "Dec 2025",
    stack: ["Java", "REST API", "PostgreSQL", "AWS", "JavaScript"],
    problem: "Manual attendance fraud at college events.",
    what: "Full-stack ticketing system where participants register online and get a SHA-256 encrypted QR ticket. Duplicate scans are rejected with transaction-safe check-in flags.",
    highlights: [
      "8 REST API endpoints — registration, QR validation, live attendance",
      "SQL injection prevention via PreparedStatements",
      "Deployed: AWS EC2 + RDS + S3 + CloudFront with HTTPS",
    ],
    color: "#6C63FF",
    github: "https://github.com/AKVishwakrama/QR_Project",
    live: null,
  },
  {
    title: "Agro Supply Management",
    period: "Oct 2025",
    stack: ["Spring Boot", "ReactJS", "PostgreSQL", "JWT", "Chart.js"],
    problem: "Farmers losing income to supply chain middlemen.",
    what: "Farmer-to-buyer marketplace with role-based access (Farmer / Dealer / Admin), JWT authentication, and market analytics dashboard.",
    highlights: [
      "Role-based access control with Spring Security + JWT",
      "CRUD REST APIs for products, orders, users",
      "Sales analytics dashboard with Chart.js",
    ],
    color: "#22c55e",
    github: "https://github.com/AKVishwakrama/agro-supply",
    live: null,
  },
  {
    title: "AWS Resource Manager",
    period: "Jan 2025",
    stack: ["Java", "Spring Boot", "AWS SDK", "REST APIs", "JavaScript"],
    problem: "No single dashboard to manage multiple AWS resources.",
    what: "Web dashboard to manage EC2 instances and S3 buckets via Spring Boot REST APIs, integrating AWS SDK for Java with IAM-based security.",
    highlights: [
      "EC2 lifecycle ops: list, start, stop, terminate",
      "IAM credential config + exception handling",
      "Real-time resource status via REST APIs",
    ],
    color: "#f5c542",
    github: "https://github.com/AKVishwakrama/AWS_Project",
    live: null,
  },
];

const TIMELINE = [
  {
    role: "Technical Team Member",
    org: "ISTE Student Chapter, MITS",
    period: "2024 – Present",
    desc: "Participated in a hackathon under the chapter. Helped organize technical workshops and events for the student community.",
  },
  {
    role: "Project Lead",
    org: "Academic Software Projects, MITS",
    period: "2024 – Present",
    desc: "Led small teams building Java/Spring Boot apps. Handled task allocation, debugging, and code reviews across multiple projects.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow hidden md:block" />;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 3rem",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(108,99,255,0.14)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 700,
          fontSize: "26px",
          background: "linear-gradient(135deg, #6C63FF, #f5c542)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        AKV.
      </span>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem" }} className="hidden md:flex">
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="nav-link"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Open to Work CTA */}
      <a
        href="mailto:amit2315vishwakarma@gmail.com"
        style={{
          padding: "10px 22px",
          borderRadius: "99px",
          background: "rgba(108,99,255,0.12)",
          border: "1px solid rgba(108,99,255,0.35)",
          color: "#a89cff",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.3s",
          fontFamily: "'Cabinet Grotesk', sans-serif",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#6C63FF";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = "#6C63FF";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(108,99,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(108,99,255,0.12)";
          e.currentTarget.style.color = "#a89cff";
          e.currentTarget.style.borderColor = "rgba(108,99,255,0.35)";
          e.currentTarget.style.boxShadow = "none";
        }}
        className="hidden md:flex"
      >
        <span style={{
          width: "7px", height: "7px", borderRadius: "50%",
          background: "#22c55e",
          boxShadow: "0 0 6px #22c55e",
          animation: "pulse2 2s infinite",
          flexShrink: 0,
        }} />
        Open to Work
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#e2e2f0", fontSize: "22px" }}
        className="md:hidden"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.97)",
            borderBottom: "1px solid rgba(108,99,255,0.15)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#9898b0", fontSize: "16px", textAlign: "left",
                fontFamily: "'Cabinet Grotesk', sans-serif",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Staggered entrance using CSS animation delays
    const els = [titleRef.current, subRef.current, ctaRef.current, imgRef.current];
    els.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(32px)";
        el.style.transition = `opacity 0.8s ease ${i * 0.18}s, transform 0.8s ease ${i * 0.18}s`;
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 80);
      }
    });
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background blobs */}
      <div
        className="glow-blob"
        style={{ width: 500, height: 500, background: "rgba(108,99,255,0.12)", top: "10%", left: "-10%" }}
      />
      <div
        className="glow-blob"
        style={{ width: 400, height: 400, background: "rgba(245,197,66,0.07)", bottom: "5%", right: "-8%" }}
      />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div
            ref={titleRef}
            style={{ marginBottom: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#6C63FF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              ✦ Java Developer · Backend Engineer
            </span>
            <h1
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.05,
                margin: 0,
                color: "#e2e2f0",
              }}
            >
              Amit Kumar
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #6C63FF 0%, #a89cff 45%, #f5c542 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Vishwakarma
              </span>
            </h1>
          </div>

          <p
            ref={subRef}
            style={{
              color: "#9898b0",
              fontSize: "17px",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "460px",
            }}
          >
            B.Tech student who has shipped <strong style={{ color: "#e2e2f0" }}>3 production-grade backend projects</strong> to AWS,
            earned an <strong style={{ color: "#e2e2f0" }}>AWS Cloud Practitioner</strong> certification,
            and solved <strong style={{ color: "#e2e2f0" }}>250+ DSA problems</strong> — all before finishing Semester III.
          </p>

          {/* Stat pills */}
          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
          >
            {[
              { val: "8.68", label: "CGPA" },
              { val: "250+", label: "DSA Solved" },
              { val: "3", label: "AWS Projects" },
              { val: "AWS", label: "Certified" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  background: "rgba(108,99,255,0.08)",
                  border: "1px solid rgba(108,99,255,0.2)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#a89cff",
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: "11px", color: "#6b6b80", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div ref={ctaRef} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="mailto:amit2315vishwakarma@gmail.com"
              style={{
                padding: "13px 28px",
                borderRadius: "99px",
                background: "#6C63FF",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 0 24px rgba(108,99,255,0.4)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 0 36px rgba(108,99,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 0 24px rgba(108,99,255,0.4)";
              }}
            >
              Let's Talk →
            </a>
            <a
              href="https://github.com/AKVishwakrama"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "13px 28px",
                borderRadius: "99px",
                background: "transparent",
                border: "1px solid rgba(108,99,255,0.35)",
                color: "#a89cff",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#6C63FF";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(108,99,255,0.35)";
                e.target.style.color = "#a89cff";
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div ref={imgRef} style={{ position: "relative", flexShrink: 0 }}>
          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              inset: "-16px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #6C63FF, #a89cff, #f5c542, #6C63FF)",
              animation: "spin 8s linear infinite",
              opacity: 0.6,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "50%",
              background: "#0a0a0f",
              zIndex: 1,
            }}
          />
          {/* Placeholder / real photo */}
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1e1e2e 0%, #16161f 100%)",
              border: "3px solid rgba(108,99,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              overflow: "hidden",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            {/* Replace this img src with your actual photo path */}
            <img
              src="/amit_profile_pic.png"
              alt="Amit Kumar Vishwakarma"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              style={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <span style={{ fontSize: "56px" }}>👨‍💻</span>
              <span style={{ fontSize: "11px", color: "#6b6b80", marginTop: "8px" }}>Add profile.jpg</span>
            </div>
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-12px",
              right: "-20px",
              background: "rgba(245,197,66,0.12)",
              border: "1px solid rgba(245,197,66,0.3)",
              borderRadius: "12px",
              padding: "8px 14px",
              zIndex: 3,
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", color: "#f5c542" }}>
              AWS Certified ✓
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function Skills() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="skills" ref={ref} className="reveal" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel>Technical Skills</SectionLabel>
      <h2 className="section-title">What I Work With</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
          marginTop: "3rem",
        }}
      >
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div
            key={cat}
            className="glass-card"
            style={{
              borderRadius: "16px",
              padding: "1.5rem",
              transition: "transform 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(108,99,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(108,99,255,0.15)";
            }}
          >
            <div
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#6C63FF",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {cat}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {items.map((sk) => (
                <span key={sk} className="tech-tag">{sk}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal"
      style={{
        padding: "100px 2rem",
        background: "rgba(108,99,255,0.03)",
        borderTop: "1px solid rgba(108,99,255,0.08)",
        borderBottom: "1px solid rgba(108,99,255,0.08)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel>Projects</SectionLabel>
        <h2 className="section-title">Things I've Built</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: "20px",
        padding: "2rem",
        transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        borderColor: hovered ? `${p.color}40` : "rgba(108,99,255,0.15)",
        boxShadow: hovered ? `0 0 40px ${p.color}15` : "none",
        borderLeft: `3px solid ${p.color}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "6px" }}>
            <span
              style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: p.color, display: "inline-block", flexShrink: 0,
                boxShadow: `0 0 8px ${p.color}`,
              }}
            />
            <h3
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#e2e2f0",
                margin: 0,
              }}
            >
              {p.title}
            </h3>
          </div>
          <p style={{ fontSize: "13px", color: "#6C63FF", fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>
            Problem: <span style={{ color: "#9898b0" }}>{p.problem}</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>{p.period}</span>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid rgba(108,99,255,0.3)",
                color: "#a89cff",
                fontSize: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.background = "#6C63FF"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#a89cff"; }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <p style={{ color: "#9898b0", fontSize: "15px", lineHeight: 1.7, marginBottom: "1.25rem" }}>
        {p.what}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1.25rem" }}>
        {p.highlights.map((h) => (
          <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#9898b0" }}>
            <span style={{ color: p.color, marginTop: "2px", flexShrink: 0 }}>▸</span>
            {h}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {p.stack.map((t) => (
          <span key={t} className="tech-tag" style={{ borderColor: `${p.color}30`, color: p.color }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="experience" ref={ref} className="reveal" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel>Experience</SectionLabel>
      <h2 className="section-title">Timeline</h2>

      <div style={{ position: "relative", marginTop: "3rem", paddingLeft: "2rem" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, #6C63FF, rgba(108,99,255,0.1))",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Education */}
          <TimelineItem
            dot="#6C63FF"
            title="B.Tech – Information Technology (IoT)"
            org="Madhav Institute of Technology & Science, Gwalior"
            period="2024 – 2028"
            desc="CGPA: 8.68 (Sem III) · MMVY Merit Scholarship Holder"
          />
          {/* Cert */}
          <TimelineItem
            dot="#f5c542"
            title="AWS Certified Cloud Practitioner"
            org="Amazon Web Services"
            period="Jan 2026"
            desc="Passed AWS CCP — cloud fundamentals, EC2, S3, IAM, billing, and security best practices."
          />
          {TIMELINE.map((t) => (
            <TimelineItem
              key={t.role}
              dot="#a89cff"
              title={t.role}
              org={t.org}
              period={t.period}
              desc={t.desc}
            />
          ))}
          {/* Achievements */}
          <TimelineItem
            dot="#22c55e"
            title="250+ DSA Problems Solved"
            org="LeetCode & GeeksforGeeks"
            period="Ongoing"
            desc="Arrays, linked lists, trees, graphs, dynamic programming, stack, and queue — consistent problem-solving practice."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ dot, title, org, period, desc }) {
  return (
    <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: "-1.9rem",
          top: "6px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: dot,
          border: "2px solid #0a0a0f",
          boxShadow: `0 0 10px ${dot}80`,
          zIndex: 1,
        }}
      />
      <div className="glass-card" style={{ borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "4px" }}>
          <span
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "17px",
              fontWeight: 600,
              color: "#e2e2f0",
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: "12px", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>{period}</span>
        </div>
        <div style={{ fontSize: "13px", color: "#6C63FF", marginBottom: "6px", fontWeight: 500 }}>{org}</div>
        <p style={{ fontSize: "14px", color: "#9898b0", margin: 0, lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
}

function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  const socials = [
    {
      label: "GitHub",
      handle: "@AKVishwakrama",
      href: "https://github.com/AKVishwakrama",
      color: "#e2e2f0",
      bg: "rgba(255,255,255,0.05)",
      border: "rgba(255,255,255,0.1)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      handle: "amit-vishwakarma",
      href: "https://www.linkedin.com/in/amit-vishwakarma-7134a133a/",
      color: "#0A66C2",
      bg: "rgba(10,102,194,0.08)",
      border: "rgba(10,102,194,0.2)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "LeetCode",
      handle: "A_K_vishwakarma",
      href: "https://leetcode.com/u/A_K_vishwakarma/",
      color: "#FFA116",
      bg: "rgba(255,161,22,0.08)",
      border: "rgba(255,161,22,0.2)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal"
      style={{
        padding: "100px 2rem",
        background: "rgba(108,99,255,0.03)",
        borderTop: "1px solid rgba(108,99,255,0.08)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="section-title">Let's Build Something</h2>
        <p style={{ color: "#9898b0", fontSize: "16px", lineHeight: 1.8, margin: "1.5rem 0 3rem" }}>
          I'm actively looking for a <strong style={{ color: "#e2e2f0" }}>Java Developer Internship</strong>.
          If you're working on something interesting, feel free to reach out — I'd genuinely love to contribute.
        </p>

        {/* Email button */}
        <a
          href="mailto:amit2315vishwakarma@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "18px 36px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #6C63FF, #8b85ff)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
            boxShadow: "0 0 40px rgba(108,99,255,0.45)",
            transition: "transform 0.25s, box-shadow 0.25s",
            fontFamily: "'Cabinet Grotesk', sans-serif",
            marginBottom: "3rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 48px rgba(108,99,255,0.65)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 0 40px rgba(108,99,255,0.45)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          amit2315vishwakarma@gmail.com
        </a>

        {/* Social cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 22px",
                borderRadius: "14px",
                background: s.bg,
                border: `1px solid ${s.border}`,
                textDecoration: "none",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                minWidth: "180px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = s.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ color: s.color, display: "flex", flexShrink: 0 }}>{s.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#e2e2f0", fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "12px", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace", marginTop: "1px" }}>
                  {s.handle}
                </div>
              </div>
              <svg style={{ marginLeft: "auto", color: "#6b6b80" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid rgba(108,99,255,0.1)",
        color: "#6b6b80",
        fontSize: "13px",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      Built with React + Tailwind · Amit Kumar Vishwakarma © 2025
    </footer>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "12px",
        color: "#6C63FF",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}
    >
      ✦ {children}
    </div>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}