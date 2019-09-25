import React from "react";
import styles from "./Activity.module.scss";

function Activity(props) {
    return (
        <li className={styles.activity}>
            <img src={require("../../assets/Nyheder/" + props.activity.id + ".jpg")} alt="img" />
            <h2>{props.activity.title}</h2>
            <p>{props.activity.content}</p>
            <a href="https://www.moellerupgods.dk">Læs mere her</a>
        </li>
    );
}

export default Activity;