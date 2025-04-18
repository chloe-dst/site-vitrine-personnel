<script>
  import Mockup1 from "../../../assets/img/mockups/biome-conseil-webmaster-site-vitrine-formateur-merignac.jpg"
  import Mockup2 from "../../../assets/img/mockups/blomea_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/biome-conseil-creation-site-vitrine-formateur-bordeaux.jpg"
  import Mockup4 from "../../../assets/img/mockups/biome-conseil-site-vitrine-independant-accompagnement-bordeaux.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Création de site vitrine pour formateur indépendant à Bordeaux par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Biome Conseil </span>
  <span slot="tag1"> Refonte site web </span>
  <span slot="tag2"> UI/UX Design </span>
  <span slot="tag3"> Développement web </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/tendance-paysage/' urlRight='/projets/zephyrade/' >
  <span slot="description"> 
    Ce site vitrine a été développé pour un duo de consultantes/formatrices spécialisées en accompagnement RH et en formation professionnelle auprès d’institutions et de collectivités en Occitanie.<br>
    L’objectif principal était de structurer une offre riche et complexe afin de la rendre claire et accessible, tout en renforçant la crédibilité et le positionnement professionnel du cabinet. Le site met en avant les compétences des co-fondatrices, les enjeux qu’elles accompagnent et présente les formations proposées, ainsi qu’un espace dédié aux partenaires. Il offre également un formulaire de contact pour faciliter la mise en relation avec les institutions et collectivités.
  </span>
  <li slot="list1"> Création maquettes web sur-mesure </li>
  <li slot="list2"> Développement Wordpress </li>
  <li slot="list3"> Structuration offre </li>
  <li slot="list4"> Optimisation SEO et sécurisation site </li>
  
  <!--
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la page Tous les projets du site web Blomea Studio développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />-->
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup site vitrine professionnel pour indépendant à Bordeaux réalisé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mocjup par Chloé Doustalet, webmaster pour site vitrine de formateur à Mérignac"
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