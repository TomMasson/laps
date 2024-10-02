import Section, { ISection } from "./section";
import styles from "./section-noire.module.scss";

const BlackSection = ({ children, titre, description }: ISection) => {
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
};

export default BlackSection;
