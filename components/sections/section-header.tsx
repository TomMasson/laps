import styles from "./section-header.module.scss";

interface ISectionHeader {
	titre: string;
	sousTitre: string;
	color?: string;
}

const SectionHeader = ({ titre, sousTitre, color }: ISectionHeader) => {
	return (
		<div className={styles.container}>
			{color && (
				<div className={`${styles.block} ${styles[`${color}`]}`}></div>
			)}
			<div className={styles.titre}>{titre}</div>
			<div className={styles.sousTitre}>{sousTitre}</div>
		</div>
	);
};

export default SectionHeader;
