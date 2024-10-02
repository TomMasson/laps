import Header from "./section-header";
import styles from "./section.module.scss";

export interface ISection {
	titre: string;
	description: string;
	children?: JSX.Element | string;
	color?: string;
}

const Section = ({ children, titre, description, color }: ISection) => {
	return (
		<>
			<div className={styles.section}>
				<Header
					titre={titre}
					sousTitre={description}
					color={color ?? undefined}
				/>
				{children}
			</div>
		</>
	);
};

export default Section;
