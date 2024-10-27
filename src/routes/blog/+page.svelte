<script>
  import BackgroundDesktop from '../../assets/img/blog_banner.svg';
  import BackgroundMobile from '../../assets/img/blog_banner_mobile.svg';
  
  import HeroBanner from '../../components/molecules/HeroBanner.svelte';
  import Blog from '../../components/organisms/Blog.svelte';
  import InlinePresentation from '../../components/organisms/InlinePresentation.svelte';

  import Image from '../../components/atoms/Image.svelte';
  import Text from '../../components/atoms/Text.svelte';

  export let data;
</script>

<svelte:head>
  <title>Chloé Doustalet Développeuse Web Freelance | Blog, Conseils et Expertise</title>
  <meta name="description" content="Bienvenue sur le site de Chloé Doustalet, développeuse web freelance basée à Bordeaux. Je crée des sites vitrines et e-commerce sur mesure, alliant design moderne et expérience utilisateur optimale." />
</svelte:head>

<HeroBanner subheading>
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

  <Text
    textTag='h1'
    class='long-presentation__heading text-preset-2 text-uppercase text-center'
    slot="heading"
    textColor
  >
    Le Blog
  </Text>
  <Text
    textTag='p'
    class='long-presentation__heading text-preset-5 text-center'
    slot="subheading"
  >
    Découvrez des articles inspirants sur le web design, l'expérience utilisateur, et les stratégies digitales pour booster votre présence en ligne. Astuces, conseils, et tendances pour un site moderne et attractif, qui transforme vos visiteurs en clients.
  </Text>

</HeroBanner>
<Blog data={data} />
<InlinePresentation />
