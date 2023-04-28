import React from "react";
import "../styles/Hero.css"

const Hero = () => (
  <>
 <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner py-3 px-3">
    <div class="carousel-item active ">
      <img src="http://roundb.finance/wp-content/uploads/2023/02/Welcome-Bienvenue_landscape_1280_612_withgradient.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption top-0 mt-8 ">
      <div class="slideInUp"><h5 style={{fontFamily:"'Roboto', sans-serif",fontSize:"42px",fontWeight:"400",color:"white"}}>Welcome to ACG group website</h5></div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://roundb.finance/wp-content/uploads/2023/02/Amundi_Objects_Telescope-1280_landscape_1280_612_withgradient.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption top-0  ">
      <div class="slideInUp"><h5 style={{fontFamily:"'Roboto', sans-serif",fontSize:"42px",fontWeight:"400",color:"white"}}>Expertise, Professionalism, Intergrity</h5>
      <br />
      <button class="button:" data-bs-toggle="modal"data-bs-target="#choose-modal">Choose ACG</button>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="http://roundb.finance/wp-content/uploads/2023/02/512922927-two-men-discussing-outside-large_landscape_1280_612_withgradient.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption top-0">
      <div class="slideInUp"><h5 style={{fontFamily:"'Roboto', sans-serif",fontSize:"42px",fontWeight:"400",color:"white"}}>RETHINK GROWTH IN 2023</h5></div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </>

);

export default Hero;

