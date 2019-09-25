import React, { useContext } from "react";
import styles from "./NewsContainer.module.scss";
import Article from "./News";
import { ArticleContext } from "../../context/ArticleContext";

function Articles() {
    const articles = useContext(ArticleContext);
    const articleList = articles.map(article =>
        <Article key={article.id} article={article} />
    );
    return (
        <ul className={styles.newsContainer}>
            {articleList}
        </ul>
    );
}

export default Articles;