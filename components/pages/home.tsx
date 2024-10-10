import HomePicture from "../sections/accueil/home-picture";
import Section from "../sections/layout/section";
import BlackSection from "../sections/layout/section-noire";
import ListeMembres from "../sections/membres/liste-membre";
import Galerie from "../sections/galerie/galerie";
import Footer from "../sections/layout/footer";

export default function HomePage() {
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
				Morceaux
			</Section>
			<Section
				color="secondary"
				titre="Articles de presse"
				description="Vous pouvez nous retrouver ici, et là"
			>
				Articles
			</Section>
			<Footer />
		</>
	);
}
