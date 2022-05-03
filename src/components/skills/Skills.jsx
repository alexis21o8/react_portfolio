import { BsPatchCheckFill } from 'react-icons/bs';
import './skills.css';
import { backendSkills, frontendSkills } from './Skillset';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Techniques I Have</h5>
      <h2>My Skills</h2>
      <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills_content'>
            {frontendSkills.map((fe) => (
              <article className='skills_details' key={fe.id}>
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
                <h4>{fe.skill}</h4>
                <small className='text-light'>{fe.level}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
        <div className='skills_backend'>
          <h3>Backend Development</h3>
          <div className='skills_content'>
            {backendSkills.map((be) => (
              <article className='skills_details' key={be.id}>
              <BsPatchCheckFill className='skills_details-icon' />
              <div>
                <h4>{be.skill}</h4>
                <small className='text-light'>{be.level}</small>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Skills;