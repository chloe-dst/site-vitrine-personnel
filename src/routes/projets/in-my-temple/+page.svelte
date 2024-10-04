<script>
  import '../../../assets/css/global.css';

  import Mockup1 from "../../../assets/img/mockups/inmytemple_mockup_desktop1.jpg"
  import Mockup2 from "../../../assets/img/mockups/inmytemple_mockup_desktop2.jpg"
  import Mockup3 from "../../../assets/img/mockups/inmytemple_mockup_desktop3.jpg"
  import Mockup4 from "../../../assets/img/mockups/inmytemple_mockup_mobile.jpg"

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
    imageSrc={Mockup1}
    imageAlt="Mockup de la homepage du site web In my temple développé par Chloé Doustalet"
    imageWidth=55%
    class="image-with-details__image"
    slot="image"
  />
  <span slot="title"> In my temple </span>
  <span slot="tag1"> Développement web </span>
  <span slot="tag2"> Formation </span>
</ImageWithDetails>

<ProjectsDetails urlLeft='/projets/stores-sud' urlRight='/projets/combi-du-bassin' >
  <span slot="description"> 
    Développement d’un site web pour une professeure de yoga et masseuse, à partir des maquettes fournies par la cliente. J'ai personnalisé un thème enfant sur WordPress pour créer un site qui reflète parfaitement son univers. La version mobile a été optimisée pour offrir une expérience fluide sur tous les appareils. J'ai également assuré une formation complète au back-office, permettant à la cliente de gérer ses contenus et d’alimenter son blog de manière autonome et indépendante.   
  </span>
  <li slot="list1"> Développement Wordpress </li>
  <li slot="list2"> Responsive Design </li>
  <li slot="list3"> Formation Back Office </li>
  
  <Image
    imageSrc={Mockup2}
    imageAlt="Mockup de la page Yoga du site web In my temple développé par Chloé Doustalet"
    imageWidth=100%
    imageHeight=663
    slot="image1"
  />
  <Image
    imageSrc={Mockup3}
    imageAlt="Mockup de la page soins du site web In my temple développé par Chloé Doustalet"
    imageWidth=49%
    imageHeight=663
    slot="image2"
  />
  <Image
    imageSrc={Mockup4}
    imageAlt="Mockup du formulaire de contact du site web version mobile d'In my temple développé par Chloé Doustalet"
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