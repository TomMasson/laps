import HomePicture from "../sections/home-picture";
import ListeMembres from "../sections/membres/liste-membre";
import Section from "../UI/section";

const HomePage = () => {
	return (
		<>
			<HomePicture />
			<Section
				color={"secondary"}
				titre="Notre histoire"
				description="On vient de la street et vous allez bientôt le savoir"
			>
				<ListeMembres />
			</Section>
			<div>Galerie</div>
			<Section
				color={"primary"}
				titre="Nous écouter"
				description="Notre univers, nos créations"
			>
				morceaux
			</Section>
			<Section
				color={"secondary"}
				titre="Articles de presse"
				description="Vous pouvez nous retrouver ici, et là"
			/>
			<div>Footer</div>
		</>
	);
};

export default HomePage;
