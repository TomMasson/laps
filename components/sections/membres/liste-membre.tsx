import CarteMembre, { align } from "./carte-membres";
import styles from "./liste-membre.module.scss";
import { membres, membre } from "@/backend/membres";

export default function ListeMembres() {
	return (
		<div className={styles.container}>
			{membres.map((membre: membre, index: number) => (
				<CarteMembre
					membre={membre}
					key={index}
					alignContent={index % 2 === 0 ? align.left : align.right}
				/>
			))}
		</div>
	);
}
