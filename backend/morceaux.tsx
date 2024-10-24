export type Morceau = {
	id: number;
	titre: string;
	url: string;
	img?: string;
};

export const morceaux: Morceau[] = [
	{
		id: 1,
		titre: "[.SHAB, MODI, Waso] TLEP prod. DJACk",
		url: "/tracks/TLEP.mp3",
		img: "TLEP.png",
	},
	{
		id: 2,
		titre: "[.SHAB, DzD, MODI] D3f0nc3 prod. DJACK",
		url: "/tracks/GetItGirl REC (d3f0nc3).mp3",
	},
	{
		id: 3,
		titre: "[.SHAB, MODI, DzD] Coudur prod. metheM",
		url: "/tracks/Coudur v2.mp3",
	},
	{
		id: 4,
		titre: "[Arsen, .SHAB] Et j'dors prod. DJACK",
		url: "/tracks/[24-06] DnCheese REC.mp3",
	},
	{
		id: 5,
		titre: "[Arsen, Waso, .SHAB] Disco Bounce prod. DJACK",
		url: "/tracks/Disco Bounce rec.mp3",
	},
	{
		id: 6,
		titre: "[.SHAB] Me gusta Etamaye prod. Rubi",
		url: "/tracks/TOM ST ROMAN Mix.mp3",
	},
];
