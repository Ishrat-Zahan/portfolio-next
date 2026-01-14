"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="about-img-holder">
              <Image 
                src="/assets/imgs/ishrat-profile.jpeg" 
                className="img-fluid" 
                alt="Ishrat Zahan"
                width={400}
                height={500}
                style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <p className="section-subtitle">About Me</p>
            <h2 className="section-title">Full-Stack Developer</h2>
            
            <p className="mb-3">
              Currently working at <strong>Shomvob Technologies Ltd.</strong> as a Full-Stack Developer, 
              with expertise in developing comprehensive ERP applications and modern web solutions.
            </p>

            <p className="mb-3">
              Successfully completed <strong>3+ Professional Government Projects</strong> at <strong>Radisson Digital Technologies</strong>, 
              specializing in complex workflow design, database architecture, and full-stack development using 
              <strong> Node.js, NestJS, Laravel, Vue.js</strong>, and cloud platforms.
            </p>

            <p className="mb-4">
              A passionate developer dedicated to exploring cutting-edge technologies and delivering high-quality solutions. 
              IsDB-BISEW IT Scholarship Graduate.
            </p>

            <div className="row">
              <div className="col-md-6 mb-3">
                <strong style={{ color: '#17a2b8' }}>Email:</strong><br />
                ishratjahan260@gmail.com
              </div>
              <div className="col-md-6 mb-3">
                <strong style={{ color: '#17a2b8' }}>Phone:</strong><br />
                +880 1799217813
              </div>
              <div className="col-md-6 mb-3">
                <strong style={{ color: '#17a2b8' }}>Location:</strong><br />
                Mirpur 06, Dhaka, Bangladesh
              </div>
              <div className="col-md-6 mb-3">
                <strong style={{ color: '#17a2b8' }}>Experience:</strong><br />
                2 Years
              </div>
            </div>

            <a href="/assets/imgs/Ishrat-PHP-Dev.pdf" download className="btn btn-primary mt-3">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
