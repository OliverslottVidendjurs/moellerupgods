import React, { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import Article from "../index/Article";

function ArticlePage(props) {
    const articles = useContext(ArticleContext);
    let id = +props.match.params.id;

    return (
        <div>
            <ul>
                <Article article={articles.find(x => x.id === id)} />
            </ul>
        </div>
    );
}

export default ArticlePage;