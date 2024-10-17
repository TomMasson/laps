import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.scss";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={styles.footerContent}>
					<div className={styles.blockLaps}>
						<div className={styles.logo}>
							<Logo size={90} />
						</div>
						<div className={styles.laps}>LAPS</div>
					</div>
					<div className={styles.contact}>
						<p className={styles.title}>Contact</p>
						<p className={styles.link}>
							<a href="mailto:soin.record@gmail.com">
								E-mail : soin.record@gmail.com
							</a>
						</p>
						<p className={styles.link}>
							<Link href="https://www.instagram.com/laps69k/">
								Instagram : @laps69k
							</Link>
						</p>
						<p className={styles.link}>
							<Link href="https://www.linktr.ee/laps69k/">
								Linktree : Laps69k
							</Link>
						</p>
					</div>
					<div className={styles.reseaux}>
						<div className={styles.titleLinks}>Suivez-nous !</div>
						<div className={styles.logos}>
							<SocialIcon
								url="https://open.spotify.com/intl-fr/artist/1YpXP9PpvhB9XyZLg8nznb?si=x5NlpOqEQvOmMiSa1oF9_A"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://soundcloud.com/soinrecord"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://www.instagram.com/laps69k/"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://www.linktr.ee/laps69k/"
								bgColor="white"
								fgColor="black"
							/>
							<SocialIcon
								url="https://www.facebook.com/laps.laprophetieduson"
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
}
