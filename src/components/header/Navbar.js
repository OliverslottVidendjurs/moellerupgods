import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [links] = useState([{
        to: "/",
        exact: true,
        text: "Velkommen"
    },
    {
        to: "/verdensballetten",
        exact: false,
        text: "Verdensballetten"
    },
    {
        to: "/news",
        exact: false,
        text: "Nyheder"
    },
    {
        to: "/events",
        exact: false,
        text: "Events og mødefaciliteter"
    },
    {
        to: "/gaester",
        exact: false,
        text: "Hvad siger vores gæster"
    },
    {
        to: "/about",
        exact: false,
        text: "Om Møllerup Gods"
    },
    {
        to: "/contact",
        exact: false,
        text: "Kontakt os"
    },
    {
        to: "/webshop",
        exact: false,
        text: "Webshop"
    }]);

    const liList = links.map(link => 
        <li>
            <NavLink onClick={() => setShowMenu(false)} activeClassName={styles.active} exact={link.exact} to={link.to}>{link.text}</NavLink>
        </li>    
    )

    return (
        <nav className={styles.navbar}>
            <ul className={(showMenu ? styles.show : "")}>
                {liList}
            </ul>
            <i onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className={"fas fa-bars " + styles.burger}></i>
        </nav>
    );
}

export default Navbar;