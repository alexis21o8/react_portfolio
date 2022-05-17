import { BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/m-alexischen/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/m-alexischen' target='_blank'><BsGithub /></a>
        </div>
    )
};

export default HeaderSocials;