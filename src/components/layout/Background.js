import React from 'react';
import randomize from '../../utils/randomize';
// import Particles from 'react-particles-js';

import styles from '../../styles/layout/layout.module.scss';

const Background = () => {
  // Create dots with random position & size
  const dots = [];
  for(let i = 0; i < 15; i++) {
    const posX = randomize(2, 98, '%');
    const posY = randomize(5, 95, '%');
    const size = randomize(3, 10, 'px');
    dots.push(
      <div
        key={i}
        className={styles.dot}
        style={{
          top: posY,
          left: posX,
          width: size,
          height: size
        }}
      />
    );
  }

  return (
    <div>
      {dots}
    </div>
  );
};

// const Background = () => (
//   <Particles
//     // height="100vh"
//     // width="100vw"
//     canvasClassName={styles.background}
//     // style={{ position: 'absolute', top: 0, left: 0 }}
//     params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 160,
// 	            "density": {
// 	                "enable": false
// 	            }
// 	        },
// 	        "size": {
// 	            "value": 3,
// 	            "random": true,
// 	            "anim": {
// 	                "speed": 4,
// 	                "size_min": 0.3
// 	            }
// 	        },
// 	        "line_linked": {
// 	            "enable": false
// 	        },
// 	        "move": {
// 	            "random": true,
// 	            "speed": 1,
// 	            "direction": "top",
// 	            "out_mode": "out"
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": false,
// 	                "mode": "bubble"
// 	            },
// 	            "onclick": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        },
// 	        "modes": {
// 	            "bubble": {
// 	                "distance": 250,
// 	                "duration": 2,
// 	                "size": 0,
// 	                "opacity": 0
// 	            },
// 	            "repulse": {
// 	                "distance": 400,
// 	                "duration": 4
// 	            }
// 	        }
// 	    }
// 	}} />
// );

export default Background;