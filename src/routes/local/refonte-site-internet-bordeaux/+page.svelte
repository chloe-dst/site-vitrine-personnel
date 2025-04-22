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
  <title>Chloé Doustalet – Refonte site internet à Bordeaux</title>
  <meta name="description" content="Votre site a besoin d’un coup de neuf ? Je réalise la refonte de sites WordPress et Shopify : design moderne, contenu optimisé, meilleure visibilité." />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Refonte site internet à Bordeaux </span>
  <span slot="description"> 
    Votre site internet ne correspond plus à votre image ? Vous avez besoin d’une refonte pour améliorer son esthétique, son ergonomie ou son référencement ? Je vous accompagne dans la refonte complète de votre site web à Bordeaux.
    <br><br>
    Spécialisée en création et refonte de sites WordPress et Shopify, ou même de sites développés sur mesure, je vous propose une nouvelle version moderne, responsive, rapide et optimisée pour le SEO (référencement sur les moteurs de recherche).
    <br>La refonte permet aussi de repenser votre contenu, votre design et votre stratégie digitale pour mieux atteindre et convertir vos clients. 
    <br><br>
    Basée à Bordeaux, j’interviens également à Mérignac, Pessac, Talence et dans toute la Gironde. Discutons de votre projet de refonte !
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