<script>
  import '../../../assets/css/global.css';

  import Mockup1 from "../../../assets/img/mockups/havrepaix_mockup_desktop1.jpg"
  import Mockup2 from "../../../assets/img/mockups/havrepaix_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/havrepaix_mockup_desktop3.jpg"
  import Mockup4 from "../../../assets/img/mockups/havrepaix_mockup_mobile.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import Header from '../../../components/organisms/Header.svelte';
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
  import Footer from '../../../components/organisms/Footer.svelte';
</script>

<Header />

<ImageWithDetails nbSlots=3>
  <Image
    imageSrc={Mockup1}
    imageAlt="Mockup de la homepage du site web Havre de Paix maquetté et développé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Havre de paix </span>
  <span slot="tag1"> UI/UX Design </span>
  <span slot="tag2"> Développement web </span>
  <span slot="tag3"> Module réservation & paiement</span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/combi-du-bassin' urlRight='/projets/blomea-studio' >
  <span slot="description">    
    Conception d'un site pour la location d’appartements au Sénégal. J'ai réalisé des maquettes reflétant un univers coloré, chaleureux, et inspirant, en accord avec la destination. Je suis ensuite passée au développement, avec l’intégration d’un plugin de réservation performant. J'ai également mis en place une connexion API pour synchroniser les réservations avec des plateformes telles qu’Airbnb et Booking.com. Je gère actuellement la maintenance du site, garantissant ainsi son bon fonctionnement.
  </span>
  <li slot="list1"> Design interface </li>
  <li slot="list2"> Développement Wordpress </li>
  <li slot="list3"> Module de réservation synchronisé via API </li>
  <li slot="list4"> Module de paiement en ligne </li>
  <li slot="list5"> Maintenance </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la homepage partie Nos locations du site web Havre de Paix maquetté et développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup de la page détails appartement du site web Havre de Paix maquetté et développé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mockup de la page détails appartement version mobile du site web Havre de Paix maquetté et développé par Chloé Doustalet"
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

<Footer />