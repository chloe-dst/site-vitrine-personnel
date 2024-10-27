<script>
  import ImageProjet from "../../../assets/img/image_projet.png"
  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails>
  <Image
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet réalisé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Les combi du bassin </span>
  <span slot="tag1"> Mooja Media </span>
  <span slot="tag2"> Création maquettes site</span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/blomea-studio' urlRight='/projets/in-my-temple' >
  <span slot="description">    
    Réalisation des maquettes pour un site de réservation de vans/combis offrant une large gamme de services : road trips, tours guidés, photobooth, évènements, et bien plus. Le défi principal était de présenter cette diversité de manière claire et attrayante. L’univers visuel s’inspire du Bassin d’Arcachon, avec des couleurs évoquant la mer et l’ambiance surf.  J'ai conçu un design qui met en valeur cette diversité de services tout en offrant une expérience utilisateur fluide. Le développement du site est en cours, avec une attention particulière portée à l’ergonomie.
  </span>
  <li slot="list1"> Maquettes d’interface </li>
  <li slot="list2"> Migration hébergeur </li>
  <li slot="list3"> Développement Wordpress </li>
  
  <Image
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet xxxxxxxx"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet xxxxxxxx"
    imageWidth=49%
    imageHeight=663
    slot="image2"
  />
  <Image
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet xxxxxxxx"
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