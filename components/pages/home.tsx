import Section from "../UI/section";

const HomePage = () => {
	return (
		<>
			<div>Homepicture</div>
			<Section
				color={"primary"}
				titre="Notre histoire"
				description="On vient de la street et vous allez bientôt le savoir"
			>
				histoire
			</Section>
			<div>Galerie</div>
			<Section
				color={"secondary"}
				titre="Nous écouter"
				description="Notre univers, nos créations"
			>
				morceaux
			</Section>
			<Section
				color={"primary"}
				titre="Articles de presse"
				description="Vous pouvez nous retrouver ici, et là"
			>
				articles
			</Section>
			<div>Footer</div>
		</>
	);
};

export default HomePage;
