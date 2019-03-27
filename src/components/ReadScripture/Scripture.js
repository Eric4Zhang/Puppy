import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import BooksCatalog from "./BooksCatalog";
import ChapterList from "./ChapterList";
import Chapter from "./Chapter";
import Container from "react-bootstrap/Container";
import {CSSTransition} from "react-transition-group";
import "./fade.css";

export default function Scripture() {
  return (
    <div>
      <Container className="d-flex flex-row-reverse mr-5 mt-5 sticky-top">
        <Link to={"/omac-app/bible/" + localStorage.getItem("book")}>章</Link>
        <Link className="mr-2" to={"/omac-app/bible"}>
          卷
        </Link>
      </Container>
      <CSSTransition classNames="fade" timeout={300}>
        <Switch>
          <Route exact path="/omac-app/bible" component={BooksCatalog} />
          <Route exact path="/omac-app/bible/:book" component={ChapterList} />
          <Route
            exact
            path="/omac-app/bible/:book/:chapter"
            component={Chapter}
          />
        </Switch>
      </CSSTransition>
    </div>
  );
}
