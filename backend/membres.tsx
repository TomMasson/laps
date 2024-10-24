export type membre = {
	nom: string;
	desc: string;
	img?: string;
	urls?: MusicLink[];
};

export type MusicLink = {
	platform: string;
	url: string;
};

export const membres: membre[] = [
	{
		nom: "Arsen",
		desc: "Chanteur & lover aguerri",
		img: "arsen.jpg",
		urls: [
			{
				platform: "spotify",
				url: "https://open.spotify.com/intl-fr/artist/2ZnwgPzJCK5uvjEiOLHD6F?si=YZ-VwX0zQ0mTBwBAz4XgSg",
			},
			{
				platform: "deezer",
				url: "https://deezer.page.link/npU5p7GaQvmwURzL8",
			},
			{
				platform: "itunes",
				url: "https://music.apple.com/fr/artist/arsendalup/1501626449",
			},
			{
				platform: "ytmusic",
				url: "https://music.youtube.com/channel/UCJa8WVVx1UI1FFJmoK21CUg?si=lO0sVn6e4yCX94_N",
			},
		],
	},
	{
		nom: "DJACK",
		desc: "Il fait des prods perché dans sa maison",
		img: "edweud.jpg",
		urls: [
			{
				platform: "spotify",
				url: "https://open.spotify.com/intl-fr/artist/3zZiHFZa7DIsIUDesYgg0a?si=5dHRBgd5TH22TWlVJjUT9A",
			},
			{
				platform: "deezer",
				url: "https://deezer.page.link/Apxbo38ApCCVf9oA9",
			},
			{
				platform: "itunes",
				url: "https://music.apple.com/fr/artist/waso-d-hill/1689097164",
			},
			{
				platform: "ytmusic",
				url: "https://music.youtube.com/channel/UCSe9wHhUTUVmar_VsklC2fA?feature=share",
			},
		],
	},
	{
		nom: "DzD",
		desc: "Le ghost préféré de ton ghost préféré",
		img: "dzd.jpg",
	},
	{
		nom: "metheM",
		desc: "Le cerveau de toutes les opérations",
		img: "methem.jpg",
		urls: [
			{
				platform: "spotify",
				url: "https://open.spotify.com/intl-fr/artist/56P9otadFSUf3HRszJw4qJ?si=Po5ngFO6T7aPkZqNbeABxw",
			},
			{
				platform: "deezer",
				url: "https://www.deezer.com/fr/artist/59228602",
			},
			{
				platform: "itunes",
				url: "https://music.apple.com/fr/artist/methem/1452916608",
			},
			{
				platform: "ytmusic",
				url: "https://music.youtube.com/channel/UCCaxMWW7J3YCBggeN_Y4Icg",
			},
			{
				platform: "youtube",
				url: "https://www.youtube.com/channel/UCzu6V_wBkxWWvtsG-VOJoSg/videos",
			},
		],
	},
	{
		nom: "MODI",
		desc: "Il joue avec les démons, c'est le Ying",
		img: "roms.jpg",
		urls: [
			{
				platform: "spotify",
				url: "https://open.spotify.com/intl-fr/artist/3oPVxuGOSW085GMpw9Msci?si=P0RHos4BTCe3eeX5TPbAWQ",
			},
			{
				platform: "deezer",
				url: "https://www.deezer.com/fr/artist/222387245",
			},
			{
				platform: "itunes",
				url: "https://music.apple.com/fr/artist/modi/1686744110",
			},
			{
				platform: "ytmusic",
				url: "https://music.youtube.com/channel/UCOefXRgIkw_jCL1NmJiZKKw",
			},
		],
	},
	{
		nom: "SHAB",
		desc: "Il aime défier le soleil, c'est le Yang",
		img: "shab.jpg",
		urls: [
			{
				platform: "spotify",
				url: "https://open.spotify.com/intl-fr/artist/0GWge3GouJtEhUTaZxe0rT?si=FnrzEX8MS8CROeP46DPaKQ",
			},
			{
				platform: "deezer",
				url: "https://www.deezer.com/fr/artist/211752197",
			},
			{
				platform: "itunes",
				url: "https://music.apple.com/fr/artist/shab/1684997389",
			},
			{
				platform: "ytmusic",
				url: "https://music.youtube.com/channel/UCUYXMnNH7Hz3-64j0XVJtxA",
			},
		],
	},
];

export type InfosSpotifyArtiste = {
	nom: string;
	url: string;
};

export const spotifyLAPS: InfosSpotifyArtiste = {
	nom: "LAPS",
	url: "https://open.spotify.com/intl-fr/artist/1YpXP9PpvhB9XyZLg8nznb?si=qRCu6s7xRnOvB_3rYG1T8A",
};
