import Image from "next/image";

type LogoProps = {
	size?: number;
	isBlack?: boolean;
};

export default function Logo({ size, isBlack }: LogoProps) {
	const src = `/images/logo${isBlack ? "_noir" : ""}.png`;
	return size ? (
		<Image src={src} height={size} width={size} alt="Logo LAPS" />
	) : (
		<Image src={src} fill alt="Logo LAPS" />
	);
}
