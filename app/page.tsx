"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import About from "@/components/About";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Load jQuery first
    const script1 = document.createElement('script');
    script1.src = '/assets/vendors/jquery/jquery-3.4.1.js';
    script1.async = false;
    document.body.appendChild(script1);

    script1.onload = () => {
      // Then load Bootstrap
      const script2 = document.createElement('script');
      script2.src = '/assets/vendors/bootstrap/bootstrap.bundle.js';
      script2.async = false;
      document.body.appendChild(script2);

      script2.onload = () => {
        // Then load Bootstrap affix
        const script3 = document.createElement('script');
        script3.src = '/assets/vendors/bootstrap/bootstrap.affix.js';
        script3.async = false;
        document.body.appendChild(script3);

        script3.onload = () => {
          // Finally load the main script
          const script4 = document.createElement('script');
          script4.src = '/assets/js/meyawo.js';
          script4.async = false;
          document.body.appendChild(script4);
        };
      };
    };

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src^="/assets"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
