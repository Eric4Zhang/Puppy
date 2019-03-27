import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import jQuery from "jquery";

export default function Chapter(props) {
  const getBibleApi = "https://getbible.net/json?";
  const version = "cus";
  const book = props.match.params.book;
  const chapterIndex = props.match.params.chapter;
  const verseIndex = props.verse || "1";


  const [verses, setVerses] = useState({});
  const [title, setTitle] = useState("");

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
    setTitle(title);
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
    <Container>
      <h2>{title}</h2>
      {Object.keys(verses).map(v => (
        <span key={verses[v].verse_nr}>
          <span className="text-muted font-weight-light">{verses[v].verse_nr} </span>
          <span>{verses[v].verse}</span>
        </span>
      ))}
    </Container>
  );
}
