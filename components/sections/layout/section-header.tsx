import styles from "./section-header.module.scss";

interface SectionHeader {
	titre: string;
	sousTitre: string;
	color?: string;
	addMargin?: boolean;
}

export default function SectionHeader({
	titre,
	sousTitre,
	color,
	addMargin,
}: SectionHeader) {
	return (
		<div
			className={`${styles.container} ${
				addMargin ? styles.addMargin : ""
			}`}
		>
			{color && (
				<div className={`${styles.block} ${styles[`${color}`]}`}></div>
			)}
			<div className={styles.titre}>{titre}</div>
			<div className={styles.sousTitre}>{sousTitre}</div>
		</div>
	);
}
