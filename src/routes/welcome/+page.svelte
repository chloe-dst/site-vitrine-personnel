<script>
  import '../../assets/css/global.css';

  import BackgroundDesktop from '../../assets/img/hero_banner.svg';
  import BackgroundMobile from '../../assets/img/hero_banner_mobile.png';
  import Logo from '../../assets/img/logo_couleur.svg';
  
  import HeroBanner from '../../components/molecules/HeroBanner.svelte';
  import ShortPresentation from '../../components/organisms/ShortPresentation.svelte';
  import CardsMix from '../../components/organisms/CardsMix.svelte';
  import TwoColorsSquares from '../../components/organisms/TwoColorsSquares.svelte';
  import MainProjects from '../../components/organisms/MainProjects.svelte';

  import Link from '../../components/atoms/Link.svelte';
  import Image from '../../components/atoms/Image.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet – Création sites web sur mesure</title>
  <meta name="description" content="En tant que développeuse web freelance à Bordeaux je conçois des sites vitrines et e-commerce sur mesure pensés pour convertir." />
</svelte:head>

<HeroBanner>
  <Image
    imageSrc={BackgroundDesktop}
    imageAlt="Background with objects representing a freelance developer"
    imageWidth=100%
    slot="imageDesktop"
  />
  <Image
    imageSrc={BackgroundMobile}
    imageAlt="Background with objects representing a freelance developer"
    imageWidth=100%
    slot="imageMobile"
  />
  <Image
    class="block-center"
    imageSrc={Logo}
    imageAlt="Logo Chloé Doustalet"
    imageWidth=100%
    slot="heading"
  />
</HeroBanner>
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