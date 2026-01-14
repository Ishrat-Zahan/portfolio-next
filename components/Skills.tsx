"use client";

const skillCategories = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "NestJS"]
  },
  {
    title: "Frontend",
    skills: ["Vue.js", "React", "Next.js", "JavaScript"]
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Firebase"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "GitHub"]
  }
];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">My Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Technologies and tools I work with
          </p>
        </div>

        <div className="row" style={{ marginBottom: '30px' }}>
          {skillCategories.map((category) => (
            <div key={category.title} className="col-md-6 col-lg-3" style={{ marginBottom: '30px' }}>
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                height: '100%',
                border: '1px solid #eee'
              }}>
                <h4 style={{ 
                  color: '#17a2b8', 
                  fontSize: '1rem', 
                  fontWeight: '600',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {category.title}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        background: 'rgba(23, 162, 184, 0.1)',
                        color: '#333',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        border: '1px solid rgba(23, 162, 184, 0.2)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

