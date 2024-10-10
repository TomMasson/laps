"use client";

import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import Image from "next/image";
import styles from "./morceaux-list.module.scss";

const Morceaux = () => {
	const [wavesurfer, setWavesurfer] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const onReady = (ws: any) => {
		setWavesurfer(ws);
		setIsPlaying(false);
	};

	const onPlayPause = () => {
		wavesurfer && wavesurfer.playPause();
	};

	return (
		<div className={styles.container}>
			<div className={styles.control}>
				<Image
					className={styles.image}
					src={"/tracks/default.png"}
					fill
					alt="Photo d'un morceau par défaut"
				/>
				<div className={styles.playBtn} onClick={onPlayPause}>
					{isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
				</div>
			</div>
			<div className={styles.sound}>
				<div className={styles.titre}>TITRE MORCEAU</div>
				<div className={styles.player}>
					<WavesurferPlayer
						height={100}
						waveColor="violet"
						url="/tracks/TOM ST ROMAN Mix.mp3"
						barWidth={5}
						barRadius={30}
						barGap={3}
						normalize={true}
						onReady={onReady}
						onPlay={() => setIsPlaying(true)}
						onPause={() => setIsPlaying(false)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Morceaux;
