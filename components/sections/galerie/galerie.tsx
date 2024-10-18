import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 15;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Galerie() {
	return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
