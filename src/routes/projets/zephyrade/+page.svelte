<script>
  import Mockup1 from "../../../assets/img/mockups/zephyrade-refonte-page-site-ecommerce-joaillerie-bordeaux.jpg"
  import Mockup2 from "../../../assets/img/mockups/zephyrade-creation-site-ecommerce-carte-cadeau-bordeaux.jpg"
  import Mockup3 from "../../../assets/img/mockups/zephyrade-emailing-sur-mesure-boutique-en-ligne-bordeaux.jpg"
  import Mockup4 from "../../../assets/img/mockups/zephyrade-optimisation-seo-site-ecommerce-bordeaux-developpeur.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Développement d'une page carte cadeau sur boutique e-commerce à Bordeaux par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Zephyrade </span>
  <span slot="tag1"> Refonte Shopify </span>
  <span slot="tag2"> Optimisation SEO </span>
  <span slot="tag3"> Emailing & communication </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/biome-conseil/' urlRight='/projets/nsfdev/' >
  <span slot="description"> 
    Zēphyrade est une maison de joaillerie française basée à Bordeaux, spécialisée dans les créations en diamants anciens recyclés. La fondatrice souhaitait valoriser son offre de bracelets permanents, un service fort de son univers. Dans le cadre de ce projet, j’ai repensé plusieurs éléments clés du site pour renforcer l'expérience client et améliorer le référencement naturel.
    J’ai notamment conçu la page carte cadeau, associé à un emailing personnalisé, réalisé une optimisation SEO ciblée sur l’ensemble du site, et effectué une refonte complète de la page dédiée aux bracelets permanents, pour la rendre plus fluide, engageante, et orientée conversion.    
  </span>
  <li slot="list1"> Création page carte cadeau Shopify </li>
  <li slot="list2"> Design/intégration template email carte cadeau responsive </li>
  <li slot="list3"> Refonte UX/UI de la page "Bracelet Permanent" </li>
  <li slot="list4"> Optimisation SEO </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Email marketing personnalisé pour site e-commerce développé à Mérignac par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Refonte de page pour mise en avant d’un service sur site e-commerce joaillerie à Bordeaux par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Optimisation SEO d’un site e-commerce à Bordeaux par la webmaster Chloé Doustalet"
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