<script>
  import '../assets/css/global.css';
  
  import Header from '../components/organisms/Header.svelte';
  import HeroBanner from '../components/molecules/HeroBanner.svelte';
  import TagList from '../components/organisms/TagList.svelte';
	import ServicesBox from '../components/organisms/ServicesBox.svelte';
  import MainProjects from '../components/organisms/MainProjects.svelte';
	import ShortPresentation from '../components/organisms/ShortPresentation.svelte';
	import ArmsBloc from '../components/organisms/ArmsBloc.svelte';
  import Footer from '../components/organisms/Footer.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet Développeuse Web Freelance à Bordeaux | Création de Sites Personnalisés</title>
  <meta name="description" content="Bienvenue sur le site de Chloé Doustalet, développeuse web freelance basée à Bordeaux. Je crée des sites vitrines et e-commerce sur mesure, alliant design moderne et expérience utilisateur optimale." />
</svelte:head>

<Header homepage/>
<HeroBanner />
<TagList />
<ServicesBox />
<MainProjects />
<ShortPresentation />
<ArmsBloc />
<Footer />
