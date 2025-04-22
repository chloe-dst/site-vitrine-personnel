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
  <title>Chloé Doustalet – Création site WordPress à Bordeaux</title>
  <meta name="description" content="Développeur WordPress à Bordeaux : création de site vitrine, site e-commerce ou blog, design personnalisé et optimisation SEO" />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Création site Wordpress à Bordeaux </span>
  <span slot="description"> 
    Vous cherchez à créer un site WordPress professionnel à Bordeaux ? Je vous accompagne dans la réalisation d’un site sur mesure, à votre image et pensé pour vos objectifs. Que vous soyez entrepreneur, commerçant ou indépendant, je conçois des sites WordPress modernes, optimisés pour le référencement et simples à administrer.
    <br><br>
    Basée à Bordeaux, j’interviens dans toute la Gironde pour vous proposer une solution clé en main : design personnalisé, structure claire, contenu optimisé et formation à la prise en main.
    <br><br>
    Avec WordPress, vous avez un site évolutif, rapide à mettre à jour et parfaitement adapté aux petites structures comme aux projets plus ambitieux. Contactez-moi pour discuter de votre projet ! 
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