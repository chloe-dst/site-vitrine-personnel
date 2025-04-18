<script>
  import Mockup1 from "../../../assets/img/mockups/storessud_mockup_desktop1.jpg"
  import Mockup2 from "../../../assets/img/mockups/storessud_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/storessud_mockup_desktop3.jpg"
  import Mockup4 from "../../../assets/img/mockups/storessud_mockup_mobile.jpg"

  import Link from '../../../components/atoms/Link.svelte';
  import Image from '../../../components/atoms/Image.svelte';
  
  import ImageWithDetails from '../../../components/organisms/ImageWithDetails.svelte';
  import ProjectsDetails from '../../../components/organisms/ProjectsDetails.svelte';
  import TwoColorsSquares from '../../../components/organisms/TwoColorsSquares.svelte';
</script>

<ImageWithDetails nbSlots=3>
  <Image
    imageSrc={Mockup1}
    imageAlt="Mockup de la homepage du site web Stores Sud maquetté et développé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Stores Sud </span>
  <span slot="tag1"> UI/UX Design </span>
  <span slot="tag2"> Migration </span>
  <span slot="tag3"> Développement web </span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/combi-du-bassin' urlRight='/projets/blomea-studio' >
  <span slot="description">    
    Refonte du site de Stores Sud, une entreprise proposant une large gamme de stores, garages et protections solaires. J'ai d'abord assuré la migration vers un nouvel hébergeur, puis développé les maquettes pour un site moderne et efficace. L’enjeu principal était de rendre l'ensemble de leur offre accessible et ergonomique, facilitant ainsi la navigation et la recherche de produits. Le développement du site est en cours, avec une attention particulière portée à l’organisation des produits et à l’expérience utilisateur.
  </span>
  <li slot="list1"> Maquettes d’interface </li>
  <li slot="list2"> Migration hébergeur </li>
  <li slot="list3"> Développement Wordpress </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la page A propos du site internet Stores Sud maquetté et développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup de la page détails services du site web Stores Sud maquetté et développé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mockup de la homepage du site internet version mobile de Stores Sud maquetté et développé par Chloé Doustalet"
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