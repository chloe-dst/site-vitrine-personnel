<script>
  import '../../../assets/css/global.css';

  import MockupImage from '../../../assets/img/mockups/blomea_mockup_mobile.jpg';

  import ShortPresentation from '../../../components/organisms/ShortPresentation.svelte';
  import CardsMix from '../../../components/organisms/CardsMix.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
  import MainProjects from '../../../components/organisms/MainProjects.svelte';
  import ImageHeader from '../../../components/organisms/ImageHeader.svelte';

  import Link from '../../../components/atoms/Link.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet - Optimisation fiche Google My Business Bordeaux</title>
  <meta name="description" content="Améliorez votre visibilité locale à Bordeaux avec une fiche Google My Business optimisée. Services pros pour artisans, indépendants, commerces et PME." />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Création et optimisation fiche Google My Business à Bordeaux </span>
  <span slot="description"> 
    Vous cherchez un expert pour gérer votre fiche Google My Business à Bordeaux ?
    Je vous accompagne dans la création, l’optimisation et la gestion de votre fiche pour améliorer votre visibilité locale sur Google et Google Maps. 
    <br><br>
    En tant que webmaster freelance à Bordeaux, j’aide les entreprises locales à apparaître en haut des résultats lorsqu’un client cherche leurs services.
    <br>
    Ajout de photos, rédaction de description optimisée, sélection des bonnes catégories, réponse aux avis, intégration de mots-clés locaux… Chaque détail compte pour vous démarquer.
    <br><br>
    Basée à Bordeaux, j’interviens auprès des commerçants, artisans, indépendants ou TPE en Gironde, pour booster leur référencement local et attirer plus de clients. 
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