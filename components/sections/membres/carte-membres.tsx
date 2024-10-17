import { membre } from "@/backend/membres";
import styles from "./carte-membres.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import SpotifyButton from "../UI/spotify-button";

export enum align {
	left = "left",
	right = "right",
}

interface CarteMembre {
	membre: membre;
	alignContent: align;
}

export default function CarteMembre({ membre, alignContent }: CarteMembre) {
	return alignContent === align.left ? (
		<div className={styles.container}>
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
	) : (
		<div className={`${styles.container} ${styles[alignContent]}`}>
			<div className={styles.infos}>
				<div className={styles.nom}>{membre.nom}</div>
				<div className={styles.desc}>{membre.desc}</div>
				{membre.spotify && <SpotifyButton infos={membre.spotify} />}
			</div>
			<Image
				src={`/images/membres/${membre.img ?? "default.png"}`}
				width={176}
				height={178}
				alt={`Photo de profil de ${membre.nom}`}
			/>
		</div>
	);
}
