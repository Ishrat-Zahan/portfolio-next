"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: "shomvob-academy",
      title: "Shomvob Academy",
      category: "Learning Management System",
      description: "Full-featured LMS with role-based access (Student/Teacher/Admin), quiz assessment, SSO integration, AI chatbot, coupon management, and responsive design.",
      tech: ["PHP", "Custom Eloquent", "Moodle", "MySQL", "Bootstrap"],
      year: "2025",
      liveUrl: "https://academy.shomvob.com",
      highlight: true
    },
    {
      id: "hrm-system",
      title: "HRM System",
      category: "Enterprise System",
      description: "Complete HRM for Non Govt Organization with role-based dashboards, attendance, leave, loan, advance, and payroll management.",
      tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL"],
      year: "2025",
      liveUrl: ""
    },
    {
      id: "lms-community",
      title: "LMS & Community Platform",
      category: "Learning Management System",
      description: "LMS with social community features - friend requests, real-time chat, profile management, posts, likes & comments.",
      tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL"],
      year: "2024",
      liveUrl: "https://bfsa.rdtl.xyz"
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management",
      category: "Business Application",
      description: "Complete restaurant system with menu, orders, reservations, stock & supplier management.",
      tech: ["Laravel", "Bootstrap 5", "jQuery", "MySQL"],
      year: "2024",
      liveUrl: ""
    },
    {
      id: "corporate-website",
      title: "Corporate Website",
      category: "Web Development",
      description: "Dynamic corporate site with CMS, team management, career portal & job application system.",
      tech: ["Laravel", "Bootstrap 5", "jQuery", "MySQL"],
      year: "2024",
      liveUrl: "https://website.ctsgroupbd.com"
    }
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Portfolio</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Professional projects spanning government systems and enterprise applications
          </p>
        </div>

        <div className="row">
          {projects.map((project: any) => (
            <div key={project.id} className="col-md-6 col-lg-4" style={{ marginBottom: '30px' }}>
              <div className="portfolio-card" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                padding: '24px',
                position: 'relative'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <span style={{ color: '#17a2b8', fontSize: '0.85rem', fontWeight: '600' }}>
                    {project.category}
                  </span>
                  <span style={{ color: '#999', fontSize: '0.85rem' }}>
                    {project.year}
                  </span>
                </div>

                <h4 style={{ 
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#333'
                }}>
                  {project.title}
                </h4>

                <p style={{ 
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '15px',
                  flex: '1'
                }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                  {project.tech.map((tech: string, idx: number) => (
                    <span key={idx} style={{
                      background: '#f8f9fa',
                      color: '#666',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      border: '1px solid #e0e0e0'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  alignItems: 'center',
                  marginTop: 'auto',
                  paddingTop: '10px',
                  borderTop: '1px solid #eee'
                }}>
                  <Link href={`/portfolio/${project.id}`} style={{ 
                    color: '#17a2b8', 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'linear-gradient(135deg, #28a745, #20963e)',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(40, 167, 69, 0.3)'
                      }}
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-5">
          <Link href="/portfolio">
            <button className="btn btn-outline-primary">
              View All Projects
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
