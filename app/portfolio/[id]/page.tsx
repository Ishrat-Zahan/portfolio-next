"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Users, 
  BookOpen, 
  ClipboardCheck, 
  Shield, 
  CreditCard, 
  Calendar,
  Building2,
  UserCog,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  FileBarChart,
  Clock,
  CalendarDays,
  Wallet,
  Banknote,
  Building,
  UserCheck,
  ChevronLeft,
  ImageIcon,
  MessageCircle,
  UserPlus,
  Heart,
  Edit3,
  Share2,
  UtensilsCrossed,
  ShoppingCart,
  ClipboardList,
  CalendarCheck,
  Package,
  Truck
} from "lucide-react";

// Icon mapping for feature groups
const iconMap: Record<string, any> = {
  "Role-Based Access Control": Users,
  "Course Management": BookOpen,
  "Quiz & Assessment": ClipboardCheck,
  "Authentication & SSO": Shield,
  "Coupon Management": CreditCard,
  "Report Management": FileBarChart,
  // HRM Icons
  "Dashboard & Authentication": Shield,
  "Employee Management": UserCheck,
  "Attendance Management": Clock,
  "Leave Management": CalendarDays,
  "Loan & Advance": Wallet,
  "Payroll Management": Banknote,
  "Company Management": Building,
  // LMS Community Icons
  "LMS Features": BookOpen,
  "Community & Social": Share2,
  "Friend System": UserPlus,
  "Chat & Messaging": MessageCircle,
  "Profile Management": Edit3,
  "Posts & Engagement": Heart,
  // Restaurant Icons
  "Menu & Food Management": UtensilsCrossed,
  "Order Management": ShoppingCart,
  "Reservation System": CalendarCheck,
  "Stock & Inventory": Package,
  "Supplier Management": Truck,
  "Reports & Analytics": FileBarChart,
  // Corporate Website Icons
  "Dynamic Content Management": Edit3,
  "Team Management": Users,
  "Career & Jobs Portal": ClipboardList,
  "Responsive Design": Share2,
};

const projectsData: Record<string, any> = {
  "shomvob-academy": {
    title: "Shomvob Academy",
    category: "Learning Management System",
    year: "2025",
    client: "Shomvob Technologies Ltd.",
    role: "Project Lead & Full-Stack Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Led and developed a comprehensive Learning Management System from scratch under Shomvob Technologies. This full-featured LMS platform delivers a clean, efficient, and fully responsive e-learning experience with advanced course management, multi-role access control, and intelligent learning tools.",
    highlights: [
      "Led complete project architecture and development",
      "Built end-to-end from ground up",
      "Clean, modern & responsive UI/UX design",
      "SSO integration with multiple LMS platforms"
    ],
    featureGroups: [
      {
        title: "Role-Based Access Control",
        features: [
          "Student dashboard with progress tracking",
          "Teacher panel for course & content management",
          "Admin dashboard with full system control",
          "Custom permissions & capabilities",
          "Bulk user enrollment & management",
          "User activity logs & reports"
        ]
      },
      {
        title: "Course Management",
        features: [
          "Complete course CRUD operations",
          "Module & lesson organization",
          "SCORM & video content uploads",
          "Advanced search & filter courses",
          "Category & tag management",
          "Course completion tracking",
          "Drag & drop content builder"
        ]
      },
      {
        title: "Quiz & Assessment",
        features: [
          "Quiz builder with MCQ, True/False, Short Answer",
          "Timed assessments with attempt limits",
          "Auto-scoring & manual grading",
          "Question bank & randomization",
          "Grade book & progress reports",
          "Certificate generation on completion"
        ]
      },
      {
        title: "Authentication & SSO",
        features: [
          "Single Sign-On (SSO) integration",
          "Multi-platform authentication",
          "Seamless login across LMS platforms",
          "AI-powered chatbot assistance"
        ]
      },
      {
        title: "Coupon Management",
        features: [
          "Coupon code generation & validation",
          "Discount percentage & fixed amount",
          "Usage limits & expiry dates",
          "bKash payment gateway integration",
          "Course purchase & enrollment"
        ]
      },
      {
        title: "Report Management",
        features: [
          "Configurable report builder",
          "Student progress & completion reports",
          "Course analytics & statistics",
          "Custom date range filtering",
          "Export to PDF & Excel",
          "Scheduled report generation"
        ]
      },
    ],
    technologies: [
      { name: "PHP", category: "Backend" },
      { name: "Custom Eloquent", category: "ORM" },
      { name: "Moodle Integration", category: "LMS Core" },
      { name: "MySQL", category: "Database" },
      { name: "JavaScript", category: "Frontend" },
      { name: "Bootstrap", category: "UI Framework" },
      { name: "jQuery", category: "Library" },
      { name: "REST API", category: "Architecture" }
    ],
    techStack: {
      backend: ["PHP", "Custom Eloquent ORM", "Moodle"],
      frontend: ["JavaScript", "Bootstrap 5", "jQuery"],
      database: ["MySQL"],
      tools: ["Git", "REST API", "SSO Integration"]
    },
    link: "https://academy.shomvob.com"
  },
  "lms-community": {
    title: "LMS & Community Platform",
    category: "Learning Management System",
    year: "2024",
    client: "Educational Institution",
    role: "Full-Stack Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Developed an integrated Learning Management System with social community features under Radisson Digital Technologies. This platform combines traditional LMS capabilities with social media-like community features including friend connections, real-time chat, posts, and engagement tools.",
    highlights: [
      "Complete LMS with course management",
      "Social community like Facebook",
      "Real-time chat & messaging",
      "Posts, likes & comments system"
    ],
    featureGroups: [
      {
        title: "LMS Features",
        features: [
          "Course creation & management",
          "Lesson & module organization",
          "Student enrollment & tracking",
          "Progress monitoring",
          "Certificate generation"
        ]
      },
      {
        title: "Friend System",
        features: [
          "Send friend requests",
          "Accept/reject requests",
          "Friend list management",
          "User search & discovery"
        ]
      },
      {
        title: "Chat & Messaging",
        features: [
          "Real-time private chat",
          "Message notifications",
          "Online status indicator",
          "Message history"
        ]
      },
      {
        title: "Profile Management",
        features: [
          "Profile photo upload",
          "Edit personal details",
          "Cover photo customization",
          "Bio & about section"
        ]
      },
      {
        title: "Posts & Engagement",
        features: [
          "Create & share posts",
          "Like & react to posts",
          "Comment on posts",
          "Share posts",
          "News feed timeline"
        ]
      },
      {
        title: "Community & Social",
        features: [
          "Member directory",
          "Activity notifications",
          "Community announcements",
          "Event management"
        ]
      }
    ],
    technologies: [
      { name: "Laravel", category: "Backend" },
      { name: "Inertia.js", category: "Framework" },
      { name: "Vue.js", category: "Frontend" },
      { name: "MySQL", category: "Database" },
      { name: "Bootstrap 5", category: "Styling" }
    ],
    techStack: {
      backend: ["Laravel", "PHP"],
      frontend: ["Vue.js", "Inertia.js", "Bootstrap 5"],
      database: ["MySQL"],
      tools: ["Git", "Pusher", "REST API"]
    },
    link: "https://bfsa.rdtl.xyz"
  },
  "government-lms": {
    title: "Government LMS",
    category: "Enterprise System",
    year: "2024",
    client: "Government Institution",
    role: "Full-Stack Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Developed a comprehensive Learning Management System for government institutions as part of a professional project at Radisson Digital Technologies. The system handles large-scale training programs and certification management.",
    features: [
      "Multi-tenant architecture",
      "Course catalog and management",
      "User role-based access control",
      "Certificate generation",
      "Progress reporting and analytics",
      "Integration with existing systems"
    ],
    technologies: [
      { name: "Laravel", category: "Backend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "MySQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "PHP", category: "Language" }
    ],
    link: "http://lms.raddisson.com.bd"
  },
  "eastern-refinery": {
    title: "Eastern Refinery System",
    category: "Government Project",
    year: "2024",
    client: "Eastern Refinery Ltd.",
    role: "Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Enterprise data management system developed for government operations. The system handles complex data workflows, reporting, and operational management for the refinery industry.",
    features: [
      "Data management and processing",
      "Custom reporting system",
      "Workflow automation",
      "User management",
      "Document management",
      "Audit trail and logging"
    ],
    technologies: [
      { name: "ASP.Net", category: "Framework" },
      { name: "SQL Server", category: "Database" },
      { name: "C#", category: "Language" },
      { name: "Entity Framework", category: "ORM" }
    ],
    link: "#"
  },
  "corporate-website": {
    title: "Corporate Website",
    category: "Web Development",
    year: "2024",
    client: "CyberTech Solutions",
    role: "Full-Stack Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Developed a professional corporate website for CyberTech Solutions - a B2B and B2C marketplace company. The website features a fully dynamic content management system, team management, career portal with job application system, and modern responsive design.",
    highlights: [
      "Fully dynamic CMS from admin panel",
      "Career portal with job application",
      "Dynamic team & services section",
      "Modern responsive design"
    ],
    featureGroups: [
      {
        title: "Dynamic Content Management",
        features: [
          "Admin panel for all content",
          "Dynamic homepage sections",
          "Service management",
          "About us content editor",
          "Contact information management"
        ]
      },
      {
        title: "Team Management",
        features: [
          "Add/edit team members",
          "Team member profiles",
          "Role & designation display",
          "Team photo management",
          "Dynamic team section"
        ]
      },
      {
        title: "Career & Jobs Portal",
        features: [
          "Job position creation",
          "Job details & requirements",
          "Online job application form",
          "Application management in admin",
          "Applicant tracking"
        ]
      },
      {
        title: "Responsive Design",
        features: [
          "Mobile-first approach",
          "Tablet optimized layout",
          "Desktop full experience",
          "Cross-browser compatibility",
          "Fast loading performance"
        ]
      }
    ],
    technologies: [
      { name: "Laravel", category: "Backend" },
      { name: "Bootstrap 5", category: "Frontend" },
      { name: "jQuery", category: "JavaScript" },
      { name: "MySQL", category: "Database" },
      { name: "PHP", category: "Language" }
    ],
    techStack: {
      backend: ["Laravel", "PHP"],
      frontend: ["Bootstrap 5", "jQuery", "JavaScript"],
      database: ["MySQL"],
      tools: ["Git", "AJAX", "SEO Optimization"]
    },
    link: "https://website.ctsgroupbd.com"
  },
  "restaurant-management": {
    title: "Restaurant Management",
    category: "Business Application",
    year: "2024",
    client: "Personal Project",
    role: "Solo Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Developed a complete Restaurant Management System as a personal project. This comprehensive solution handles all aspects of restaurant operations including menu management, order processing, table reservations, inventory control, and supplier management with both online and offline ordering capabilities.",
    highlights: [
      "Complete restaurant operations management",
      "Online & offline order processing",
      "Table reservation system",
      "Stock & supplier management"
    ],
    featureGroups: [
      {
        title: "Menu & Food Management",
        features: [
          "Food category management",
          "Menu item creation & editing",
          "Price management",
          "Menu availability toggle",
          "Food item images"
        ]
      },
      {
        title: "Order Management",
        features: [
          "Add to cart functionality",
          "Order processing & tracking",
          "Table order management",
          "Online order management",
          "Offline order management",
          "Order status updates"
        ]
      },
      {
        title: "Reservation System",
        features: [
          "Table reservation booking",
          "Reservation calendar view",
          "Reservation approval/rejection",
          "Table availability check",
          "Customer notification"
        ]
      },
      {
        title: "Stock & Inventory",
        features: [
          "Material management",
          "Stock tracking & alerts",
          "Inventory reports",
          "Low stock notifications",
          "Stock adjustment"
        ]
      },
      {
        title: "Supplier Management",
        features: [
          "Supplier directory",
          "Purchase orders",
          "Supplier payments",
          "Material sourcing",
          "Supplier history"
        ]
      },
      {
        title: "Reports & Analytics",
        features: [
          "Sales reports",
          "Order analytics",
          "Reservation reports",
          "Inventory reports",
          "Revenue tracking"
        ]
      }
    ],
    technologies: [
      { name: "Laravel", category: "Backend" },
      { name: "Bootstrap 5", category: "Frontend" },
      { name: "jQuery", category: "JavaScript" },
      { name: "MySQL", category: "Database" },
      { name: "PHP", category: "Language" }
    ],
    techStack: {
      backend: ["Laravel", "PHP"],
      frontend: ["Bootstrap 5", "jQuery", "JavaScript"],
      database: ["MySQL"],
      tools: ["Git", "AJAX", "REST API"]
    },
    screenshots: [
      "/assets/imgs/rm/Screenshot 2026-01-14 121123.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121230.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121341.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121630.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121404.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121423.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121450.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121510.png",
      "/assets/imgs/rm/Screenshot 2026-01-14 121532.png"
    ],
    link: "#"
  },
  "hrm-system": {
    title: "HRM System",
    category: "Enterprise System",
    year: "2025",
    client: "Non-Governmental Organization",
    role: "Full-Stack Developer",
    bannerImage: "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800",
    overview: "Developed a comprehensive Human Resource Management System for a non-governmental organization. This enterprise-grade application streamlines all HR operations including employee management, attendance tracking, leave management, payroll processing, and more with separate dashboards for admin and employees.",
    highlights: [
      "Role-based admin & employee dashboards",
      "Complete attendance & leave system",
      "Payroll with loan & advance management",
      "Built with Laravel, Vue.js & Inertia.js"
    ],
    featureGroups: [
      {
        title: "Dashboard & Authentication",
        features: [
          "Role-based authentication system",
          "Separate admin dashboard",
          "Separate employee dashboard",
          "Secure login & session management"
        ]
      },
      {
        title: "Employee Management",
        features: [
          "Employee profile & details",
          "Department & designation management",
          "Employee documents & records",
          "Employee status tracking",
          "Bulk employee import"
        ]
      },
      {
        title: "Attendance Management",
        features: [
          "Manual attendance entry",
          "Bulk attendance upload",
          "Late attendance tracking",
          "Late request & approval system",
          "Attendance reports & analytics"
        ]
      },
      {
        title: "Leave Management",
        features: [
          "Leave application & approval",
          "Multiple leave types",
          "Leave balance tracking",
          "Holiday calendar management",
          "Leave reports"
        ]
      },
      {
        title: "Loan & Advance",
        features: [
          "Loan application & approval",
          "Advance salary requests",
          "EMI calculation & tracking",
          "Repayment schedule management",
          "Outstanding balance reports"
        ]
      },
      {
        title: "Payroll Management",
        features: [
          "Salary structure configuration",
          "Monthly payroll processing",
          "Deductions & allowances",
          "Payslip generation",
          "Salary disbursement tracking"
        ]
      },
      {
        title: "Company Management",
        features: [
          "Company profile & settings",
          "Branch management",
          "Department structure",
          "Fiscal year configuration",
          "System settings & preferences"
        ]
      }
    ],
    technologies: [
      { name: "Laravel", category: "Backend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "Inertia.js", category: "Framework" },
      { name: "MySQL", category: "Database" },
      { name: "Bootstrap 5", category: "Styling" }
    ],
    techStack: {
      backend: ["Laravel", "PHP"],
      frontend: ["Vue.js", "Inertia.js", "Bootstrap 5"],
      database: ["MySQL"],
      tools: ["Git", "REST API", "Spatie Packages"]
    },
    screenshots: [
      "/assets/imgs/hrm/1751391589510.jpg",
      "/assets/imgs/hrm/1751391589678.jpg",
      "/assets/imgs/hrm/1751391589738.jpg",
      "/assets/imgs/hrm/1751391589757.jpg",
      "/assets/imgs/hrm/1751391590147.jpg",
      "/assets/imgs/hrm/1751391590418.jpg"
    ],
    link: "#"
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    notFound();
  }

  const isEnhancedProject = project.featureGroups && project.highlights;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  const nextImage = () => {
    if (hasScreenshots) {
      setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevImage = () => {
    if (hasScreenshots) {
      setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  return (
    <div style={{ background: '#fff' }}>
      <Navigation />

      {/* Banner Section with Image and Title */}
      <section style={{
        position: 'relative',
        marginTop: '70px',
        height: '380px',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <img 
          src={project.bannerImage || "/assets/imgs/blue-medical-technology-banner-background_1896625.jpg!sw800"}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)'
        }} />
        
        {/* Content on banner */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 1, 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 15px'
        }}>
          {/* Back Button */}
          <Link 
            href="/#portfolio" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              marginBottom: '20px',
              width: 'fit-content'
            }}
          >
            <ArrowLeft size={20} color="#fff" />
            Back to Portfolio
          </Link>
          
          {/* Project Title */}
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: '700', 
            marginBottom: '0',
            color: '#fff'
          }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Meta Info */}
      <section style={{ background: '#fff', padding: '30px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            color: '#666'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="#17a2b8" />
              {project.year}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building2 size={18} color="#17a2b8" />
              {project.client}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserCog size={18} color="#17a2b8" />
              {project.role}
            </span>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      {isEnhancedProject && project.highlights && (
        <section style={{ background: '#f8f9fa', padding: '40px 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {project.highlights.map((highlight: string, idx: number) => (
                <div key={idx} style={{
                  background: '#fff',
                  padding: '20px 24px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  border: '1px solid #e0e0e0'
                }}>
                  <CheckCircle2 size={24} color="#17a2b8" />
                  <span style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#333'
                  }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screenshot Gallery */}
      {hasScreenshots && (
        <section style={{ background: '#fff', padding: '50px 0' }}>
          <div className="container">
            <h3 style={{ 
              fontSize: '1.4rem', 
              fontWeight: '700', 
              marginBottom: '30px',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <ImageIcon size={24} color="#17a2b8" />
              Project Screenshots
            </h3>
            
            {/* Main Image Display */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <img 
                src={project.screenshots[currentImage]}
                alt={`Screenshot ${currentImage + 1}`}
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                <ChevronLeft size={28} color="#333" />
              </button>
              
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                <ChevronRight size={28} color="#333" />
              </button>
              
              {/* Image Counter */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {currentImage + 1} / {project.screenshots.length}
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              padding: '10px 0'
            }}>
              {project.screenshots.map((screenshot: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  style={{
                    flexShrink: 0,
                    width: '120px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: currentImage === idx ? '3px solid #17a2b8' : '3px solid transparent',
                    padding: 0,
                    cursor: 'pointer',
                    opacity: currentImage === idx ? 1 : 0.7,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img 
                    src={screenshot}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Overview Card */}
              <div className="card mb-4">
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '700', 
                  marginBottom: '20px',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{
                    width: '4px',
                    height: '24px',
                    background: '#17a2b8',
                    borderRadius: '2px'
                  }} />
                  Project Overview
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.8', 
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {project.overview}
                </p>
              </div>

              {/* Feature Groups */}
              {isEnhancedProject && project.featureGroups ? (
                <div className="card mb-4">
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '30px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      width: '4px',
                      height: '24px',
                      background: '#17a2b8',
                      borderRadius: '2px'
                    }} />
                    Key Features & Modules
                  </h3>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                  }}>
                    {project.featureGroups.map((group: any, idx: number) => {
                      const IconComponent = iconMap[group.title] || BookOpen;
                      return (
                        <div key={idx} style={{
                          background: '#f8f9fa',
                          borderRadius: '8px',
                          padding: '24px',
                          border: '1px solid #e0e0e0'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '18px'
                          }}>
                            <div style={{
                              width: '44px',
                              height: '44px',
                              background: '#17a2b8',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <IconComponent size={22} color="#fff" />
                            </div>
                            <h4 style={{
                              fontSize: '1.1rem',
                              fontWeight: '700',
                              color: '#333',
                              margin: 0
                            }}>
                              {group.title}
                            </h4>
                          </div>
                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                          }}>
                            {group.features.map((feature: string, fIdx: number) => (
                              <li key={fIdx} style={{
                                padding: '8px 0',
                                paddingLeft: '24px',
                                position: 'relative',
                                color: '#666',
                                fontSize: '0.95rem',
                                lineHeight: '1.5',
                                borderBottom: fIdx < group.features.length - 1 ? '1px solid #e0e0e0' : 'none'
                              }}>
                                <ChevronRight 
                                  size={16} 
                                  color="#17a2b8" 
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '10px'
                                  }}
                                />
                                {feature.includes('bKash') ? (
                                  <>
                                    {feature.split('bKash')[0]}
                                    <strong style={{ color: '#17a2b8' }}>bKash</strong>
                                    {feature.split('bKash')[1]}
                                  </>
                                ) : feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="card mb-4">
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '20px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      width: '4px',
                      height: '24px',
                      background: '#17a2b8',
                      borderRadius: '2px'
                    }} />
                    Key Features
                  </h3>
                  <ul style={{ color: '#666', lineHeight: '2', paddingLeft: '20px', margin: 0 }}>
                    {project.features?.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="card">
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '700', 
                  marginBottom: '25px',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{
                    width: '4px',
                    height: '24px',
                    background: '#17a2b8',
                    borderRadius: '2px'
                  }} />
                  Technology Stack
                </h3>
                
                {isEnhancedProject && project.techStack ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {Object.entries(project.techStack).map(([category, techs]: [string, any]) => (
                      <div key={category}>
                        <h5 style={{
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: '#17a2b8',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '12px'
                        }}>
                          {category}
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {techs.map((tech: string, idx: number) => (
                            <span key={idx} style={{
                              background: '#f8f9fa',
                              padding: '10px 16px',
                              borderRadius: '6px',
                              fontSize: '0.95rem',
                              fontWeight: '600',
                              color: '#333',
                              border: '1px solid #e0e0e0'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {project.technologies.map((tech: any, idx: number) => (
                      <div key={idx} style={{
                        background: '#f8f9fa',
                        padding: '12px 18px',
                        borderRadius: '6px',
                        border: '1px solid #e0e0e0'
                      }}>
                        <div style={{ 
                          fontSize: '0.75rem', 
                          color: '#17a2b8', 
                          fontWeight: '600', 
                          marginBottom: '4px',
                          textTransform: 'uppercase'
                        }}>
                          {tech.category}
                        </div>
                        <div style={{ fontSize: '1rem', color: '#333', fontWeight: '600' }}>
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card" style={{ position: 'sticky', top: '100px' }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '700', 
                  marginBottom: '25px',
                  color: '#333',
                  paddingBottom: '15px',
                  borderBottom: '2px solid #f8f9fa'
                }}>
                  Project Details
                </h4>
                
                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ 
                    color: '#17a2b8', 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}>
                    <Calendar size={16} />
                    Year
                  </strong>
                  <p style={{ color: '#333', margin: 0, fontWeight: '600', fontSize: '1rem' }}>{project.year}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <strong style={{ 
                    color: '#17a2b8', 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}>
                    <UserCog size={16} />
                    Role
                  </strong>
                  <p style={{ color: '#333', margin: 0, fontWeight: '600', fontSize: '1rem' }}>{project.role}</p>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <strong style={{ 
                    color: '#17a2b8', 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '6px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}>
                    <BookOpen size={16} />
                    Category
                  </strong>
                  <p style={{ color: '#333', margin: 0, fontWeight: '600', fontSize: '1rem' }}>{project.category}</p>
                </div>

                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <ExternalLink size={18} />
                    Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
