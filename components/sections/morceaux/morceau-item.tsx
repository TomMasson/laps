"use client";

import WavesurferPlayer from "@wavesurfer/react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import Image from "next/image";
import { Morceau as MoerceauType } from "@/backend/morceaux";
import styles from "./morceau-item.module.scss";
import { useState } from "react";
import WaveSurfer from "wavesurfer.js";

type MorceauCardProps = {
	song: MoerceauType;
	songs: object[];
	setSongs: any;
	onPlayPause: (arg0: number) => void;
};

export default function Morceau({
	song,
	songs,
	setSongs,
	onPlayPause,
}: MorceauCardProps) {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const onReady = (ws: WaveSurfer) => {
		songs[song.id] = ws;

		setSongs(songs);
	};

	return (
		<div className={styles.container}>
			<div className={styles.control}>
				<Image
					className={styles.image}
					src={`/tracks/${song.img ?? "default.png"}`}
					fill
					alt={`Photo du morceau : ${song.titre}`}
				/>
				<div
					className={styles.playBtn}
					onClick={() => onPlayPause(song.id)}
				>
					{isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
				</div>
			</div>
			<div className={styles.sound}>
				<div className={styles.titre}>{song.titre.toUpperCase()}</div>
				<div className={styles.player}>
					<WavesurferPlayer
						height={100}
						waveColor="gray"
						progressColor="violet"
						url={song.url}
						barWidth={5}
						barRadius={30}
						barGap={3}
						normalize
						onReady={onReady}
						onPlay={() => setIsPlaying(true)}
						onPause={() => setIsPlaying(false)}
					/>
				</div>
			</div>
		</div>
	);
}
