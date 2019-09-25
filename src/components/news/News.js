import React, { useEffect, useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import Article from "../index/News";

function News2(props) {
    const articles = useContext(ArticleContext);
    let id = +props.match.params.id;

    useEffect(() => {
        console.log(articles[id]);
    });

    return (
        <div>
            <ul>
                <Article article={articles.find(x => x.id === id)} />
            </ul>
        </div>
    );
}

export default News2;