import React from "react";
import Container from "react-bootstrap/Container";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import ReactContactForm from "react-mail-form";

export default function Contact() {
  return (
    <Container className="p-5, mt-2 text-left">    
    <Jumbotron content>
      <h1 style={{fontFamily:"impact"}} className="text-muted">Ottawa Mandarin Alliance Church</h1><br></br>
      <h3 className="text-muted">Localtion: 550 Codd's Rd. Ottawa ON K1K 2G8</h3>
      <h3 className="text-muted">Tel. +1 (613)236-7656</h3>
      <h3 className="text-muted">Email: secretary@OttawaMandarinAlliance.ca</h3>
      <h3 className="text-muted">Facebook: OMAC – Ottawa Mandarin Alliance Church</h3>
      <ResponsiveEmbed>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2799.0896512463014!2d-75.6347578!3d45.4478495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050f00ccfc03%3A0x3b6249c85397af4!2sOttawa+Mandarin+Alliance+Church!5e0!3m2!1sen!2sca!4v1553885829029!5m2!1sen!2sca"
          width="600"
          height="450"
          frameBorder="0"
          style={{border:"0"}}
          allowFullScreen="allowFullScreen"
        />
      </ResponsiveEmbed>

      <h2>如果您是新朋友，您也可以填写下表与我们联系:</h2>
      <h2>If you are new, you can contact us by filling up the form below:</h2>

      <ReactContactForm to="inigrid@hotmail.com">
        
      </ReactContactForm>
    </Jumbotron>
    
      
    </Container>
  );
}
