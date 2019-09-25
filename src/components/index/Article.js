import React from "react";
import styles from "./News.module.scss";
import { Link } from "react-router-dom";

function Article(props) {
    return (
        <li className={styles.article} key={props.article.id}>
            <img src={(`/Artikel/${props.article.id}.png`)} alt="img" />
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <Link to={`/article/${props.article.id}`}>Læs mere her</Link>
        </li>
    );
}

export default Article;