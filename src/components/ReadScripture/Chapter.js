import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import * as catalog from "./ScriptureInfo.json";
import jQuery from "jquery";
import ReactTouchEvents from "react-touch-events";
import { ArrowRightCircle, ArrowLeftCircle } from "react-feather";


export default function Chapter(props) {
  const getBibleApi = "https://getbible.net/json?";
  const version = "cus";
  const book = props.match.params.book;
  const chapterIndex = props.match.params.chapter;
  
  const [verses, setVerses] = useState({});
  
  const bookName= localStorage.getItem("book");
  const title = Object.keys(catalog.oldTestament).indexOf(bookName) === -1 ? catalog.newTestament[bookName].fullName : catalog.oldTestament[bookName].fullName;
  const videoUrl = Object.keys(catalog.bibleProject).indexOf(bookName+chapterIndex) === -1 ? null : catalog.bibleProject[bookName+chapterIndex].youTubeLink.replace("https://youtu.be", "https://www.youtube.com/embed");
  const classNames = videoUrl === null ? "d-none" : "mt-2 p-5";

  function parseJson (data) {
    var verses;
    if (data.type === "chapter") {
      verses = data.chapter;
    }
    if (data.type === "verse") {
      verses = data.book[0].chapter;
    }
    setVerses(verses);
  }

  function handleLeftTap(){
    props.history.goBack();
  }

  function handleRight(){
    props.history.push(props.location.pathname.replace(/([^/]*)$/, (parseInt(chapterIndex)+ 1).toString()));
  }

  function handleSwipe(direction){
    switch(direction){
      case "left":
        handleLeftTap();
        break;
      case "right":
        handleRight();
        break;
      default:
        
    }
  }

  useEffect(() => {
    jQuery.ajax({
        url: getBibleApi,
        dataType: 'jsonp',
        data: 'p=' + book + chapterIndex + "&v=" + version,
        jsonp: 'getbible',
        success: parseJson,
        error: function(){
        }
    });
  }, [book, chapterIndex]);

  return (
    <Container className="mt-2 p-5">      
      <h2>{title + " : " + chapterIndex}</h2>
      <Container  className={classNames}>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            title="the Bible Project"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          />
        </ResponsiveEmbed>
      </Container>
      
      <ReactTouchEvents
        onTap={()=> handleRight()}
        onSwipe={(direction)=>handleSwipe(direction)}
      >
      <Row>
        <Col sm={1} ><Button variant="outline-secondary h-100" className="border-0" onClick={()=>handleLeftTap()}><ArrowLeftCircle/></Button></Col>
        <Col>
        <Container>
          {Object.keys(verses).map(v => (
            <span key={verses[v].verse_nr}>
              <span className="text-muted font-weight-light">{verses[v].verse_nr}. </span>
              <span>{verses[v].verse}</span>
            </span>
          ))}
        </Container>
        </Col>
        <Col sm={1}><Button variant="outline-secondary" className="border-0 h-100" onClick={()=>handleRight()}><ArrowRightCircle/></Button></Col>
      </Row>
      </ReactTouchEvents>
    </Container>
  );
}
