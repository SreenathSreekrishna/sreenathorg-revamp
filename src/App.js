import './build.css';
import img from './images/img.png';

const App = () => {
  const changeMode = () => {
    var dark = localStorage.getItem('colormode') === 'dark';
    localStorage.setItem('colormode', dark ? 'light' : 'dark');
    document.documentElement.classList = [(dark ? 'light' : 'dark')];
    document.body.style.backgroundColor = dark ? '#eee' : '#151515';
  }
  return <main className='main'>
    <div className='colormode-wrapper'>
      <div className='colormode' onClick={changeMode}></div>
    </div>
    <div className='header'>
      <div className='header-text'>
        Hi, I'm Sreenath Sreekrishna
      </div>
      <div className='header-img'>
        <img src={img} alt='A shot of Sreenath Sreekrishna' />
      </div>
    </div>
  </main>;
}

export default App;
