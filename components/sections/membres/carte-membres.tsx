import { membre } from "@/backend/membres";
import styles from "./carte-membres.module.scss";
import Image from "next/image";

interface ICarteMembre {
	membre: membre;
	index: number;
}

const CarteMembre = ({ membre, index }: ICarteMembre) => {
	return (
		<div className={styles.container} key={index}>
			<Image
				src={`/images/membres/${membre.img ?? "default.png"}`}
				width={176}
				height={178}
				alt={`Photo de profil de ${membre.nom}`}
			/>
			<div className={styles.nom}>{membre.nom}</div>
			<div className={styles.desc}>{membre.desc}</div>
		</div>
	);
};

export default CarteMembre;
