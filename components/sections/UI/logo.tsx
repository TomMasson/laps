import Image from "next/image";

type LogoProps = {
	size?: number;
	isBlack?: boolean;
};

export default function Logo({ size, isBlack }: LogoProps) {
	const src = `/images/logo${isBlack ? "_noir" : ""}.png`;
	return (
		<Image
			src={src}
			height={size || undefined}
			width={size || undefined}
			fill={!size || undefined}
			alt="Logo LAPS"
		/>
	);
}
