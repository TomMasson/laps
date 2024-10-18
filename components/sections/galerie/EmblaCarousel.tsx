"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./EmblaCarousel.module.scss";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

export default function EmblaCarousel({ slides, options }: PropType) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		WheelGesturesPlugin(),
	]);

	return (
		<section className={styles.embla}>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					{slides.map((index) => (
						<div className={styles.emblaSlide} key={index}>
							<div className={styles.emblaSlideContent}>
								<Image
									className={styles.image}
									src={`/images/carousel/${index}.jpg`}
									alt="Image de carousel"
									fill
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
