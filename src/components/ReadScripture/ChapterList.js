import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function ChapterList(props) {
  const chapters = parseInt(localStorage.getItem("chaptersCount"));
  var chapterIndex = 1;
  var chaptersArray = [];
  while (chaptersArray.push(chapterIndex++) < chapters) {}

  return (
    <div>
      <Container className="my-flexWrap">
      <Container className="my-2 p-2 sticky-top bg-light shadow">
        <Link className="mr-2" to={"/omac-app/bible"}>
          卷
        </Link>
        <Link to={"/omac-app/bible/" + localStorage.getItem("book")}>章</Link>
      </Container>
        {chaptersArray.map(i => (
          <Card
            className="mx-1 my-1"
            style={{ width: "4rem", height: "4rem" }}
            key={i}
          >
            <Link
              to={"/omac-app/bible/" + props.match.params.book + "/" + i}
              onClick={() => localStorage.setItem("chapter", i)}
            >
              <Card.Body>
                <Card.Title style={{whiteSpace: "nowrap"}}>{i}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </Container>
    </div>
  );
}
