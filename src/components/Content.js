import React, { Component } from "react";
import "../styles/Content.css"


class Content extends Component {
  render() {
    return (
      <>
      <div class="container-text text-center py-4 px-4">
        <div class="row"/>
          <div class="col1"/>
            <h2 style={{fontFamily:"'Roboto', sans-serif",fontSize:"35px",fontWeight:"normal",color:"#202020D6"}}>Russia / Ukraine</h2>
            <br />
            <div class="col2"/>
             <p style={{fontFamily:"'Roboto', sans-serif",fontSize:"20px",color:"grey"}}>ACG adapts to cope with this situation and to provide you with appropriate information</p>
             
             <div class="col3"/>
             <button class="button:hover" data-bs-toggle="modal"data-bs-target="#talk-modal">Talk with an advisor</button>
            
          </div>
    
    
      
      </>
     
        
     
    );
  }
}

export default Content;
