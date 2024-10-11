"use client";

import { useState } from "react";
import { morceaux } from "@/backend/morceaux";
import Morceau from "./morceau-item";
import styles from "./morceaux-list.module.scss";
import WaveSurfer from "wavesurfer.js";

export default function Morceaux() {
	const [songs, setSongs] = useState<WaveSurfer[]>([]);

	const togglePlayPause = (songId: number) => {
		songs.map((song, index) => {
			if (index === songId) {
				song.playPause();
			} else {
				song.pause();
			}
		});
	};

	return (
		<div className={styles.container}>
			{morceaux &&
				morceaux.map((morceau, index) => (
					<Morceau
						key={index}
						song={morceau}
						songs={songs}
						setSongs={setSongs}
						onPlayPause={togglePlayPause}
					/>
				))}
		</div>
	);
}
