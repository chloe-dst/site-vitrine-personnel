<script>
  import '../../../assets/css/global.css';
  import ImageProjet from "../../../assets/img/image_projet.png"
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
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet réalisé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> Biome Conseil </span>
  <span slot="tag1"> Refonte site </span>
  <span slot="tag2"> UI/UX Design </span>
  <span slot="tag3"> Développement web</span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/stores-sud' urlRight='/projets/in-my-temple' >
  <span slot="description">   
    Refonte du site web de Biome Conseil, une entreprise spécialisée dans les ressources humaines et la formation. J'ai conçu les maquettes en mettant en avant une navigation intuitive et un design moderne, adaptés à leur secteur. En parallèle, j'ai accompagné les clientes dans l'élaboration d'une stratégie digitale claire, ainsi que dans la mise en place d'une architecture de site pertinente et efficace. Le développement est actuellement en cours, avec un focus sur l’ergonomie et la valorisation de leurs services. 
  </span>
  <li slot="list1"> Maquettes d’interface </li>
  <li slot="list2"> Mises à jour </li>
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

<Footer />