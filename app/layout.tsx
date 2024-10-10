import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const fontFooter = Manrope({
	weight: "800",
	subsets: ["latin"],
	variable: "--fontFooter",
});

const fontTitle = Manrope({
	weight: "700",
	subsets: ["latin"],
	variable: "--fontTitle",
});

const fontText = Manrope({
	weight: "400",
	subsets: ["latin"],
	variable: "--fontText",
});

export const metadata: Metadata = {
	title: "LAPS",
	description:
		"Découvrez LAPS, le crew de rap lyonnais qui fait vibrer la scène musicale. Plongez dans notre univers artistique, écoutez nos dernières créations, et suivez nos actualités. LAPS, c'est l'énergie du rap, l'authenticité de Lyon. Rejoignez-nous et partagez notre passion pour la musique !",
};

export type IRootLayout = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: IRootLayout) {
	return (
		<html lang="fr">
			<body
				className={`${fontFooter.variable} ${fontTitle.variable} ${fontText.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
