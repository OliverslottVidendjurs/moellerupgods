import React, { useState } from "react";
import styles from "./Activities.module.scss";
import Activity from "./Activity";

function Activities() {
    const [activities] = useState([{
        id: 1,
        title: "Møllerup Hamp",
        content: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje."
    },
    {
        id: 2,
        title: "Møder & events",
        content: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet."
    },
    {
        id: 3,
        title: "Fest på kroen",
        content: "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer."
    },
    {
        id: 4,
        title: "Rundvisninger",
        content: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. "
    },
    {
        id: 5,
        title: "Hamp hudpleje",
        content: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø."
    },
    {
        id: 6,
        title: "Hamp fødevarer",
        content: "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. "
    },
    {
        id: 7,
        title: "Møllerup bogen",
        content: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. "
    },
    {
        id: 8,
        title: "Møllerup jagt",
        content: "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt."
    },
    {
        id: 9,
        title: "Ferie for 40",
        content: "Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool"
    },
    {
        id: 10,
        title: "Bolig på landet",
        content: "Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund."
    },
    {
        id: 11,
        title: "Hestepension",
        content: "Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald."
    },
    {
        id: 12,
        title: "Verdensballetten",
        content: "Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. "
    }
    ]);
    let activityList = activities.map(activity => 
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