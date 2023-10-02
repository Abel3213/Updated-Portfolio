// import Myimg from './myimg.jpg';

const log = () => {
  console.log(import.meta.env.EMAILID_KEY);
};

const Aboutme = () => {
  return (
    <section id='about-me' className='about-me d-flex'>
      <div className='description'>
        <h2>About Me</h2>
        <p>
          Hi my name is Abel Perez, and I'm a passionate software engineer who
          loves creating innovative solutions to complex problems. With a keen
          eye for detail and a love for learning, I'm always on the lookout for
          new technologies and ways to improve my skills. Let's build something
          great together!
        </p>

        <button type='submit' className='btn' id='formbtn' onClick={log}>
          fsdfs
        </button>
      </div>
      <div className='my-img'>
        <img src='./myimg.jpg' alt='' />
      </div>
    </section>
  );
};

export default Aboutme;
