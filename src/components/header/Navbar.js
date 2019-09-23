import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    {/* https://github.com/reactjs/react-router-tutorial/issues/316#issuecomment-479320692 */}
                    <NavLink activeClassName={styles.active} exact to="/">Velkommen</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/verdensballetten">Verdensballetten</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/news">Nyheder</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/events">Events og mødefaciliteter</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/gaester">Hvad siger vores gæster</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/about">Om Møllerup Gods</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/contact">Kontakt os</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/webshop">Webshop</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;