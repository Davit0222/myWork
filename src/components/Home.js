import React from 'react';
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../src/images/3.jpg"
import image2 from "../../src/images/4.jpg"
import image3 from "../../src/images/5.jpg"
import image4 from "../../src/images/6.jpg"
import l1 from "../../src/images/l1.png"
import l8 from "../../src/images/l8.png"
import l4 from "../../src/images/l4.png"
import l5 from "../../src/images/l5.png"
import l6 from "../../src/images/l6.png"
import l7 from "../../src/images/l7.png"

import { Link } from 'react-router-dom';
const data = [
  { image:image1, title: "Noah's Ark" },
  { image:image2, title: "Noah's Ark " },
  { image:image3, title: "Bible" },
  { image:image4, title: "Christian" }
];
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className='h-screen bg-slate-600 pt-10'>
      <div className='h'>
      <Slider className='slider' {...settings}>
        {
          data.map((item, index) => {
            return(
            <div key={index} className='mb-4'>
              <div>
              <img src={item.image} alt={item.title} className='w-40 ' />
              </div>
              <div className='p-6'>
                <p className='font-semibold'>{item.title}</p>
              </div>
            </div>
          )
            })
        }
        </Slider>
      </div>
    </div>
      <div className='mission-container'>
        <div className='om1'>
          <a href='./About.js'><img src={l1} alt='Nohs' className='img-mission'></img></a>
          <h3>OUR MISSION</h3>
            <p>We exist to proclaim the Gospel of Jesus Christ by every effective means and to equip the church & others to do the same</p>
        </div>
        <div className='om2'>
        <a href='#'><img src={l4} alt='Nohs' className='img-mission'></img></a>
          <h3>GROW YOUR FAITH</h3>
            <p>Find direction and encouragement for your pursuit of the Way, the Truth, and the Life.</p>
        </div>
        <div className='om3'>
        <a href='#'><img src={l8} alt='Nohs' className='img-mission'></img></a>
          <h3>GIVE</h3>
            <p>We appreciate your prayers and partnership as we proclaim the Gospel worldwide. Every gift counts!</p>
        </div>
      </div>
      <div className='follow'>
        <p>International Evangelistic Association</p>
        <p>Armenia Ararat, Shahumyan street 51 , Ararat 0602</p>
        <p>Local: 70124-401231-234</p>
        <p>Toll Free: 1-877-247-2426</p>
        <p>BGEA is a registered 501(c)(3) non-profit organization.</p>
        <div className='follow-nav'>
        <nav>
        <ul className="nav-list-follow">
        
        <li><Link to="/">©2024 BGEA</Link></li>
        <li><Link to="/">Home</Link></li>

          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/about">Permission</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        </nav>
        </div>
        <div className='follow-logo'>
          <Link to="/"><img src={l5} alt='Nohs' className='follow-img'></img></Link>
          <Link to="/"><img src={l6} alt='Nohs' className='follow-img'></img></Link>
          <Link to="/"><img src={l7} alt='Nohs' className='follow-img'></img></Link>
        </div>
    </div>
    </>

);
}

export default Home;
