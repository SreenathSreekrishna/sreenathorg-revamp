import './build.css';

//logo imports
import c from './images/logos/c.png';
import css from './images/logos/css.png';
import html from './images/logos/html.png';
import javascript from './images/logos/javascript.png';
import nodejs from './images/logos/nodejs.png';
import python from './images/logos/python.png';
import react from './images/logos/react.png';

//pixel image imports
import normal from './images/avatars/normal.png';
import christmas from './images/avatars/christmas.png';
import birthday from './images/avatars/birthday.png';

//main images import
import mainImg from './images/img.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState, useEffect } from 'react';

const App = () => {
  const date = new Date();
  const preciseDate = String(date.getDate()) + String(date.getMonth()).padStart(2, '0');
  let img;
  switch (preciseDate) {
    case '811':
      img = birthday;
      break;
    case '2511':
      img = christmas;
      break;
    default:
      img = normal;
  }

  const [data, setData] = useState({heading: {main: '', disappear: ''}, mainImg: '', navbar: {}, about: {gradient: '', content: '', img: ''}, skills: {gradient: '', content: [], special: ''}, achievements: {gradient: ''}});
  useEffect(() => {
    fetch('https://sreenathorg-backend-production.up.railway.app/').then(res => {
      res.json().then(data => {
        setData(data);
      })
    });
  }, data);
  data.mainImg = mainImg;

  return <main className='main'>
    <div className='header'>
      <Parallax pages={6}>
        <ParallaxLayer speed={1}>
          <div className='bg-container'>
            <div className='header-text'>
              {data.heading.main} <span className="lName">{data.heading.disappear}</span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={1.5}>
          <div className='header-img-container'>
            <div className='header-img'>
              <img src={data.mainImg} alt='Sreenath Sreekrishna' className='my-photo' />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{start:1, end:6}} style={{maxHeight:"100px"}}>
          <div className='nav-container'>
            <div className='main-navbar'>
              {Object.keys(data.navbar).map((k,idx) => {
                return <div className="link" key={idx}>
                    <a href={data.navbar[k]}>{k}</a>
                  </div>;
              })}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5}>
          <div className='heading-container' style={{
            '--grad': data.skills.gradient
          }}>
            <div className='heading'>
              About
            </div>
          </div>
          <div className='about' id="about">
            <div className='about-content'>
              <div className='about-content-inside'>
                <p>{data.about.content}</p>
              </div>
            </div>
            <div className='about-image'>
              <img src={data.about.img} />
            </div>
          </div>



          <div className='heading-container' style={{
            '--grad': data.about.gradient
          }}>
            <div className='heading'>
              Skills
            </div>
          </div>
          <div className='skills-wrapper' id="skills">
            <div className='skills'>
              <div className='skills-circle'>
                {data.skills.content.map((v,idx) => {
                  let rot = (360/data.skills.content.length)*idx;
                  let thing = (v.level%2)!==0 ? {
                    '--mask': 'polygon(0 0, calc(100% - 1.5vw) 0%, calc(100% - 1.5vw) 100%, 0% 100%)'
                  } : {};
                  return <div className='skill' style={{
                    transform: `rotate(${rot}deg) translate(30vw) rotate(-${rot}deg)`
                  }}>
                    <div className='skill-in'>
                      <img src={v.logo} />
                      <div className='name'>{v.skill}</div>
                      <div className='rating' 
                        data-stars={'★'.repeat(Math.ceil(v.level/2))}
                        style={thing}
                      >★★★★★</div>
                    </div>
                  </div>
                })}
                <div className='skill special skill-in'>
                  <img src={data.skills.special} />
                </div>
              </div>
            </div>
          </div>



          <div className='heading-container' style={{
            '--grad': data.achievements.gradient
          }}>
            <div className='heading' style={{fontSize:'6vw'}}>
              Achievements
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  </main>;
}

export default App;
