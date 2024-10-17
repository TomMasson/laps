import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./spotify-button.module.scss";
import { InfosSpotifyArtiste } from "@/backend/membres";

export type SpotifyLinkButton = {
	infos: InfosSpotifyArtiste;
};

export default function SpotifyButton({ infos }: SpotifyLinkButton) {
	return (
		<div className={styles.spotify}>
			<Link href={infos.url} className={styles.btn}>
				<FontAwesomeIcon icon={faSpotify} className={styles.logo} />
				<div className={styles.text}>
					<p>{infos.nom}</p>
				</div>
			</Link>
		</div>
	);
}
