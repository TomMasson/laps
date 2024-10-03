import Section, { SectionType } from "./section";
import styles from "./section-noire.module.scss";

export default function BlackSection({
	children,
	titre,
	description,
}: SectionType) {
	return (
		<div className={styles.background}>
			<div className={styles.clipPath}>
				<div className={styles.centered}>
					<Section titre={titre} description={description}>
						{children}
					</Section>
				</div>
			</div>
		</div>
	);
}
