import React from "react";
import styles from "./News.module.scss";

function Article(props){
    return (
        <li className={styles.article + (props.article.id === 1 ? (" " + styles.main) : "")} key={props.article.id}>
            <img src={require("../../assets/Artikel/" + props.article.id + ".png")} alt="img"/>
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <a href="#">Læs mere her</a>
        </li>
    );
}

export default Article;