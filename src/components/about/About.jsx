import PHOTO from '../../assets/photo.png';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={PHOTO} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Certificate</h5>
              <small>JS</small>
            </article>
            <article className='about_card'>
              <FiUser className='about_icon' />
              <h5>Personality</h5>
              <small>Driven, and Dedicated</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit ea, aliquam ad molestiae nesciunt delectus? 
            Adipisci eius fugit iste laboriosam voluptates ipsum illo, 
            assumenda corporis pariatur, sequi quisquam nihil ullam?
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;