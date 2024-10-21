import Image from "next/image";
import Link from "next/link";
import styles from "./music-icon.module.scss";

export type MusicIconProps = {
	url: string;
	type: string;
	img: string;
};

export default function MusicIcon({ url, type, img }: MusicIconProps) {
	return (
		<div className={styles.circleIcon}>
			<Link href={url}>
				<Image
					fill
					src={`/images/musique/${img}`}
					alt={`Logo ${type}`}
				/>
			</Link>
		</div>
	);
}
