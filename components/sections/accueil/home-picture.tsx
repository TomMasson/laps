import Image from "next/image";
import styles from "./home-picture.module.scss";

export default function HomePicture() {
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				src="/images/cover-home.png"
				fill
				alt="Photo du groupe LAPS"
			/>
			<div className={styles.centeredText}>
				<div className={styles.blurr}>
					<p className={styles.text}>LAPS</p>
				</div>
			</div>
		</div>
	);
}
