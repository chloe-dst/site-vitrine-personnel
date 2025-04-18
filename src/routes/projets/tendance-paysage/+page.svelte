<script>
  import Mockup1 from "../../../assets/img/mockups/tendance-paysage-webmaster-site-vitrine-artisan-merignac.jpg"
  import Mockup2 from "../../../assets/img/mockups/tendance-paysage-site-vitrine-responsive-petite-entreprise-merignac.jpg"
  import Mockup3 from "../../../assets/img/mockups/tendance-paysage-creation-site-vitrine-paysagiste-bordeaux.jpg"
  import Mockup4 from "../../../assets/img/mockups/tendance-paysage-developpement-wordpress-site-vitrine-bordeaux.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Mockup de création de site vitrine pour artisan paysagiste à Bordeaux par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Tendance Paysage </span>
  <span slot="tag1"> UI/UX Design </span>
  <span slot="tag2"> Développement web </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/masmud/' urlRight='/projets/biome-conseil/' >
  <span slot="description"> 
    Ce projet a consisté à concevoir et développer un site vitrine professionnel pour Tendance Paysage, jardinier-paysagiste situé en Vendée. L’objectif : créer une vitrine claire, moderne et responsive, capable de refléter l’expertise du client et ses services tout en facilitant la prise de contact.
    L’ensemble des textes du site a été rédigé à partir des informations transmises par le client, avec une attention portée à la clarté, à la cohérence et à l’optimisation pour le référencement naturel (SEO).    
  </span>
  <li slot="list1"> Création maquettes web sur-mesure </li>
  <li slot="list2"> Développement Wordpress </li>
  <li slot="list3"> Copywriting : rédaction contenus </li>
  <li slot="list4"> Optimisation SEO et sécurisation du site </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de site vitrine responsive pour petite entreprise à Mérignac réalisé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Développement WordPress pour site vitrine à Bordeaux réalisé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Chloé Doustalet, Webmaster à Mérignac pour site vitrine d’artisan"
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