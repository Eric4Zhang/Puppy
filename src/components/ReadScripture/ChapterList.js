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
                <Card.Title>{i}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </Container>
    </div>
  );
}
