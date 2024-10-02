import HomePicture from "../sections/accueil/home-picture";
import Section from "../sections/section";
import BlackSection from "../sections/section-noire";
import ListeMembres from "../sections/membres/liste-membre";
import Galerie from "../sections/galerie/galerie";

const HomePage = () => {
	return (
		<>
			<HomePicture />
			<Section
				color="secondary"
				titre="Notre histoire"
				description="On vient de la street et vous allez bientôt le savoir"
			>
				<ListeMembres />
			</Section>
			<BlackSection
				titre="Galerie"
				description="Des clichés de nos événements"
			>
				<Galerie />
			</BlackSection>
			<Section
				color="primary"
				titre="Nous écouter"
				description="Notre univers, nos créations"
			>
				morceaux
			</Section>
			<Section
				color="secondary"
				titre="Articles de presse"
				description="Vous pouvez nous retrouver ici, et là"
			/>
			<div>Footer</div>
		</>
	);
};

export default HomePage;
