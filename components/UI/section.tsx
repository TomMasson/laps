import styles from "./section.module.scss";

interface ISection {
	children?: JSX.Element | string;
	color: string;
	titre: string;
	description: string;
}

const Section = ({ children, color, titre, description }: ISection) => {
	return (
		<div className={styles.section}>
			<div className={`${styles.block} ${styles[`${color}`]}`}></div>
			<div className={styles.titre}>{titre}</div>
			<div className={styles.description}>{description}</div>
			<div>{children}</div>
		</div>
	);
};

export default Section;
