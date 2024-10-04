<script>
  import Image from "../atoms/Image.svelte";
  
  import BackgroundDesktop from '../../assets/img/hero_banner.svg';
  import BackgroundMobile from '../../assets/img/hero_banner_mobile.png';
  import Logo from '../../assets/img/logo_couleur.svg';
</script>
 
<div class='hero-banner'>
    <div class='hero-banner__background hidden-phone'>
      <Image
        imageSrc={BackgroundDesktop}
        imageAlt="Background with objects representing a freelance developer"
        imageWidth=100%
      />
    </div>

    <div class='hero-banner__background hidden-desktop'>
        <Image
          imageSrc={BackgroundMobile}
          imageAlt="Background with objects representing a freelance developer"
          imageWidth=100%
        />
    </div>

    <div class='hero-banner__logo'>
      <Image
        class="block-center"
        imageSrc={Logo}
        imageAlt="Logo Chloé Doustalet"
        imageWidth=100%
      />
    </div>
</div>

<style>
  .hero-banner{
    position: relative;
    margin-top: -120px;
  }

  .hero-banner__logo{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 800px){
    .hero-banner__logo{
        width: 30%;
    }
  }
</style>