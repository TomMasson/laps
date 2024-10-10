"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./EmblaCarousel.module.scss";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

export default function EmblaCarousel({ slides, options }: PropType) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	return (
		<section className={styles.embla}>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					{slides.map((index) => (
						<div className={styles.emblaSlide} key={index}>
							<div className={styles.emblaSlideContent}>
								<Image
									src={"/images/carousel.jpeg"}
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
