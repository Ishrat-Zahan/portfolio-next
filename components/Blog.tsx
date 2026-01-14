"use client";

export default function Blog() {
  const education = [
    {
      degree: "PGD in IT",
      institution: "IsDB-BISEW IT Scholarship Program",
      year: "2023",
      details: "Web Application Development with PHP and Frameworks"
    },
    {
      degree: "M.Sc. in Economics",
      institution: "CGPA: 3.50 out of 4.00",
      year: "2023",
      details: "Master's degree in Economics"
    },
    {
      degree: "Higher Secondary Certification",
      institution: "Kurigram Govt Women's College, Science",
      year: "2015",
      details: "GPA: 4.50 out of 5.00"
    },
    {
      degree: "Secondary School Certification",
      institution: "Kurigram Govt Girl's High School, Science",
      year: "2013",
      details: "GPA: 4.83 out of 5.00"
    }
  ];

  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="row g-4">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6">
              <div className="blog-card">
                <div className="blog-card-body">
                  <span style={{
                    background: '#17a2b8',
                    color: '#fff',
                    padding: '5px 15px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginBottom: '15px'
                  }}>
                    {edu.year}
                  </span>

                  <h5 className="blog-card-title">{edu.degree}</h5>
                  
                  <p className="text-primary" style={{ fontWeight: '600', marginBottom: '10px' }}>
                    {edu.institution}
                  </p>

                  <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
