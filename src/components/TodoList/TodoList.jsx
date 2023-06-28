import React, { useState } from "react";
import ListElement from '../ListElement/ListElement'
import HeaderElement from "../HeaderElement/HeaderElement";
import ListButtons from "../ListButtons/ListButtons";

const TodoList = function (props) {
    

    

    return (
        <div className="app">
            
            <HeaderElement {...props} />

            <ListElement {...props}/>

            <ListButtons {...props} />
        </div>

    )
}

export default TodoList