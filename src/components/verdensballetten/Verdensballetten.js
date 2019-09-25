import React, { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import Article from "../index/Article";

function Verdensballetten() {
    const verdenBalletArticle = useContext(ArticleContext)[0];
    return (
        <div>
            <h1>verdensballetten</h1>
            <ul>
                <Article article={verdenBalletArticle} />
            </ul>
        </div>
    )
}

export default Verdensballetten;