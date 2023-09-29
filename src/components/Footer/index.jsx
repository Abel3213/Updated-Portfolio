const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='contact-info'>
        <li className='contact-image' id='email'>
          <a href='mailto:abel83499@gmail.com' className='contact-links'>
            <i className='fa-sharp fa-solid fa-envelope'></i>
          </a>
        </li>
        <li className='contact-image' id='linkedin'>
          <a
            className='contact-links'
            href='https://www.linkedin.com/in/abel-perez-a278a0230/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li className='contact-image' id='git-hub'>
          <a
            className='contact-links'
            href='https://github.com/Abel3213'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
