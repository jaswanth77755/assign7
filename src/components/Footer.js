import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 BookMyShow Clone. All rights reserved.</p>
      <div style={styles.links}>
        <a href="/about" style={styles.link}>About Us</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/terms" style={styles.link}>Terms of Service</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#222',
    color: 'white',
    padding: '20px 50px',
    textAlign: 'center',
    marginTop: '40px'
  },
  links: {
    marginTop: '10px'
  },
  link: {
    color: '#f84464',
    margin: '0 10px',
    textDecoration: 'none'
  }
};

export default Footer;
