import './portfolio.css';
import { portfolioCases } from './PortfolioCases';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {portfolioCases.map((p) => (
          <article className='portfolio_item' key={p.id}>
            <div className='portfolio_item-image'>
              <img src={p.image} alt={p.title} />
            </div>
            <h3>{p.title}</h3>
            <div className='portfolio_item-cta'>
              <a href={p.github} className='btn' target='_blank'>Github</a>
              <a href={p.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
};

export default Portfolio;