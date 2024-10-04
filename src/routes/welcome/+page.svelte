<script>
  import '../../assets/css/global.css';
  
  import Header from '../../components/organisms/Header.svelte';
  import HeroBanner from '../../components/molecules/HeroBanner.svelte';
  import ShortPresentation from '../../components/organisms/ShortPresentation.svelte';
  import CardsMix from '../../components/organisms/CardsMix.svelte';
  import TwoColorsSquares from '../../components/organisms/TwoColorsSquares.svelte';
  import MainProjects from '../../components/organisms/MainProjects.svelte';
  import Footer from '../../components/organisms/Footer.svelte';

  import Link from '../../components/atoms/Link.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet Développeuse Web Freelance à Bordeaux | Création de Sites Personnalisés</title>
  <meta name="description" content="Bienvenue sur le site de Chloé Doustalet, développeuse web freelance basée à Bordeaux. Je crée des sites vitrines et e-commerce sur mesure, alliant design moderne et expérience utilisateur optimale." />
</svelte:head>

<Header />
<HeroBanner />
<ShortPresentation marginTop="var(--spacing-2)" marginBottom="var(--spacing-2)"/>
<CardsMix />
<MainProjects />
<TwoColorsSquares>
  <Link
    linkUrl='https://calendly.com/chloe-doustalet/30min'
    class="text-center block-center"
    linkUnderlined
  > 
    Réserver un appel découverte de 30 min
  </Link>
</TwoColorsSquares>
<Footer />