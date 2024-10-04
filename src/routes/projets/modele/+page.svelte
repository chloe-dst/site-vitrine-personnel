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

<ImageWithDetails>
  <Image
    imageSrc={ImageProjet}
    imageAlt="Mockup du projet réalisé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> NOM PROJET </span>
  <span slot="tag1"> UI/UX Design</span>
  <span slot="tag2"> Développement web</span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/blomea-studio' urlRight='/projets/in-my-temple' >
  <span slot="description">    
    Cette phrase d'accroche met en avant tes compétences en design et développement, ton utilisation de Figma pour les maquettes, et ton expertise en intégration Shopify, tout en soulignant l'importance de l'expérience utilisateur et de la performance des sites.
    Je vous accompagne de la conception graphique à l'intégration technique, en gardant toujours à l’esprit l'expérience utilisateur. Explorez mes travaux et voyez comment je peux transformer vos idées en une réalité digitale moderne et efficace.
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

<Footer />