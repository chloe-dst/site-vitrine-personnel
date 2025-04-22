<script>
  import '../../../assets/css/global.css';

  import MockupImage from '../../../assets/img/mockups/blomea_mockup_mobile.jpg';

  import ShortPresentation from '../../../components/organisms/ShortPresentation.svelte';
  import CardsMix from '../../../components/organisms/CardsMix.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
  import MainProjects from '../../../components/organisms/MainProjects.svelte';
  import ImageHeader from '../../../components/organisms/ImageHeader.svelte';

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet – Webmaster à Bordeaux</title>
  <meta name="description" content="Webmaster à Bordeaux : je gère et optimise votre site WordPress, Shopify ou sur-mesure. Mises à jour, SEO, support, contenus, refonte…" />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Webmaster à Bordeaux pour votre site internet </span>
  <span slot="description"> 
    Vous avez besoin d’un webmaster fiable à Bordeaux pour gérer, mettre à jour ou améliorer votre site web ? Je vous propose mes services en tant que webmaster freelance pour vous accompagner au quotidien.
    <br><br>
    Que ce soit pour la maintenance technique, l’ajout de nouvelles pages, l’optimisation du référencement ou l’analyse des performances, je vous aide à faire évoluer votre site en toute sérénité.
    <br><br>
    Je travaille aussi bien sur des sites WordPress, Shopify que des sites sur-mesures, et je suis à l’écoute de vos besoins spécifiques. 
    <br>Basée à Bordeaux, je peux intervenir rapidement sur votre projet, à distance ou en local. Parlons de vos besoins !
  </span>
</ImageHeader>
<ShortPresentation marginTop="var(--spacing-2)" marginBottom="var(--spacing-2)"> Je me présente </ShortPresentation>
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