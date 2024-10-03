import CarteMembre from "./carte-membres";
import styles from "./liste-membre.module.scss";
import membres, { membre } from "@/backend/membres";

export default function ListeMembres() {
	return (
		<div className={styles.container}>
			{membres.map((membre: membre, index: number) => (
				<CarteMembre membre={membre} key={index} />
			))}
		</div>
	);
}
