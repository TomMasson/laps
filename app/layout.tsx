import type { Metadata } from "next";
import { Manrope } from "next/font/google";

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
	description: "Découvre LAPS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontTitle.variable} ${fontText.variable}`}>
				{children}
			</body>
		</html>
	);
}
