import HomePicture from "../sections/accueil/home-picture";
import Section from "../sections/UI/section";
import BlackSection from "../sections/UI/section-noire";
import ListeMembres from "../sections/membres/liste-membre";
import Galerie from "../sections/galerie/galerie";
import Footer from "../sections/UI/footer";
import Morceaux from "../sections/morceaux/morceaux-list";

export default function HomePage() {
	return (
		<>
			<HomePicture />
			<Section
				color="secondary"
				titre="Notre crew"
				description="On vient de capitale de la gaule & ses alentours, bien que chacun aie son background"
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
				<Morceaux />
			</Section>
			<Footer />
		</>
	);
}
