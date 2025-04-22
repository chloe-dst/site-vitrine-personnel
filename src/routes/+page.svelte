<script>
  import BackgroundDesktop from '../assets/img/hero_banner.svg';
  import BackgroundMobile from '../assets/img/hero_banner_mobile.png';
  import Logo from '../assets/img/logo_couleur.svg';

  import HeroBanner from '../components/molecules/HeroBanner.svelte';
  import TagList from '../components/organisms/TagList.svelte';
	import ServicesBox from '../components/organisms/ServicesBox.svelte';
  import MainProjects from '../components/organisms/MainProjects.svelte';
	import ShortPresentation from '../components/organisms/ShortPresentation.svelte';
	import ArmsBloc from '../components/organisms/ArmsBloc.svelte';

  import Image from '../components/atoms/Image.svelte';
  import Text from '../components/atoms/Text.svelte';
	import Reviews from '../components/organisms/Reviews.svelte';
	import ProcessSteps from '../components/organisms/ProcessSteps.svelte';
</script>

<svelte:head>
  <title>Chloé Doustalet – Création sites web WordPress et Shopify</title>
  <meta name="description" content="Développeur web freelance à Bordeaux, spécialisée WordPress et Shopify. Je conçois des sites vitrines et e-commerce sur mesure, avec un design soigné et une expérience utilisateur optimale" />
</svelte:head>

<!-- <Header homepage/> -->
<HeroBanner subheading="true" headerTransparent>
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
  <Text
    textTag='h1'
    slot="subheading"
  >
    Des sites web pensés pour convertir
  </Text>
</HeroBanner>
<TagList />
<ServicesBox />
<MainProjects />
<ShortPresentation> Je me présente </ShortPresentation>
<Reviews />
<ProcessSteps />
<ArmsBloc />
