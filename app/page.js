'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={styles.page}>
      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.navContainer}>
          <a 
            href="https://forms.gle/uQRSHBZmdoQhKs7N8" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            Apply to be a Tutor
          </a>
          <Link href="/login" style={styles.loginBtn}>Login</Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <div style={styles.container}>
          {/* HERO SECTION */}
          <div style={styles.heroWrapper}>
            {/* LEFT SIDE - MAIN CONTENT */}
            <div style={styles.heroContent}>
              <h1 style={styles.title}>Comprehensive and Result-based Tutoring.</h1>
              <p style={styles.subtitle}>
                Get help from Canadian top university tutors in minutes.
              </p>
              <Link href="/signup" style={styles.cta}>Get Started</Link>
            </div>

            {/* RIGHT SIDE - FEATURES & LEARN MORE */}
            <div style={styles.features}>
              <ul style={styles.points}>
                <li style={styles.pointItem}>
                  <span style={styles.checkmark}></span>
                  <span>Top Canadian tutors</span>
                </li>
                <li style={styles.pointItem}>
                  <span style={styles.checkmark}></span>
                  <span>Flexible scheduling</span>
                </li>
                <li style={styles.pointItem}>
                  <span style={styles.checkmark}></span>
                  <span>Progress tracking using quizzes</span>
                </li>
                <li style={styles.pointItem}>
                  <span style={styles.checkmark}></span>
                  <span>Easy-to-use platform</span>
                </li>
              </ul>
              
              {/* Learn More Button */}
              <div style={styles.learnMoreWrapper}>
                <button 
                  onClick={() => document.getElementById('universities').scrollIntoView({ behavior: 'smooth' })}
                  style={styles.learnMoreBtn}
                >
                  <span style={styles.learnMoreText}>Learn more</span>
                  <span style={styles.arrow}>↓</span>
                </button>
              </div>
            </div>
          </div>

          {/* UNIVERSITIES SECTION */}
          <div id="universities" style={styles.universitiesSection}>
            <div style={styles.universitiesContent}>
              <h2 style={styles.sectionTitle}>Carefully selected tutors</h2>
              <p style={styles.sectionSubtitle}>
                Each tutor undergoes a rigorous verification process. We evaluate their academic background 
                and profile. Our tutors come from Canada's best universities.
              </p>
              
              {/* University Logos */}
              <div style={styles.universitiesGrid}>
                <div style={styles.universityLogo}>
                  <Image 
                    src="/uwaterloo.png" 
                    alt="University of Waterloo" 
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div style={styles.universityLogo}>
                  <Image 
                    src="/mcgill.png" 
                    alt="McGill University" 
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div style={styles.universityLogo}>
                  <Image 
                    src="/ubc.png" 
                    alt="University of British Columbia" 
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div style={styles.universityLogo}>
                  <Image 
                    src="/uoft.png" 
                    alt="University of Toronto" 
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div style={styles.universityLogo}>
                  <Image 
                    src="/concordia.png" 
                    alt="Concordia University" 
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>Contact: dreynot@gmail.com</p>
          <p style={styles.footerText}>© CATUTORS 2026</p>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffffff 0%, #fef7f7 100%)',
    color: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  nav: {
    width: '100%',
    padding: '24px 0',
    borderBottom: '1px solid rgba(220, 53, 69, 0.1)',
    backgroundColor: 'white',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#dc3545',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    transition: 'color 0.2s ease',
    padding: '8px 0',
    position: 'relative',
    ':hover': {
      color: '#c82333',
    },
    ':after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#dc3545',
      transform: 'scaleX(0)',
      transition: 'transform 0.2s ease',
    },
    ':hover:after': {
      transform: 'scaleX(1)',
    }
  },
  loginBtn: {
    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(220, 53, 69, 0.15)',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(220, 53, 69, 0.25)',
    }
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 32px',
    width: '100%',
  },
  heroWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '80px',
    marginBottom: '120px',
  },
  heroContent: {
    flex: 1,
    textAlign: 'left',
    maxWidth: '600px',
  },
  title: {
    fontSize: 'clamp(42px, 5vw, 64px)',
    fontWeight: 800,
    marginBottom: '24px',
    color: '#1a1a1a',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: 'clamp(18px, 2vw, 22px)',
    marginBottom: '48px',
    color: '#666',
    lineHeight: 1.6,
    maxWidth: '540px',
    fontWeight: 400,
  },
  cta: {
    background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
    color: 'white',
    padding: '18px 48px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 700,
    display: 'inline-block',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 20px rgba(220, 53, 69, 0.2)',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)',
    }
  },
  features: {
    flex: 1,
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  points: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '48px',
  },
  pointItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    fontSize: 'clamp(18px, 2vw, 20px)',
    color: '#333',
    fontWeight: 500,
  },
  checkmark: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    marginRight: '16px',
    background: 'linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 10%, 85% 0, 43% 62%)',
    flexShrink: 0,
  },
  learnMoreWrapper: {
    width: '100%',
  },
  learnMoreBtn: {
    background: 'transparent',
    border: '2px solid #dc3545',
    color: '#dc3545',
    padding: '14px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    ':hover': {
      background: 'rgba(220, 53, 69, 0.05)',
      transform: 'translateY(-2px)',
    }
  },
  learnMoreText: {
    fontSize: '16px',
    fontWeight: 600,
  },
  arrow: {
    fontSize: '20px',
    fontWeight: 300,
    animation: 'bounce 2s infinite',
  },
  universitiesSection: {
    paddingTop: '80px',
    borderTop: '1px solid rgba(220, 53, 69, 0.1)',
  },
  universitiesContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 4vw, 42px)',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#1a1a1a',
    textTransform: 'none',
  },
  sectionSubtitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    color: '#666',
    lineHeight: 1.8,
    marginBottom: '64px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  universitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  universityLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
  },
  footer: {
    padding: '40px 0',
    borderTop: '1px solid rgba(220, 53, 69, 0.1)',
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px',
    textAlign: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: '14px',
    margin: '4px 0',
  }
}

// Add bounce animation for arrow
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-5px);
      }
      60% {
        transform: translateY(-3px);
      }
    }
  `;
  document.head.appendChild(style);
}

// Responsive styles
const responsiveStyles = {
  '@media (max-width: 768px)': {
    heroWrapper: {
      flexDirection: 'column',
      gap: '64px',
      marginBottom: '80px',
    },
    heroContent: {
      textAlign: 'center',
      maxWidth: '100%',
    },
    subtitle: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cta: {
      padding: '16px 40px',
      fontSize: '16px',
    },
    features: {
      maxWidth: '100%',
      alignItems: 'center',
    },
    points: {
      textAlign: 'left',
      width: '100%',
    },
    navContainer: {
      padding: '0 24px',
    },
    container: {
      padding: '48px 24px',
    },
    universitiesGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
    },
    universityLogo: {
      height: '70px',
    },
  },
  '@media (max-width: 480px)': {
    universitiesGrid: {
      gridTemplateColumns: '1fr',
      gap: '25px',
    },
    universityLogo: {
      height: '60px',
    },
  }
}

// Merge responsive styles
Object.keys(responsiveStyles).forEach(mediaQuery => {
  const stylesToMerge = responsiveStyles[mediaQuery];
  Object.keys(stylesToMerge).forEach(key => {
    if (!styles[key]) styles[key] = {};
    styles[key] = { ...styles[key], [mediaQuery]: stylesToMerge[key] };
  });
});