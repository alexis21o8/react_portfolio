import CTA from './CTA';
import ME from '../../assets/me.png';
import DOWN from '../../assets/down.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Alexis Chen</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a className='arrow' href='#contact'>
          <img src={DOWN} alt='' />
        </a>
      </div>
    </header>
  )
};

export default Header;
