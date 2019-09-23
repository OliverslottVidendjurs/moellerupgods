import React from "react";
import Slider from "./Slider";
import styles from "./Intro.module.scss";

function Intro(){
    return (
        <div className={styles.intro}>
            <Slider/>
        </div>
    );
}

export default Intro;