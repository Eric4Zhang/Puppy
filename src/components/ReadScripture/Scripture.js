import React from "react";
import {Route} from "react-router-dom";
import BooksCatalog from "./BooksCatalog";
import ChapterList from "./ChapterList";
import Chapter from "./Chapter";

export default function Scripture(){
    return (
        <div>
            <Route exact path="/omac-app/bible" component={BooksCatalog}/>
            <Route exact path="/omac-app/bible/:book" component={ChapterList}/>
            <Route exact path="/omac-app/bible/:book/:chapter" component={Chapter}/>
        </div>
    );
}