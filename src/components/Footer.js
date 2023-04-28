import React from "react";
import "../styles/Footer.css"
const Footer = () => {
  return(
    <div className="w3-container">
      <footer className="footer1">
        <div class="row">
         <div class="col-sm-2">
           <img src="http://roundb.finance/wp-content/uploads/2023/02/Picture2-1-1536x1232.jpg" class="img" alt="..."/>
           </div>
           <div class="col-sm-4">
           <h2 style={{fontFamily:"'Roboto', sans-serif",fontSize:"27px",fontWeight:"400",color:"#FFFFFF"}}>A question? A specific need?</h2>
           </div>
          <div class="col">
            <button class="button:hover" data-bs-toggle="modal"data-bs-target="#talk-modal">Talk with us</button>
          </div>
        </div>
      </footer>
      <footer className="footer2">
        <div class="row ">
          <div class="col-sm-3">
            <h2 style={{fontFamily:"'Roboto', sans-serif",fontSize:"15px",fontWeight:"600",color:"white"}}>ACG Internet Websites</h2>
            </div>
              <div class="col-sm-3">
                <h2 style={{fontFamily:"'Roboto', sans-serif",fontSize:"14px",fontWeight:"300",color:"#B3B3B3"}}>| ACG Investment Fund | ACG Real Estate</h2>
              </div>
        </div>
      </footer>
      <hr />
      <div className="sticky-footer">This is a sticky footer</div>
      </div>
    );
  };
   
export default Footer;

