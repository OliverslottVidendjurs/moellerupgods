import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Velkommen</Link>
                </li>
                <li>
                    <Link to="/">Verdensballetten</Link>
                </li>
                <li>
                    <Link to="/">Nyheder</Link>
                </li>
                <li>
                    <Link to="/">Events og mødefaciliteter</Link>
                </li>
                <li>
                    <Link to="/">Hvad siger vores gøster</Link>
                </li>
                <li>
                    <Link to="/">Om Møllerup Gods</Link>
                </li>
                <li>
                    <Link to="/">Kontakt os</Link>
                </li>
                <li>
                    <Link to="/">Webshop</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;