<script>
  import Mockup1 from "../../../assets/img/mockups/blomea_mockup_desktop1.jpg"
  import Mockup2 from "../../../assets/img/mockups/blomea_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/blomea_mockup_desktop3.jpg"
  import Mockup4 from "../../../assets/img/mockups/blomea_mockup_mobile.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Mockup de la homepage du site web Blomea Studio développé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Blomea Studio </span>
  <span slot="tag1"> Développement web </span>
  <span slot="tag2"> Formation </span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/havre-de-paix' urlRight='/projets/stores-sud' >
  <span slot="description"> 
    Création d'un site web pour un studio de design, développé à partir de maquettes fournies par le studio. Mon objectif était de réaliser un site responsive et pixel perfect, fidèle à l'identité visuelle du client. Chaque détail a été intégré avec précision pour garantir une expérience utilisateur optimale sur tous les appareils. J'ai également formé l'équipe à l’utilisation du back-office afin qu'elle puisse gérer son contenu de manière autonome et mettre à jour le site selon ses besoins.   
  </span>
  <li slot="list1"> Développement Wordpress </li>
  <li slot="list2"> Responsive Design </li>
  <li slot="list3"> Formation Back Office </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la page Tous les projets du site web Blomea Studio développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup de la page Services du site web Blomea Studio développé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    class="img-position-bottom"
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mockup de la homepage version mobile du site web Blomea Studio développé par Chloé Doustalet"
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