<script>
  import Mockup1 from "../../../assets/img/mockups/nfsdev-responsive-design-site-developpeuse-web-bordeaux.jpg"
  import Mockup2 from "../../../assets/img/mockups/nfsdev-webdesign-cybersecurite-site-bordeaux.jpg"
  import Mockup3 from "../../../assets/img/mockups/nfsdev-maquette-site-developpeur-web-merignac.jpg"
  import Mockup4 from "../../../assets/img/mockups/nfsdev-illustration-methodologie-developpement-web-merignac.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Maquette de la page d’accueil du site NFSDev réalisée par Chloé Doustalet, une développeuse web à Mérignac près de Bordeaux"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> NSFDev </span>
  <span slot="tag1"> UI/UX Design </span>
  <span slot="tag2"> Création identité graphique </span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/zephyrade/' urlRight='/projets/in-my-temple/' >
  <span slot="description"> 
    Pour ce projet, j’ai été en charge de la création des maquettes du site vitrine de NFSDev, un développeur spécialisé en cybersécurité. L’objectif était de concevoir une interface claire, moderne et professionnelle, reflétant l’expertise technique du client tout en rendant ses services accessibles et lisibles. J’ai travaillé sur une identité visuelle sobre, avec des éléments illustrés sur mesure pour appuyer les étapes de sa méthodologie et ses services.
  </span>
  <li slot="list1"> Définition identité graphique du site </li>
  <li slot="list2"> Création maquettes desktop et mobile </li>
  <li slot="list3"> Hiérarchisation du contenu</li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Extrait du site NFSDev conçu sur mesure pour un expert en sécurité informatique, avec une direction artistique pensée par Chloé Doustalet, webmaster freelance à Mérignac"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Conception UI/UX de la section services pour un développeur expert en cybersécurité à Bordeaux réalisée par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Présentation des maquettes web conçues pour un site professionnel dans le domaine de la cybersécurité, travail de design réalisé à Bordeaux par Chloé Doustalet"
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