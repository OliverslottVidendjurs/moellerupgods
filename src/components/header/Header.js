import React from "react";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";

function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.imgWrapper}>
                <img src="logo.png" alt="logo"/>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header;