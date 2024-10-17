export type membre = {
	nom: string;
	desc: string;
	img?: string;
	spotify?: InfosSpotifyArtiste;
};

export type InfosSpotifyArtiste = {
	nom: string;
	url: string;
};

export const membres: membre[] = [
	{
		nom: "Arsen",
		desc: "Chanteur & lover aguerri",
		spotify: {
			nom: "Arsen Dalup",
			url: "https://open.spotify.com/intl-fr/artist/2ZnwgPzJCK5uvjEiOLHD6F?si=YZ-VwX0zQ0mTBwBAz4XgSg",
		},
	},
	{
		nom: "DJACK",
		desc: "Il fait des prods perché dans sa maison",
		spotify: {
			nom: "Waso D Hill",
			url: "https://open.spotify.com/intl-fr/artist/3zZiHFZa7DIsIUDesYgg0a?si=5dHRBgd5TH22TWlVJjUT9A",
		},
	},
	{
		nom: "DzD",
		desc: "Le ghost préféré de ton ghost préféré",
	},
	{
		nom: "metheM",
		desc: "Le cerveau de toutes les opérations",
		spotify: {
			nom: "metheM",
			url: "https://open.spotify.com/intl-fr/artist/56P9otadFSUf3HRszJw4qJ?si=FRvWCGVHSNu5XMmTwql5CQ",
		},
	},
	{
		nom: "MODI",
		desc: "Il joue avec les démons, c'est le Ying",
		spotify: {
			nom: "MODI",
			url: "https://open.spotify.com/intl-fr/artist/3oPVxuGOSW085GMpw9Msci?si=Qjp7jMQyQsqXMmlY3etqEQ",
		},
	},
	{
		nom: "SHAB",
		desc: "Il aime défier le soleil, c'est le Yang",
		spotify: {
			nom: ".SHAB",
			url: "https://open.spotify.com/intl-fr/artist/0GWge3GouJtEhUTaZxe0rT?si=l74XAWFwQ8G_6mXErjg8Uw",
		},
	},
];

export const spotifyLAPS: InfosSpotifyArtiste = {
	nom: "LAPS",
	url: "https://open.spotify.com/intl-fr/artist/1YpXP9PpvhB9XyZLg8nznb?si=qRCu6s7xRnOvB_3rYG1T8A",
};
