import React, { useState, useEffect, useRef   } from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';
import Divider from '@mui/material/Divider';


const Spa = () => {
  const carouselContainerRef = useRef(null);
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
/*----------------------------------------------------------------------------------------------------------*/  

const handleBackButtonClick = () => {
  navigate('/services'); // Redirect to 'ourservices' page
};


  return (
    <AnimatedPage>
    <div className="gallerybackmain">
      <div className="galleryback">
          <h1 className="center-textC" >Spa Treatment Pricelist</h1>
          <Divider sx={{ borderBottomWidth: '3px' }} variant="middle" />
          <p className="center-text"style={{columns: "1",fontSize: '20px'}}>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block', fontSize: '20px'}}>
              <ul className="bold-text">Facials</ul>
              <br/>
              <ul className="bold-text">Regima</ul>
                  <li>Regima chemical peel</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>This facial treatment utilizes a Regima chemical peel to exfoliate and renew the skin, targeting specific concerns such as acne, pigmentation, or fine lines. Consult with our skincare experts to determine the most suitable peel for your skin.</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:<b>K500</b></li>
                  <br />

                  <li>Deep cleansing classic facial</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A thorough cleansing and purifying facial that helps to remove impurities and unclog pores. Enjoy a relaxing experience while achieving a cleaner and healthier complexion.</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:<b>K550</b></li>
                  <br />

                  <li>Anti-aging</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Combat the signs of aging with this facial treatment, which focuses on reducing wrinkles, improving skin elasticity, and promoting a more youthful appearance. Our anti-aging techniques and products help rejuvenate your skin.</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:<b>K600</b></li>
                  <br />

                  <li>Hydrating facial</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Restore moisture and hydration to your skin with this revitalizing facial treatment. Experience a boost in skin elasticity and a radiant, refreshed complexion.</li>
                  <li>Duration:45mins / 60 mins</li>
                  <li>Price:<b>K500</b></li>
                  <br />

              
              <ul className="bold-text">Himalaya</ul>
                  <li>Deep cleansing</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A deep cleansing facial that utilizes Himalayan ingredients to purify and detoxify your skin. Enjoy the soothing properties of natural ingredients for a refreshed and revitalized complexion.</li>
                  <li>Duration:45 min / 60 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Purifying</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>This facial treatment focuses on reducing excess oil and purifying the skin. Experience a deep cleanse and balance for a healthier, clearer complexion.</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <li>Dermaplaning</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Dermaplaning is a gentle exfoliation treatment that removes dead skin cells and vellus hair (peach fuzz) from the face. It helps improve skin texture and allows better product absorption.</li>
                  <li>Duration:40 mins</li>
                  <li>Price:<b>K700</b></li>
                  <br />

              
              <ul className="bold-text">Manicure</ul>
                  <li>Express mani</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A quick and efficient manicure that includes nail shaping, cuticle care, and a polish application of your choice. Perfect for those on the go.</li>
                  <li>Duration:20 mins</li>
                  <li>Price:<b>K180</b></li>
                  <br />

                  <li>Deluxe mani</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Indulge in a relaxing manicure experience that includes nail shaping, cuticle care, a hand massage, and a polish application. Treat your hands to some well-deserved pampering.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Paraffin mani</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Experience the ultimate hydration for your hands with a paraffin wax treatment. This luxurious manicure includes nail shaping, cuticle care, a hand massage, and a paraffin wax application.</li>
                  <li>Duration:45 mins</li>
                  <li>Price:<b>K250</b></li>
                  <br />

                  <li>Junior mani</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A mini manicure designed specifically for children, including nail shaping, cuticle care, and a polish application. Give your child a fun and pampering experience.</li>
                  <li>Duration:15 mins</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Gel extension</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enhance the length and shape of your nails with gel extensions. This service includes nail preparation, extension application, shaping, and a gel polish of your choice.</li>
                  <li>Duration:90 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <li>Rubber gel overlay</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A protective overlay for your natural nails using rubber gel. This service helps strengthen your nails and provides a glossy finish.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <li>Refill Nails</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Maintain the look and durability of your nail extensions with a refill. This service includes nail filing, reshaping, and a fresh gel polish application.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K250</b></li>
                  <br />

                  <li>Acrylic</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Get durable and long-lasting nail extensions with an acrylic overlay. This service includes nail preparation, acrylic application, shaping, and a polish of your choice.</li>
                  <li>Duration:90 mins</li>
                  <li>Price:<b>K450</b></li>
                  <br />

                  <li>French acrylic</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve a classic and elegant look with French acrylic nails. This service includes the application of acrylic nails with a French tip design.</li>
                  <li>Duration:90 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Art on finger</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Add a touch of creativity and individuality to your nails with nail art designs. Prices vary depending on the complexity of the design.</li>
                  <li>Price:<b>K20</b></li>
                  <br />

                  <li>Soak off gel</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Safely and gently remove your gel polish using a soak-off process. This service helps maintain the health of your natural nails.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K50</b></li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Soak off acrylic</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Safely remove your acrylic nails using a soak-off process. This service ensures the integrity of your natural nails.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K100</b></li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Mani &amp; Pedi combo</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Treat yourself to a complete hand and foot pampering session. This combo includes a classic manicure and pedicure for ultimate relaxation.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Nail art set</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Upgrade your nail service with a set of intricate and customized nail art designs. Express your personal style and creativity.</li>
                  <li>Price:<b>K120</b></li>
                  <br />

                  <li>Nail fix</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Repair a damaged or broken nail with a quick fix. Our technicians will ensure your nails look flawless again.</li>
                  <li>Price:<b>K20</b></li>
                  <br />

                  <li>Ibx nail strengthening treatment</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Give your nails some extra care and strength with the IBX Nail Strengthening Treatment. This treatment is designed to repair and strengthen weak, damaged, or brittle nails. It involves a two-step process of applying a strengthening formula and a protective shield, promoting healthier and more resilient nails.</li>
                  <li>Duration:20 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Ibx add on</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enhance your manicure or pedicure experience by adding the IBX treatment as an extra step. This add-on service provides additional strength and protection to your nails, helping to prevent damage and maintain their health and beauty.</li>
                  <li>Duration:20 mins</li>
                  <li>Price:<b>K100</b></li>
                  <br />

              <ul className="bold-text">Massages</ul>
                  <li>Thai massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Experience the ancient healing art of Thai massage, which combines acupressure, stretching, and deep tissue techniques. This therapeutic massage promotes relaxation, improves flexibility, and balances the body's energy flow.</li>
                  <li>Price:<b>K900</b></li>
                  <br />

                  <li>Swedish</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enjoy a classic Swedish massage that utilizes long, flowing strokes to promote relaxation, relieve muscle tension, and improve circulation. This massage is perfect for overall relaxation and stress relief.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K450</b></li>
                  <br />

                  <li>Deep tissue</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Target deeper layers of muscle and connective tissue with this therapeutic massage. It focuses on releasing chronic muscle tension, addressing specific areas of discomfort, and promoting overall muscle recovery.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K550</b></li>
                  <br />

                  <li>Hot stone</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Indulge in a soothing massage enhanced with the use of heated volcanic stones. The warm stones help to melt away tension, promote relaxation, and improve energy flow throughout the body.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K600</b></li>
                  <br />

                  <li>Foot massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Treat your tired feet to a revitalizing massage. This therapy focuses on the feet and lower legs, providing relief from aches, improving circulation, and promoting overall relaxation.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K250</b></li>
                  <br />

                  <li>Aromatherapy</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Immerse yourself in the therapeutic benefits of essential oils combined with a gentle, soothing massage. Aromatherapy helps to relax the mind, uplift the spirit, and enhance overall well-being.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K500</b></li>
                  <br />

                  <li>Half body</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A focused massage targeting specific areas of tension and discomfort in the upper or lower body. This service provides relief and relaxation in a shorter duration.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <li>Hot towel massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Experience the comforting sensation of hot towels combined with a full-body massage. This treatment helps to relax muscles, relieve stress, and promote a sense of deep relaxation.</li>
                  <li>Price:<b>K600</b></li>
                  <br />

                  <li>Add on hot towel massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enhance your massage experience by adding a hot towel treatment to your chosen massage service. The warm towels provide additional relaxation and therapeutic benefits.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:<b>K600</b></li>
                  <br />

                  <li>Back & neck massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Specifically targeting the back and neck area, this massage focuses on relieving tension and promoting relaxation in the upper body.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

              
              <br />
              <br />
              <ul className="bold-text">Body treatments</ul>
                  <li>Body scrub</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Exfoliate and rejuvenate your skin with a body scrub treatment. This service helps to remove dead skin cells, leaving your skin smooth, soft, and refreshed.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <li>crub & massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Combine the benefits of a body scrub with a relaxing massage. Enjoy the exfoliating and invigorating effects of a scrub followed by a soothing massage to leave your skin nourished and your body relaxed.</li>
                  <li>Duration:90 mins</li>
                  <li>Price:<b>K750</b></li>
                  <br />

              <ul className="bold-text">Pedicure</ul>
                  <li>Express Pedi</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>A quick pedicure service that includes nail shaping, cuticle care, and a polish application. Perfect for maintaining your foot appearance on the go.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Deluxe Pedi</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Indulge in a luxurious pedicure experience that includes nail shaping, cuticle care, a foot massage, and a polish application. Treat your feet to relaxation and rejuvenation.</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Paraffin Pedi</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Pamper your feet with a paraffin wax treatment. This pedicure includes nail shaping, cuticle care, a foot massage, and a paraffin wax application, providing deep hydration and softening for your feet.</li>
                  <li>Duration:65 mins</li>
                  <li>Price:<b>K300</b></li>
                  <br />

                  <li>Gel add on</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Upgrade your pedicure with a gel polish application. Enjoy long-lasting and chip-free color on your toenails.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Add Pedi peel</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enhance your pedicure with a gentle exfoliating peel specifically designed for the feet. This treatment helps remove rough, dead skin, leaving your feet smooth and revitalized.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Rubber gel</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Add a layer of rubber gel to your toenails for added protection and durability. This service helps to prevent chipping and extends the life of your pedicure.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

              <ul className="bold-text">Waxing / Threading</ul>
                  <li>Eyebrow</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve well-groomed eyebrows with professional waxing or threading techniques. Choose the method that suits you best.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Chin wax</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from the chin area using waxing techniques, providing a smooth and clean look.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Lip</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Get rid of upper lip hair with waxing or threading methods, ensuring a hair-free and smooth appearance.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Full face</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted facial hair from multiple areas such as eyebrows, upper lip, chin, and cheeks using waxing or threading techniques.</li>
                  <li>Price:<b>K300</b></li>
                  <br />

                  <li>Underarm</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve smooth and hair-free underarms with professional waxing techniques.</li>
                  <li>Duration:10 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Full arm</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from both arms, ensuring a clean and smooth look.</li>
                  <li>Duration:20 mins</li>
                  <li>Price:<b>K300</b></li>
                  <br />

                  <li>Half arm</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from either the upper or lower arms, providing a neat and groomed appearance.</li>
                  <li>Duration:15 mins</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Tummy</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove excess hair from the abdominal area using professional waxing techniques, ensuring a smooth and hair-free tummy.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Eyebrow threading</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve well-defined eyebrows with the precision of threading, shaping your brows to perfection.</li>
                  <li>Price:<b>K150</b></li>
                  <br />


                  <li>Eyebrow thread & tint</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Combine eyebrow threading with tinting to enhance the shape and color of your eyebrows, providing a more defined and groomed look.</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Full face thread</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Utilize threading techniques to remove unwanted facial hair from multiple areas, including eyebrows, upper lip, chin, and cheeks.</li>
                  <li>Price:<b>K250</b></li>
                  <br />

                  <li>Chin thread</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from the chin area using threading techniques, ensuring a smooth and hair-free appearance.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Upper lip thread</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove upper lip hair using the precise method of threading, leaving your lip area smooth and hair-free.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Brow tint only</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Enhance the color of your eyebrows with professional tinting, defining and shaping your brows for a more prominent look.</li>
                  <li>Price:<b>K100</b></li>
                  <br />

                  <li>Full leg</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve smooth and hair-free legs with professional waxing techniques, ensuring a clean and silky appearance.</li>
                  <li>Duration:45 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Half leg</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from either the upper or lower legs, providing a smooth and groomed look.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K300</b></li>
                  <br />

                  <li>Bikini</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Tidy up the bikini area by removing unwanted hair using professional waxing techniques, ensuring a clean and confident look.</li>
                  <li>Duration:20 mins</li>
                  <li>Price:<b>K250</b></li>
                  <br />

                  <li>Brazilian</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Achieve a clean and hair-free bikini area by removing all hair using professional waxing techniques.</li>
                  <li>Duration:25 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Hollywood</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove all hair from the bikini area, leaving a smooth and hair-free finish using professional waxing techniques.</li>
                  <li>Duration:35 mins</li>
                  <li>Price:<b>K400</b></li>
                  <br />

                  <li>Full back</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Get rid of unwanted hair from the entire back area using professional waxing techniques, providing a clean and smooth appearance.</li>
                  <li>Duration:40 mins</li>
                  <li>Price:<b>K500</b></li>
                  <br />

                  <li>Chest</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Remove unwanted hair from the chest area using professional waxing techniques, ensuring a clean and groomed look.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K350</b></li>
                  <br />

                  <ul className="bold-text">Vagacial</ul>
                  <li>Vagacial</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Revitalize and rejuvenate the skin in the bikini area with a specialized treatment. This service includes exfoliation, extractions, mask application, and moisturization for a refreshed and renewed appearance.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K250</b></li>


              <ul className="bold-text">Teens’/ Kids</ul>
                  <li>Teen’s Pedi</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Give your teenager's feet a pampering treat with a pedicure service tailored to their needs. This service includes nail shaping, cuticle care, and a polish application.</li>
                  <li>Duration:45 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Teen’s mani</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Spoil your teenager with a manicure designed to beautify their nails. This service includes nail shaping, cuticle care, and a polish application.</li>
                  <li>Duration:30 mins</li>
                  <li>Price:<b>K150</b></li>
                  <br />

                  <li>Teen’s facial</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Introduce your teenager to skincare with a customized facial treatment. This service includes cleansing, exfoliation, mask application, and moisturization, promoting healthy and radiant skin.</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Teen’s massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Provide your teenager with a soothing and relaxing massage to release tension and promote overall well-being. This service focuses on their specific areas of concern.</li>
                  <li>Price:<b>K200</b></li>
                  <br />

                  <li>Teen’s package (massage, mani & Pedi)</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Treat your teenager to the ultimate pampering session with a package that includes a massage, manicure, and pedicure. A perfect way to unwind and rejuvenate.</li>
                  <li>Price:<b>K600</b></li>
                  <br />

                  <li>Kids facial</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Introduce your child to the importance of skincare with a gentle and nourishing facial treatment. This service includes cleansing, gentle exfoliation, mask application, and moisturization.</li>
                  <li>Price:<b>K180</b></li>
                  <br />

                  <li>Kids massage</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Help your child relax and unwind with a gentle massage. This service promotes relaxation and soothing comfort.</li>
                  <li>Price:<b>K180</b></li>
                  <br />

                  <li>Kids package (massage, mani & Pedi)</li>
                  <Divider sx={{ borderBottomWidth: '3px', width:'5%' }} variant="left" />
                  <li>Treat your child to a special package that includes a massage, manicure, and pedicure. It's a fun and enjoyable experience that will leave them feeling pampered and happy.</li>
                  <li>Price:<b>K500</b></li>

              </ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Spa;
