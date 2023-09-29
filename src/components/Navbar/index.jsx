const Navbar = () => {
  return (
    <div id='header' className=' d-flex flex-column align-items-center '>
      <h1 className='navbar-brand' href='/'>
        Abel Perez
      </h1>
      <nav className="navbar navbar-expand-lg text-center ">
        <ul>
          <li className='btn black spaceOut'>
            <a className='nav-item linkDecoration container text-center' href='/aboutme'>
              About Me
            </a>
          </li>
          <li className='btn black spaceOut'>
            <a className='nav-item linkDecoration container text-center' href='/projects'>
              Projects
            </a>
          </li>
          <li className='btn black spaceOut'>
            <a className='nav-item linkDecoration container text-center' href='/contact'>
              Contact
            </a>
          </li>
          <li className='btn black spaceOut'>
            <a className='nav-item linkDecoration container text-center' href='/resume'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
