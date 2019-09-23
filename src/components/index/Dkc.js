import React from "react";
import styles from "./Dkc.module.scss";

function Dkc() {
    return (
        <div className={styles.dkc}>
            <img src="wideLogo.png" alt="logo" />
            <a href="https://dkbs.dk">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</a>
        </div>
    );
}

export default Dkc;