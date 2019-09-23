import React from "react";
import Dkc from "./Dkc";
import Instagram from "./Instagram";
import Newsletter from "./Newsletter";
import styles from "./Outro.module.scss";

function Outro(){
    return (
        <div>
            <Dkc/>
            <div className={styles.flex}>
                <Instagram/>
                <Newsletter/>
            </div>
        </div>
    );
}

export default Outro;