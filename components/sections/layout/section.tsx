import Header from "./section-header";
import styles from "./section.module.scss";

export interface SectionType {
	titre: string;
	description: string;
	children?: JSX.Element | string;
	color?: string;
	margins?: boolean;
}

export default function Section({
	children,
	titre,
	description,
	color,
	margins = true,
}: SectionType) {
	return (
		<>
			<div
				className={`${styles.section} ${
					margins ? styles.maxWidth : ""
				}`}
			>
				<Header
					titre={titre}
					sousTitre={description}
					color={color ?? undefined}
					addMargin={margins ? false : true}
				/>
				{children}
			</div>
		</>
	);
}
