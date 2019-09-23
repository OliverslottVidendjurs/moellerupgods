import React from "react";
import styles from "./Newsletter.module.scss";

function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <h2>Tilmeld nyhedsbrev</h2>
            <div className={styles.requirement}>
                <span><span className={styles.red}>*</span> skal udfyldes</span>
            </div>
            <form action="TODO">
                <div className={styles.group}>
                    <label htmlFor="email">Email Address<span className={styles.red}> *</span></label>
                    <input id="email" name="email" type="email" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" />
                </div>
                <div>
                    <span>Vælg nyhedsbrev</span>
                </div>
                <button type="submit">Tilmeld</button>
            </form>
        </div>
    );
}

export default Newsletter;