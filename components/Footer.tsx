"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#fff' }}>
              &copy; {new Date().getFullYear()} Ishrat Zahan. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="www.linkedin.com/in/ishratzahan09" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="ti-linkedin"></i>
            </a>
            <a href="https://github.com/Ishrat-Zahan" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="ti-github"></i>
            </a>
            <a href="mailto:ishratjahan260@gmail.com" className="social-icon">
              <i className="ti-email"></i>
            </a>
            <a href="tel:+8801799217813" className="social-icon">
              <i className="ti-mobile"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
