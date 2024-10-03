import { membre } from "@/backend/membres";
import styles from "./carte-membres.module.scss";
import Image from "next/image";

interface CarteMembre {
	membre: membre;
}

export default function CarteMembre({ membre }: CarteMembre) {
	return (
		<div className={styles.container}>
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
}
