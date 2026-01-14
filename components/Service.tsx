"use client";

export default function Service() {
  const services = [
    {
      icon: "ti-paint-bucket",
      title: "Web Design",
      description: "Creating responsive and visually appealing web interfaces with modern design principles."
    },
    {
      icon: "ti-server",
      title: "Full-Stack Development",
      description: "Building scalable applications using PHP, Laravel, Node.js, NestJS, and Vue.js."
    },
    {
      icon: "ti-dashboard",
      title: "ERP Solutions",
      description: "Designing and implementing complex ERP workflows including LMS and HRIS systems."
    },
    {
      icon: "ti-package",
      title: "API Development",
      description: "Creating RESTful APIs and backend services with efficient database design."
    },
    {
      icon: "ti-settings",
      title: "System Maintenance",
      description: "Providing ongoing support and maintenance for web applications and software."
    },
    {
      icon: "ti-layout",
      title: "Database Design",
      description: "Designing optimized database structures for MySQL, PostgreSQL, and cloud databases."
    }
  ];

  return (
    <section className="section" id="service" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title">My Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
            Professional web development services with expertise in modern technologies
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4" style={{ marginBottom: '30px' }}>
              <div className="service-card">
                <i className={service.icon + " icon"}></i>
                <h4 className="title">{service.title}</h4>
                <p className="subtitle">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
