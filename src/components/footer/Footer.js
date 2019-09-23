import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={"container " + styles.flex}>
                <div className="address">
                    <p>Møllerup Gods</p>
                    <p>Møllerupvej 26</p>
                    <p>8410 Rønde</p>
                </div>
                <div className="contact">
                    <p>Telefon 87 58 69 00</p>
                    <p>info@moellerup.dk</p>
                </div>
                <div className="text">
                    <p>
                        Tekst Lone Rubin
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;