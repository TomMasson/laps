import Image from "next/image";
import styles from "./home-picture.module.scss";

const HomePicture = () => {
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				src="/images/cover-home.png"
				fill
				alt="Photo du groupe LAPS
"
			/>
		</div>
	);
};

export default HomePicture;
