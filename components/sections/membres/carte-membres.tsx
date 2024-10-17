import { membre } from "@/backend/membres";
import styles from "./carte-membres.module.scss";
import Image from "next/image";
import SpotifyButton from "../UI/spotify-button";

export enum AlignementType {
	left = "left",
	right = "right",
}

interface CarteMembre {
	membre: membre;
	alignContent: AlignementType;
}

export default function CarteMembre({ membre, alignContent }: CarteMembre) {
	return (
		<div className={`${styles.container} ${styles[alignContent]}`}>
			<Image
				src={`/images/membres/${membre.img ?? "default.png"}`}
				width={176}
				height={178}
				alt={`Photo de profil de ${membre.nom}`}
			/>
			<div className={styles.infos}>
				<div className={styles.nom}>{membre.nom}</div>
				<div className={styles.desc}>{membre.desc}</div>
				{membre.spotify && <SpotifyButton infos={membre.spotify} />}
			</div>
		</div>
	);
}
