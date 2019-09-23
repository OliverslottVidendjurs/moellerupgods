import React from "react";
import Intro from "./Intro";
import Articles from "./NewsContainer";
import Activities from "./Activities";
import styles from "./Index.module.scss";
import Outro from "./Outro";

function Index() {
    return (
        <div className={styles.index}>
            <Intro />
            <Articles />
            <div className={styles.divider}></div>
            <Activities />
            <Outro />
        </div>
    );
}

export default Index;