"use client";

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 mb-4">
            <div className="card text-center">
              <i className="ti-email" style={{ fontSize: '2.5rem', color: '#17a2b8', marginBottom: '15px' }}></i>
              <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>Email</h5>
              <a href="mailto:ishratjahan260@gmail.com" style={{ color: '#666' }}>
                ishratjahan260@gmail.com
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card text-center">
              <i className="ti-mobile" style={{ fontSize: '2.5rem', color: '#17a2b8', marginBottom: '15px' }}></i>
              <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>Phone</h5>
              <a href="tel:+8801799217813" style={{ color: '#666' }}>
                +880 1799217813
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card text-center">
              <i className="ti-location-pin" style={{ fontSize: '2.5rem', color: '#17a2b8', marginBottom: '15px' }}></i>
              <h5 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>Location</h5>
              <p style={{ color: '#666', margin: 0 }}>
                Mirpur 06, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

{/* Message form removed */}
      </div>
    </section>
  );
}
