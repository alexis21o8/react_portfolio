import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { BiMailSend } from 'react-icons/bi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mmgdbsa', 'template_seo882l', form.current, 'mLGLcdG0kslbRqocz');
    setMessage(true);

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <BiMailSend className='contact_option-icon' />
            <h4>Email</h4>
            <h5>m-alexischen@outlook.com</h5>
            <a href='mailto:menghan_chen@outlook.com' target='_blank' >Send a Message</a>
          </article>
          <article className='contact_option'>
            <FiLinkedin className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Menghan Alexis Chen</h5>
            <a href='https://www.linkedin.com/in/m-alexischen/' target='_blank' >View on LinkedIn</a>
          </article>
          <article className='contact_option'>
            <FiGithub className='contact_option-icon' />
            <h4>Github</h4>
            <h5>Alexis Chen</h5>
            <a href='https://github.com/m-alexischen' target='_blank' >Check My Repo</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
