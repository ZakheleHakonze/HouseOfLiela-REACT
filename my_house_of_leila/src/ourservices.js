import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ButtonWithImage from './buttonwithimage';
import 'react-tabs/style/react-tabs.css';
import './styles.css';
import Footer from './footer';
import AnimatedPage from './AnimatedPage';

const Ourservices = () => {
  return (
    <AnimatedPage>
    <div>
      <div >
        <div>
          <div className='homebackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='homeback'>
              <div className="tabs-containerb" >
                <Link to="/spa">
                  <ButtonWithImage
                    text="Spa Treatment"
                    imageSrc={require('./images/spa.jpg')}
                  />
                </Link>
                <Link to="/hair">
                  <ButtonWithImage
                    text="Hair"
                    imageSrc={require('./images/hair.jpg')}
                  />
                </Link>
                <Link to="/glutathione">
                  <ButtonWithImage
                    text="Glutathione"
                    imageSrc={require('./images/glu.jpg')}
                  />
                </Link>
                <Link to="/laser">
                  <ButtonWithImage
                    text="Laser"
                    imageSrc={require('./images/laser.jpg')}
                  />
                </Link>
                <Link to="/barbershop">
                  <ButtonWithImage
                    text="Barbershop"
                    imageSrc={require('./images/bshop.jpg')}
                  />
                </Link>
                <Link to="/packages">
                  <ButtonWithImage
                    text="Packages"
                    imageSrc={require('./images/packages.jpg')}
                  />
                </Link>
              </div>
            </div>
          </div>
          <br />
            <Footer/>
          <br />
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
};

export default Ourservices;

