import React, { useContext } from "react";
import styles from "./Activities.module.scss";
import Activity from "./Activity";
import { ActivityContext } from "../../context/ActivityContext";

function Activities() {
    const activities = useContext(ActivityContext);
    const activityList = activities.map(activity => 
        <Activity key={activity.id} activity={activity}/> 
    );
    return (
        <div>
            <h2>Møllerup Gods tilbyder en perlerække af muligheder</h2>
            <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            <ul className={styles.list}>
                {activityList}
            </ul>
        </div>
    );
}

export default Activities;