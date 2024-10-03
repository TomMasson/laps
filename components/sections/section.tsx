import Header from "./section-header";
import styles from "./section.module.scss";

export interface SectionType {
	titre: string;
	description: string;
	children?: JSX.Element | string;
	color?: string;
}

export default function Section({
	children,
	titre,
	description,
	color,
}: SectionType) {
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
}
