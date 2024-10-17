import Header from "./section-header";
import styles from "./section.module.scss";

export interface SectionType {
	titre: string;
	description: string;
	children?: JSX.Element | string;
	color?: string;
	margins?: boolean;
	isBlack?: boolean;
}

export default function Section({
	children,
	titre,
	description,
	color,
	margins = true,
	isBlack = false,
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
					isBlack={isBlack}
				/>
				{children}
			</div>
		</>
	);
}
