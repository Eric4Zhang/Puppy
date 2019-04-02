import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import BooksCatalog from "./BooksCatalog";
import ChapterList from "./ChapterList";
import Chapter from "./Chapter";
import Container from "react-bootstrap/Container";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./fade.css";

export default function Scripture() {
  return (
    <div className="my-fullPage">      
      <Route
        render={({location}) => (
          <TransitionGroup className="h-100">
            <CSSTransition classNames="page" timeout={300} key={location.key}>
              <Switch location={location}>
                <Route exact path="/omac-app/bible" component={BooksCatalog} />
                <Route
                  exact
                  path="/omac-app/bible/:book"
                  component={ChapterList}
                />
                <Route
                  exact
                  path="/omac-app/bible/:book/:chapter"
                  component={Chapter}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}
