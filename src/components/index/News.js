import React from "react";
import styles from "./News.module.scss";

function Article(props){
    return (
        <li className={styles.article + (props.article.id === 1 ? (" " + styles.main) : "")} key={props.article.id}>
            <img src={("Artikel/" + props.article.id + ".png")} alt="img"/>
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <a href="https://www.moellerupgods.dk">Læs mere her</a>
        </li>
    );
}

export default Article;