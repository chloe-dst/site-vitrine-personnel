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
  <title>Chloé Doustalet – Développeuse web freelance à Bordeaux</title>
  <meta name="description" content="Besoin d’un site internet à Bordeaux ? Je conçois des sites web modernes, efficaces et bien référencés. WordPress, Shopify, vitrine ou e-commerce." />
</svelte:head>

<ImageHeader mockupImage={MockupImage}>
  <span slot="title"> Développeuse web freelance à Bordeaux </span>
  <span slot="description"> 
    Vous cherchez une développeuse web à Bordeaux pour créer ou améliorer votre site internet ? Je suis spécialisée dans la création de sites personnalisés, que ce soit un site vitrine, un site WordPress ou une boutique en ligne sur Shopify.
    <br><br>
    Basée à Bordeaux, je travaille avec des indépendants, des entreprises, des marques et des entrepreneurs locaux pour construire des sites efficaces, esthétiques et bien référencés.
    <br><br>
    Mon approche : allier technique, design et stratégie pour vous livrer un site performant, qui reflète votre identité et vous aide à atteindre vos objectifs. Refonte, création, SEO, maintenance… je vous accompagne à chaque étape !
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