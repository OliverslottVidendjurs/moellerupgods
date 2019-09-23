import React, { useState } from "react";
import styles from "./NewsContainer.module.scss";
import img1 from "../../assets/Artikel/1.jpg";
import img2 from "../../assets/Artikel/2.png";
import img3 from "../../assets/Artikel/3.png";
import img4 from "../../assets/Artikel/4.png";
import News from "./News";

function NewsContainer() {
    const [articles, setArticles] = useState([{
        id: 1,
        img: img1,
        title: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften",
        content: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020"
    },
    {
        id: 2,
        img: img2,
        title: "Køb vores hampeprodukter",
        content: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen.."
    },
    {
        id: 3,
        img: img3,
        title: "Verdensballetten 2019",
        content: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods"
    },
    {
        id: 4,
        img: img4,
        title: "Historien om Møllerup Gods",
        content: "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven."
    }
    ]);
    let articleList = articles.map(article =>
        <News article={article} />
    );
    return (
        <ul className={styles.newsContainer}>
            {articleList}
        </ul>
    );
}

export default NewsContainer;