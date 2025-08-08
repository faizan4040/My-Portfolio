import handshack from '../../assets/Handshack.gif';
import hello from '../../assets/hello.gif';

function Data() {
  return (
    <div>
      <div className='home__data'>
        <h1 className='home__title'>Faizan Saifi
      <img
        className="button__icon"
        src={handshack}
        width="54"
        height="54"
        alt="Handshake"
      />
 
        </h1>
         <h3 className='home__subtitle'>Full Stack Developer (MERN)</h3>
        <p className='home__description'>I'm a MERN stack developer based in New York, passionate about crafting dynamic, high-performance web applications and dedicated to delivering clean, efficient, and scalable solutions.</p>
        <a href='#contact' className='button button--flex'>
            Say Hello
          <img
        className="button__icon"
        src={hello}
        width="54"
        height="54"
        alt="hello"
      />
        </a>


      </div>
    </div>
  )
}

export default Data
