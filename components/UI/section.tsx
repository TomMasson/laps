import styles from "./section.module.scss";

interface ISection {
	children: string | JSX.Element;
	color: string;
	titre: string;
	description: string;
}

const Section = ({ children, color, titre, description }: ISection) => {
	return (
		<>
			<div className={`${styles.block} ${styles[`${color}`]}`}></div>
			<div className={styles.titre}>{titre}</div>
			<div className={styles.description}>{description}</div>
			<div>{children}</div>
		</>
	);
};

export default Section;
