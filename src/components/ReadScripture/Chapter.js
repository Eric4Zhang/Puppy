import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import * as catalog from "./ScriptureInfo.json";
import jQuery from "jquery";
import {history} from "react-router-dom";
import ReactTouchEvents from "react-touch-events";


export default function Chapter(props) {
  const getBibleApi = "https://getbible.net/json?";
  const version = "cus";
  const book = props.match.params.book;
  const chapterIndex = props.match.params.chapter;
  
  const [verses, setVerses] = useState({});
  
  const bookName= localStorage.getItem("book");
  const title = Object.keys(catalog.oldTestament).indexOf(bookName) === -1 ? catalog.newTestament[bookName].fullName : catalog.oldTestament[bookName].fullName;
  const videoUrl = Object.keys(catalog.bibleProject).indexOf(bookName+chapterIndex) === -1 ? null : catalog.bibleProject[bookName+chapterIndex].youTubeLink.replace("https://youtu.be", "https://www.youtube.com/embed");
  const classNames = videoUrl === null ? "mt-5 d-none" :  "mt-5";


  function parseJson (data) {
    var verses;
    var title;
    if (data.type === "chapter") {
      verses = data.chapter;
      title = data.book_name + " : " + data.chapter_nr;
    }
    if (data.type === "verse") {
      verses = data.book[0].chapter;
      title = data.book[0].book_name + " : " + data.book[0].chapter_nr;
    }
    setVerses(verses);
  }

  function handleLeftTap(){
    props.history.goBack();
  }

  function handleRight(){
    props.history.push(props.location.replace( "~/([^/]*)$~", parseInt(chapterIndex)+ 1));
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
      <h2>{title}</h2>
      <iframe
        title="youTube"        
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
        className={classNames}
      />
      <ReactTouchEvents
      onTap={()=> handleRight()}
      onSwipe={(direction)=>handleSwipe(direction)}
      >
      <Container className="mt-5">
      {Object.keys(verses).map(v => (
        <span key={verses[v].verse_nr}>
          <span className="text-muted font-weight-light">{verses[v].verse_nr}. </span>
          <span>{verses[v].verse}</span>
        </span>
      ))}
      </Container>
      </ReactTouchEvents>
    </Container>
  );
}
