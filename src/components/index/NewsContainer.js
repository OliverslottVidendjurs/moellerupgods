import React, { useState } from "react";
import styles from "./NewsContainer.module.scss";
import Article from "./News";

function Articles() {
    const [articles] = useState([{
        id: 1,
        title: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften",
        content: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020"
    },
    {
        id: 2,
        title: "Køb vores hampeprodukter",
        content: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen.."
    },
    {
        id: 3,
        title: "Verdensballetten 2019",
        content: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods"
    },
    {
        id: 4,
        title: "Historien om Møllerup Gods",
        content: "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven."
    }
    ]);
    let articleList = articles.map(article =>
        <Article key={article.id} article={article} />
    );
    return (
        <ul className={styles.newsContainer}>
            {articleList}
        </ul>
    );
}

export default Articles;