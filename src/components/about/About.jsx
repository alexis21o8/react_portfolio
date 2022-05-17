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
              <small>3+ certifications on Udemy</small>
            </article>
            <article className='about_card'>
              <FiUser className='about_icon' />
              <h5>Personality</h5>
              <small>Driven, Responsible and Dedicated</small>
            </article>
          </div>
          <p>A software engineer with a background in biology made a career transition from the education field. 
            Inspired by the continuously evolving nature of software engineering, 
            I started my self-learning path in coding and have been coding ever since. 
            I love learning about new technologies and tools, 
            and I also enjoy problem-solving and building easy-to-use applications!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;