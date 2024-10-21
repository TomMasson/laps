import Image from "next/image";
import Link from "next/link";
import styles from "./music-icon.module.scss";

export type MusicIconProps = {
	url: string;
	type: "deezer" | "ytmusic";
};

const IconUrls: Record<MusicIconProps["type"], string> = {
	ytmusic: "yt-music-icon.svg",
	deezer: "deezer-icon.png",
};

export default function MusicIcon({ url, type }: MusicIconProps) {
	return (
		<div className={styles.circleIcon}>
			<Link href={url}>
				<Image
					fill
					src={`/images/musique/${IconUrls[type]}`}
					alt={`Logo ${type}`}
				/>
			</Link>
		</div>
	);
}
