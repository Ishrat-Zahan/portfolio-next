"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  const projects = [
    {
      id: "shomvob-academy",
      title: "Shomvob Academy",
      category: "Learning Management System",
      description: "Modern Learning Management System built with Node.js, NestJS, and Supabase.",
      tech: ["Node.js", "NestJS", "Supabase"],
      year: "2025"
    },
    {
      id: "government-lms",
      title: "Government LMS",
      category: "Enterprise System",
      description: "Learning Management System for government institutions using Laravel and Vue.js.",
      tech: ["Laravel", "Vue.js", "MySQL"],
      year: "2024"
    },
    {
      id: "eastern-refinery",
      title: "Eastern Refinery System",
      category: "Government Project",
      description: "Enterprise data management system for government operations.",
      tech: ["ASP.Net", "SQL Server"],
      year: "2024"
    },
    {
      id: "corporate-website",
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with content management system.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      year: "2023"
    },
    {
      id: "restaurant-pos",
      title: "Restaurant POS System",
      category: "Business Application",
      description: "Complete restaurant point-of-sale and management system.",
      tech: ["Laravel", "jQuery", "MySQL"],
      year: "2023"
    },
    {
      id: "hr-management",
      title: "HR Management System",
      category: "Enterprise System",
      description: "Modern Human Resource Information System with employee management.",
      tech: ["Node.js", "NestJS", "PostgreSQL"],
      year: "2025"
    }
  ];

  return (
    <div>
      <Navigation />
      
      <section style={{
        background: '#17a2b8',
        padding: '100px 0 60px',
        marginTop: '70px',
        color: '#fff'
      }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>
            My Portfolio
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Professional projects and applications I've built
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 0', background: '#fff' }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#17a2b8', marginBottom: '5px' }}>6+</h2>
              <p style={{ color: '#666', margin: 0 }}>Projects</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#17a2b8', marginBottom: '5px' }}>3+</h2>
              <p style={{ color: '#666', margin: 0 }}>Govt Projects</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#17a2b8', marginBottom: '5px' }}>2</h2>
              <p style={{ color: '#666', margin: 0 }}>Years Experience</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#17a2b8', marginBottom: '5px' }}>100%</h2>
              <p style={{ color: '#666', margin: 0 }}>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <Link href={`/portfolio/${project.id}`} style={{ textDecoration: 'none' }}>
                  <div className="portfolio-card">
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
                      marginBottom: '15px'
                    }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      {project.tech.map((tech, idx) => (
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

                    <div style={{ color: '#17a2b8', fontSize: '0.9rem', fontWeight: '600' }}>
                      View Details →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
