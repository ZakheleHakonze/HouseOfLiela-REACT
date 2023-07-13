import React, { useState, useEffect, useRef   } from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import Divider from '@mui/material/Divider';
import AnimatedPage from './AnimatedPage';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';




const Packages = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
const navigate = useNavigate(); // Create a navigate function 

  // Random circle generation
const circleSizes = ['30px', '40px', '50px', '60px', '70px', '80px', '100px'];
const circleColors = ['#FFB6C1', '#FFB7C5', '#FFC1CC', '#F6909D', '#FC8EAC'];

const [circles, setCircles] = useState(Array.from({ length: 20 }, () => ({
  size: circleSizes[Math.floor(Math.random() * circleSizes.length)],
  color: circleColors[Math.floor(Math.random() * circleColors.length)],
  left: Math.floor(Math.random() * window.innerWidth),
  top: Math.floor(Math.random() * window.innerHeight),
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 2 - 1,
})));

useEffect(() => {
  const interval = setInterval(() => {
    setCircles(circles => circles.map(circle => ({
      ...circle,
      left: circle.left + circle.vx,
      top: circle.top + circle.vy,
      vx: circle.left + circle.vx < 0 || circle.left + circle.vx > window.innerWidth ? -circle.vx : circle.vx,
      vy: circle.top + circle.vy < 0 || circle.top + circle.vy > window.innerHeight ? -circle.vy : circle.vy,
    })));
  }, 20);

  return () => clearInterval(interval);
}, []);

const circleElements = circles.map((circle, index) => (
  <div
    key={index}
    className="circle"
    style={{ width: circle.size, height: circle.size, backgroundColor: circle.color, left: circle.left, top: circle.top, zIndex: 1 }}
  />
));
//------------------------------------------------------------------------------------- 
const handleBackButtonClick = () => {
  navigate('/services'); // Redirect to 'ourservices' page
};
  return (
    <AnimatedPage>
    <div className="gallerybackmain">
      <div className="galleryback">
      
        <h1 className="center-textC">Our Specials</h1>
        <Divider sx={{ borderBottomWidth: '3px' }} variant="middle" />
        <div className='pack'>
        <Card sx={{width: '300px',height: 'auto',margin: '20px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',borderRadius: '8px',overflow: 'auto',backgroundColor: 'pink',}}>
          <CardMedia
            component="img"
            height="50%"
            image={require('./images/pack/father.jpg')}

            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Father's Day Package
            </Typography>
          <Typography variant="body2" color="text.secondary">
              Treat your dad to a memorable Father's Day with our exclusive package. It includes a round of golf, a relaxing spa treatment, and a gourmet dinner at our finest restaurant.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Coming soon...</Button>
          </CardActions>
        </Card>

        <Card sx={{width: '300px',height: 'auto',margin: '20px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',borderRadius: '8px',overflow: 'auto',backgroundColor: 'pink',}}>
          <CardMedia
            component="img"
            height="50%"
            image={require('./images/pack/kid.jpg')}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kids Package
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Keep your kids entertained with our exciting Kids Package. It includes access to our adventure park, a magic show, and a delicious children's buffet.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Coming soon...</Button>
          </CardActions>
        </Card>

        <Card sx={{width: '300px',height: 'auto',margin: '20px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',borderRadius: '8px',overflow: 'auto',backgroundColor: 'pink',}}>
          <CardMedia
            component="img"
            height="50%"
            image={require('./images/pack/bridal.jpg')}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bridal Package
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Make your wedding day unforgettable with our all-inclusive Bridal Package. It features a stunning venue, personalized decorations, a gourmet menu, and professional photography services.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Coming soon...</Button>
          </CardActions>
        </Card>

        <Card sx={{width: '300px',height: 'auto',margin: '20px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',borderRadius: '8px',overflow: 'auto',backgroundColor: 'pink',}}>
          <CardMedia
            component="img"
            height="50%"
            image={require('./images/pack/ramadan.jpg')}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ramadan Package
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Experience the spirit of Ramadan with our exclusive package. Enjoy a lavish Iftar buffet, evening entertainment, and a serene atmosphere for reflection and prayer.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Coming soon....</Button>
          </CardActions>
        </Card>

        </div>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Packages;
