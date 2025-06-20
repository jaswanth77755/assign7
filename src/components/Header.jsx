import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaGoogle, FaEnvelope, FaApple, FaMobileAlt, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOptionsOpen, setLoginOptionsOpen] = useState(false);
  const [signinOptionsOpen, setSigninOptionsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const signinRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setLoginOptionsOpen(false);
      }
      if (signinRef.current && !signinRef.current.contains(event.target)) {
        setSigninOptionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLoginOptionsOpen(false);
    setSigninOptionsOpen(false);
  };

  const toggleMenuLogin = (e) => {
    e.stopPropagation();
    setLoginOptionsOpen(!loginOptionsOpen);
  };

  const toggleSigninOptions = () => {
    setSigninOptionsOpen(!signinOptionsOpen);
    setMenuOpen(false);
    setLoginOptionsOpen(false);
  };

  const handleMobileSignup = () => {
    navigate('/signup');
    setLoginOptionsOpen(false);
    setMenuOpen(false);
  };

  const handleMobileLogin = () => {
    navigate('/login');
    setSigninOptionsOpen(false);
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    setMenuOpen(false);
  };


  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="BookMyShow" style={styles.logo} />
          </Link>
        </div>

        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            style={styles.input}
          />
        </div>

        <div style={styles.citySelector}>
          <select style={styles.select}>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Guntur</option>
            <option>Vijayawada</option>
          </select>
        </div>

        <div style={styles.signin} ref={signinRef}>
          <button 
            style={styles.signinButton} 
            onClick={toggleSigninOptions}
          >
            Sign In
          </button>
          
           {signinOptionsOpen && (
            <div style={styles.loginOptions}>
              <div style={styles.loginHeader}>
                <h4 style={styles.loginTitle}>Sign in or Register</h4>
                <FaTimes 
                  style={styles.closeIcon} 
                  onClick={() => setSigninOptionsOpen(false)}
                />
              </div>
              <p style={styles.loginItem}>
                <FaGoogle style={styles.loginIcon} /> Continue with Google
              </p>
              <p style={styles.loginItem}>
                <FaEnvelope style={styles.loginIcon} /> Continue with Email
              </p>
              <p style={styles.loginItem}>
                <FaApple style={styles.loginIcon} /> Continue with Apple
              </p>
              <p 
                style={styles.loginItem} 
                onClick={handleMobileLogin}
              >
                <FaMobileAlt style={styles.loginIcon} /> Continue with Mobile
              </p>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div 
          style={styles.menuIcon} 
          onClick={toggleMenu}
          ref={menuRef}
        >
          <FaBars size={20} color="black" />
          
          {/* Menu Dropdown */}
          {menuOpen && (
            <div style={styles.menuDropdown}>
              <div 
                onClick={toggleMenuLogin} 
                style={styles.menuItem}
              >
                Login / Register
                {loginOptionsOpen ? ' ▼' : ' ▶'}
              </div>
              
              {/* Nested Login Options in Menu */}
              {loginOptionsOpen && (
                <div style={styles.menuLoginOptions}>
                  <p style={styles.loginItem}>
                    <FaGoogle style={styles.loginIcon} /> Google
                  </p>
                  <p style={styles.loginItem}>
                    <FaEnvelope style={styles.loginIcon} /> Email
                  </p>
                  <p style={styles.loginItem}>
                    <FaApple style={styles.loginIcon} /> Apple
                  </p>
                  <p 
                    style={styles.loginItem} 
                    onClick={handleMobileSignup}
                  >
                    <FaMobileAlt style={styles.loginIcon} /> Mobile Number
                  </p>
                </div>
              )}
              
              <div onClick={handleLogout} style={styles.menuItem}>
                Logout
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Bottom Menu */}
      <nav style={styles.menuBar}>
        <div style={styles.menu1}>
          <Link to="/movies" style={styles.menuLink}>Movies</Link>
          <Link to="/stream" style={styles.menuLink}>Stream</Link>
          <Link to="/events" style={styles.menuLink}>Events</Link>
          <Link to="/plays" style={styles.menuLink}>Plays</Link>
          <Link to="/sports" style={styles.menuLink}>Sports</Link>
          <Link to="/activities" style={styles.menuLink}>Activities</Link>
        </div>

        <div style={styles.menu2}>
          <Link to="/listyourshow" style={styles.menuLink}>ListYourShow</Link>
          <Link to="/corporate" style={styles.menuLink}>Corporate Enquiries</Link>
          <Link to="/offers" style={styles.menuLink}>Offers</Link>
          <Link to="/giftcards" style={styles.menuLink}>Gift Cards</Link>
        </div>
      </nav>
    </>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: 'white',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    marginTop: '10px'
  },
  logoContainer: {
    marginRight: '20px'
  },
  logo: {
    height: '40px',
    marginLeft: '110px'
  },
  searchBar: {
    flex: 1,
    marginRight: '20px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  citySelector: {
    marginRight: '20px'
  },
  select: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  signin: {
    marginRight: '20px',
    position: 'relative'
  },
  signinButton: {
    padding: '8px 16px',
    backgroundColor: '#f84464',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  menuIcon: {
    cursor: 'pointer',
    marginRight: '160px',
    position: 'relative'
  },
  // Menu Dropdown Styles
  menuDropdown: {
    position: 'absolute',
    top: '35px',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    padding: '10px',
    zIndex: '1100',
    minWidth: '180px'
  },
  menuItem: {
    padding: '8px 12px',
    cursor: 'pointer',
    color: 'black',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  // Login Options Styles
  loginOptions: {
    position: 'absolute',
    top: '45px',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    padding: '10px',
    zIndex: '1100',
    minWidth: '220px'
  },
  loginHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    paddingBottom: '8px',
    borderBottom: '1px solid #eee'
  },
  loginTitle: {
    margin: '0',
    fontSize: '16px',
    color: '#333'
  },
  closeIcon: {
    cursor: 'pointer',
    color: '#666',
    fontSize: '16px'
  },
  loginItem: {
    padding: '10px',
    cursor: 'pointer',
    color: '#333',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    margin: '4px 0',
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  loginIcon: {
    marginRight: '10px',
    color: '#f84464',
    fontSize: '16px'
  },
  // Bottom Menu Styles
  menuBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    marginLeft: '35px',
  },
  menu1: {
    display: 'flex',
    gap: '20px',
    marginLeft: '110px'
  },
  menu2: {
    display: 'flex',
    gap: '20px',
    marginRight: '120px'
  },
  menuLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '15px',
    '&:hover': {
      color: '#f84464'
    }
  }
};

export default Header;