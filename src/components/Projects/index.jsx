import Marvel_project_ from '../../images/Marvel-Hompage.png';
import Barkr from '../../images/bark-meetup.png';
import eatsleepworkoutrepeat from '../../images/eswr.png';
import fightstorm from '../../images/fightstorm.gif';

const Projects = () => {
  return (
    <section id='work' className='work'>
      <div className='website-links'>
        <div className='main-project d-flex row justify-content-around'>
          <div className='card text-bg-dark projectImg'>
            <img src={Marvel_project_} alt='Marvelproject Website' />
            <a
              href='https://tydomx.github.io/Marvel_project/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card-img-overlay '></div>
            </a>
          </div>
          <div className='card text-bg-dark projectImg'>
            <img src={Barkr} alt='Marvelproject Website' />
            <a
              href='https://eswr.onrender.com/login'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card-img-overlay'>
                <h5 className='card-title'></h5>
              </div>
            </a>
          </div>
          <div className='card text-bg-dark projectImg'>
            <img src={eatsleepworkoutrepeat} alt='Marvelproject Website' />
            <a
              href='https://eswr.onrender.com/login'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card-img-overlay'>
                <h5 className='card-title'></h5>
              </div>
            </a>
          </div>
          <div className='card text-bg-dark projectImg'>
            <img src={fightstorm} alt='Marvelproject Website' />
            <a
              href='https://fightstorm.onrender.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card-img-overlay'>
                <h5 className='card-title'></h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
