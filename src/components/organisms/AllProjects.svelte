<script>
  import Margin from "../atoms/Margin.svelte";
  import Text from "../atoms/Text.svelte";
  import Image from "../atoms/Image.svelte";
  import ClickableImage from "../molecules/ClickableImage.svelte";

  import MockupInMyTemple from "../../assets/img/mockups/inmytemple_mockup_desktop2.jpg"
  import MockupStoresSud from "../../assets/img/mockups/storessud_mockup_mobile.jpg"
  import MockupCombiBassin from "../../assets/img/mockups/combibassin_mockup_desktop1.jpg"
  import MockupBlomeaStudio from "../../assets/img/mockups/blomea_mockup_desktop2.jpg"
  import MockupHavrePaix from "../../assets/img/mockups/havrepaix_mockup_mobile.jpg"
</script>

<div class='all-projects'>
  <Text
    textTag='h1'
    class='text-preset-1'
  >
    Mes projets
  </Text>

  <Margin marginTop="var(--spacing-1)" marginBottom="var(--spacing-5)">
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Bienvenue sur ma page de portfolio, où vous découvrirez une sélection de mes réalisations. 
      <br>
      Chaque projet présenté ici reflète mon engagement à créer des sites web à la fois esthétiques et fonctionnels, adaptés aux besoins spécifiques de chaque client. Je vous accompagne de la conception graphique à l'intégration technique, en gardant toujours à l’esprit l'expérience utilisateur. 
      <br>Explorez mes travaux et voyez comment je peux transformer vos idées en une réalité digitale moderne et efficace.
    </Text>
  </Margin>

  <div class="all-projects__mosaic">
    <ClickableImage linkUrl="/projets/in-my-temple">
      <Image
        imageSrc={MockupInMyTemple}
        imageAlt="Mockup du site web In my temple développé par Chloé Doustalet"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> In my temple </span>
    </ClickableImage>

    <ClickableImage linkUrl="/projets/stores-sud">
      <Image
        imageSrc={MockupStoresSud}
        imageAlt="Mockup du site internet Stores Sud maquetté et développé par Chloé Doustalet"
        imageWidth=50%
        slot="image"
      />
      <span slot="title"> Stores Sud </span>
    </ClickableImage>

    <ClickableImage linkUrl="/projets/combi-du-bassin">
      <Image
        imageSrc={MockupCombiBassin}
        imageAlt="Mockup du site web Les Combi du Bassin maquetté et développé par Chloé Doustalet"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> Les Combi du Bassin </span>
    </ClickableImage>

    <ClickableImage linkUrl="/projets/blomea-studio">
      <Image
        imageSrc={MockupBlomeaStudio}
        imageAlt="Mockup du site internet développé par Chloé Doustalet"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> Blomea Studio </span>
    </ClickableImage>

    <ClickableImage linkUrl="/projets/havre-de-paix">
      <Image
        imageSrc={MockupHavrePaix}
        imageAlt="Mockup du site web Havre de paix maquetté et développé par Chloé Doustalet"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> Havre de paix </span>
    </ClickableImage>

    <!--
    <ClickableImage linkUrl="/projets/bloma-studio">
      <Image
        imageSrc={ImageProjet}
        imageAlt="Mockup du projet xxxxxxxx"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> Nom projet </span>
    </ClickableImage>
  
    <ClickableImage linkUrl="/projets/biome-conseil">
      <Image
        imageSrc={ImageProjet}
        imageAlt="Mockup du projet xxxxxxxx"
        imageWidth=100%
        slot="image"
      />
      <span slot="title"> Nom projet </span>
    </ClickableImage>
  -->
  </div>

  <div class="all-projects__label">
    <hr />
    <Text
      textTag='p'
      class="all-projects__question"
    >
      Bientôt votre projet ?
    </Text>
  </div>
</div>

<style>
  .all-projects{
    margin-top: var(--spacing-4);
    margin-bottom: var(--spacing-2);
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }
  
  .all-projects__label{
    display: flex;
    width: fit-content;
    column-gap: var(--spacing-1);
    margin-left: auto;
    align-items: center;
  }

  :global(.all-projects__question){
    font-size: 30px;
    font-family: var(--font-family-tercary);
    text-align: right;
  }

  .all-projects__mosaic{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 345px);
    /* To reactivate when I will have 2 more projects to show
    grid-template-rows: repeat(5, 345px); */
    column-gap: var(--spacing-1);
    row-gap: var(--spacing-1);
    margin-bottom: var(--spacing-1);
  }

  :global(.all-projects__mosaic .link, .all-projects__mosaic img){
    height: 100%;
  }

  :global(.all-projects__mosaic .clickable-image:first-child){
    grid-column: 1 / 3;
    grid-row: 1 / 3;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(2)){
    grid-column: 3 / 5;
    grid-row: 1 / 2;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(3)){
    grid-column: 3 / 5;
    grid-row: 2 / 3;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(4)){
    grid-column: 1 / 4;
    grid-row: 3 / 4;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(5)){
    grid-column: 4 / 5;
    grid-row: 3 / 4;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(6)){
    grid-column: 1 / 3;
    grid-row: 4 / 6;  
  }

  :global(.all-projects__mosaic .clickable-image:nth-child(7)){
    grid-column: 3 / 5;
    grid-row: 4 / 6;  
  }

  .all-projects hr{
    width: 50px;
    background-color: var(--black);
    height: 3px;
  }

  @media screen and (max-width: 1100px){
    :global(.all-projects__mosaic .clickable-image:nth-child(2) img){
      width: 100%;
    }

    .all-projects__mosaic{
      grid-template-rows: repeat(2, 200px);
      /* To reactivate when I will have 2 more projects to show
      grid-template-rows: repeat(5, 200px);*/
    }

    :global(.all-projects__mosaic .clickable-image:nth-child(4)){
      grid-column: 1 / 4;
    }

    /* To reactivate if I add 2 more projects
    :global(.all-projects__mosaic .clickable-image:nth-child(6)){
      display: none;
    }
    :global(.all-projects__mosaic .clickable-image:nth-child(7)){
      display: none;
    }
    */
  }

  @media screen and (max-width: 700px){
    .all-projects{
      margin: var(--spacing-5);
    }

    .all-projects__mosaic{
      display: flex;
      flex-wrap: wrap;
      margin-top: var(--spacing-5);
    }

    :global(.all-projects__mosaic .clickable-image){
      height: 300px;
      width: 100%;
    }

    :global(.all-projects__mosaic img){
      width: 100%;
    }

    .all-projects__label{
      margin-bottom: var(--spacing-4);
    }

    .all-projects__label hr{
      height: 1px;
      width: 40px;
    }

    :global(.all-projects__question){
      font-size: 24px;
    }
  }
</style>