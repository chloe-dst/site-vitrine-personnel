<script>
  import Mockup1 from "../../../assets/img/mockups/masmud-boutique-en-ligne-mode-responsive-bordeaux.jpg"
  import Mockup2 from "../../../assets/img/mockups/masmud-site-ecommerce-mode-personnalise-merignac.jpg"
  import Mockup3 from "../../../assets/img/mockups/masmud-developpement-site-marque-mode-bordeaux.jpg"
  import Mockup4 from "../../../assets/img/mockups/masmud-creation-boutique-ecommerce-mode-bordeaux.jpg"

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
    class="image-with-details__image img-position-right"
    slot="image"
  />
  <span slot="title"> MASMUD </span>
  <span slot="tag1"> Développement web </span>
  <span slot="tag2"> Formation </span>
</ImageWithDetails>

<ProjectsDetails nbList=4 urlLeft='/projets/peulh-vagabond/' urlRight='/projets/tendance-paysage/' >
  <span slot="description"> 
    Création du site e-commerce de la marque Masmud, spécialisée dans les foulards en soie inspirés de l’héritage berbère et du féminin sacré. L’univers de la marque étant très fort, j’ai travaillé sur une mise en page élégante et poétique, en cohérence avec l’identité visuelle. Le site met en avant les inspirations, les valeurs et l’histoire des produits, tout en proposant une navigation fluide et un parcours d’achat clair.
    <br>J’ai paramétré l’ensemble de la boutique Shopify : ajout des produits, création des collections, configuration des options de livraison et des paramètres de paiement. Le site est disponible en deux langues (français et anglais) afin de répondre à une clientèle internationale. J’ai également mis en place les différents emails automatisés (commande, livraison, abandon de panier, etc.) en personnalisant chacun d’eux selon l’univers de la marque pour offrir une expérience cohérente et engageante à chaque étape du parcours client.
  </span>
  <li slot="list1"> Développement & paramétrage site Shopify  </li>
  <li slot="list2"> Création univers de marque </li>
  <li slot="list3"> Paramétrage & personnalisation email flows </li>
  <li slot="list4"> Mise en place site multilingue & optimisation SEO</li>
  
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
    class="img-position-bottom img-position-right"
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