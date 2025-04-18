<script>
  import Mockup1 from "../../../assets/img/mockups/peulh-vagabond-site-multilingue-shopify-developpement-web-bordeaux.jpg"
  import Mockup2 from "../../../assets/img/mockups/peulh-vagabond-creation-site-ecommerce-mode-bordeaux.jpg"
  import Mockup3 from "../../../assets/img/mockups/peulh-vagabond-refonte-site-ecommerce-mode-developpeuse-web-bordeaux.jpg"
  import Mockup4 from "../../../assets/img/mockups/peulh-vagabond-webmaster-site-ecommerce-merignac.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Création d’un site e-commerce pour une marque de mode à Bordeaux par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Peulh Vagabond </span>
  <span slot="tag1"> Refonte Shopify </span>
  <span slot="tag2"> Emailing </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/blomea-studio' urlRight='/projets/masmud' >
  <span slot="description"> 
    J’ai accompagné Peulh Vagabond dans la refonte graphique de sa boutique en ligne, avec pour objectif de moderniser le site et lui apporter une identité plus premium, en m’inspirant des codes actuels du e-commerce dans la mode haut de gamme.
    Le site est désormais multilingue, afin de toucher le marché américain. J’ai également enrichi l’expérience produit en intégrant des vidéos dans la galerie des pages produit.<br>
    Côté stratégie, j’ai mis en place des automatisations marketing pour améliorer la conversion : un welcome flow, un flow de panier abandonné et une popup d’inscription à la newsletter liée à un code promo.
  </span>
  <li slot="list1"> Refonte visuelle/UX boutique Shopify </li>
  <li slot="list2"> Mise en place site multilingue </li>
  <li slot="list3"> Création d'email flows </li>
  <li slot="list4"> Mise en place popup d’inscription newsletter </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Site Shopify réalisé par une développeuse web à Mérignac, Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Refonte d’un site Shopify pour une marque basée à Bordeaux par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Chloé Doustalet, Webmaster à Mérignac pour boutique e-commerce Shopify"
    imageWidth=49%
    imageHeight=663
    slot="image3"
  />
</ProjectsDetails>

<TwoColorsSquares>
  <Link
    linkUrl='/contact'
    class="text-center block-center"
    linkUnderlined
  > 
    Me contacter
  </Link>
</TwoColorsSquares>