import styles from "./section-header.module.scss";

interface SectionHeader {
	titre: string;
	sousTitre: string;
	color?: string;
}

export default function SectionHeader({
	titre,
	sousTitre,
	color,
}: SectionHeader) {
	return (
		<div className={styles.container}>
			{color && (
				<div className={`${styles.block} ${styles[`${color}`]}`}></div>
			)}
			<div className={styles.titre}>{titre}</div>
			<div className={styles.sousTitre}>{sousTitre}</div>
		</div>
	);
}
