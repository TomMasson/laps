import styles from "./article-list.module.scss";

const Articles = () => {
	return (
		<div className={styles.articles}>
			<p>
				Tant qu'on a pas d'articles, cette section va disparaître (au
				prochain déploiement).
			</p>
		</div>
	);
};

export default Articles;
