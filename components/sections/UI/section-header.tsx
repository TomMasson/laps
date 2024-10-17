import Image from "next/image";
import styles from "./section-header.module.scss";
import Logo from "./logo";

interface SectionHeader {
	titre: string;
	sousTitre: string;
	color?: string;
	addMargin?: boolean;
	isBlack?: boolean;
}

export default function SectionHeader({
	titre,
	sousTitre,
	color,
	addMargin,
	isBlack,
}: SectionHeader) {
	return (
		<div
			className={`${styles.container} ${
				addMargin ? styles.addMargin : ""
			}`}
		>
			<div className={`${styles.blocks} ${color ? "" : styles.noBlock}`}>
				{color && (
					<div
						className={`${styles.block} ${styles[`${color}`]}`}
					></div>
				)}
				<div className={styles.logo}>
					<Logo isBlack={!isBlack} />
				</div>
			</div>
			<div className={styles.titres}>
				<div className={styles.titre}>{titre}</div>
				<div className={styles.sousTitre}>{sousTitre}</div>
			</div>
		</div>
	);
}
