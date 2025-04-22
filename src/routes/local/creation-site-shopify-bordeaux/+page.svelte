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
  <title>Chloé Doustalet - Création site e-commerce Shopify Bordeaux</title>
  <meta name="description" content="Développeur web Shopify à Bordeaux : je crée votre boutique en ligne sur mesure. Design, configuration, SEO, produits… Tout pour bien vendre en ligne" />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Création site Shopify à Bordeaux </span>
  <span slot="description"> 
    Vous souhaitez lancer une boutique en ligne avec Shopify ? En tant que freelance à Bordeaux, je vous propose la création de sites e-commerce sur Shopify, adaptés à votre activité et à vos produits.
    <br><br>
    Shopify est une solution idéale pour démarrer rapidement avec une boutique performante, sécurisée et facile à gérer. Je vous accompagne de A à Z : choix du thème, personnalisation graphique, mise en ligne des produits, configuration des paiements, de la livraison, des emails et optimisation SEO (référencement sur les réseaux sociaux).
    <br><br>
    Mon objectif : créer un site e-commerce qui vous ressemble, fluide pour vos visiteurs et optimisé pour la vente. 
    <br>J’interviens à Bordeaux, Mérignac et dans toute la Gironde. Parlons ensemble de votre projet !  
  </span>
</ImageHeader>
    <br>
    <br>
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