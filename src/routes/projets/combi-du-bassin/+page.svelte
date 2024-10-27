<script>
  import Mockup1 from "../../../assets/img/mockups/combibassin_mockup_desktop1.jpg"
  import Mockup2 from "../../../assets/img/mockups/combibassin_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/combibassin_mockup_desktop3.jpg"
  import Mockup4 from "../../../assets/img/mockups/combibassin_mockup_desktop4.jpg"
  
  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={Mockup1}
    imageAlt="Mockup de la homepage du site web Les combi du bassin maquetté et développé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Les combi du bassin </span>
  <span slot="tag1"> UI/UX Design </span>
  <span slot="tag2"> Développement web </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/in-my-temple' urlRight='/projets/havre-de-paix' >
  <span slot="description">    
    Réalisation des maquettes pour un site de réservation de vans/combis offrant une large gamme de services : road trips, tours guidés, photobooth, évènements, et bien plus. Le défi principal était de présenter cette diversité de manière claire et attrayante. L’univers visuel s’inspire du Bassin d’Arcachon, avec des couleurs évoquant la mer et l’ambiance surf.  J'ai conçu un design qui met en valeur cette diversité de services tout en offrant une expérience utilisateur fluide. Le développement du site est en cours, avec une attention particulière portée à l’ergonomie.
  </span>
  <li slot="list1"> Maquettes d’interface </li>
  <li slot="list2"> Développement Wordpress </li>
  <li slot="list3"> Module de réservation </li>
  <li slot="list4"> Module de paiement en ligne </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la page Nos vans du site web Les combi du bassin maquetté et développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup de la partie Roadtrip de la homepage du site web Les combi du bassin maquetté et développé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mockup de la page combi Mexico du site web Les combi du bassin maquetté et développé par Chloé Doustalet"
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