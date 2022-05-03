import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>ALEXIS.</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; ALEXIS. All Rights Reserved</small>
      </div>
    </footer>
  )
};

export default Footer;