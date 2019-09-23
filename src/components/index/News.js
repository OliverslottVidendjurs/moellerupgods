import React from "react";
import styles from "./News.module.scss";

//TODO: Rename to article?
function News(props){
    return (
        <li className={styles.article + (props.article.id === 1 ? (" " + styles.main) : "")} key={props.article.id}>
            <img src={props.article.img} alt="img"/>
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <a href="#">Læs mere her</a>
        </li>
    );
}

export default News;