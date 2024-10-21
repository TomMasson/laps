import { membre, MusicLink } from "@/backend/membres";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import MusicIcon from "../UI/music/music-icon";
import styles from "./carte-membres.module.scss";

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
				className={styles.photo}
				alt={`Photo de profil de ${membre.nom}`}
			/>
			<div className={styles.infos}>
				<div className={styles.nom}>{membre.nom}</div>
				<div className={styles.desc}>{membre.desc}</div>
				{membre.urls && (
					<div className={styles.musicLinks}>
						{membre.urls.map((link: MusicLink, i) => {
							switch (link.platform) {
								case "deezer":
									return (
										<MusicIcon
											key={i}
											url={link.url}
											type="deezer"
										/>
									);
								case "ytmusic":
									return (
										<MusicIcon
											key={i}
											url={link.url}
											type="ytmusic"
										/>
									);
								case "itunes":
									return (
										<SocialIcon
											key={i}
											url={link.url}
											network={link.platform}
											bgColor={"#FA233B"}
										/>
									);
								default:
									return (
										<SocialIcon
											key={i}
											url={link.url}
											network={link.platform}
										/>
									);
							}
						})}
					</div>
				)}
			</div>
		</div>
	);
}
