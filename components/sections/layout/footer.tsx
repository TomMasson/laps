import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={styles.footerContent}>
					<div className={styles.laps}>LAPS</div>
					<div className={styles.contact}>
						<p className={styles.title}>Contact</p>
						<p>Adresse mail</p>
						<p>Instagram</p>
						<p>Linktree</p>
					</div>
					<div className={styles.reseaux}>
						<div className={styles.titleLinks}>Suivez-nous !</div>
						<div className={styles.logos}>
							<SocialIcon
								url="https://facebook.com"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://youtube.com"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://instagram.com"
								bgColor="white"
								fgColor="black"
							/>
						</div>
					</div>
				</div>
				<div className={styles.botLine}>LAPS - 2024</div>
			</div>
		</div>
	);
};

export default Footer;
