import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={styles.navbar}>
            <ul className={(showMenu ? styles.show : "")}>
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
            <i onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className={"fas fa-bars " + styles.burger}></i>
        </nav>
    );
}

export default Navbar;