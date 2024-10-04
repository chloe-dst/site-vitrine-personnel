<script>
  import { goto } from '$app/navigation';

  import Button from "../atoms/Button.svelte";
  import Image from "../atoms/Image.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Text from "../atoms/Text.svelte";

  import PersonalPhoto from '../../assets/img/chloe-doustalet.png';
  import StripesBackground from '../../assets/img/stripes_background.png';
</script>
 
<div class='long-presentation'>
  <div class='long-presentation_me'>
    <div class="me__images w-50">
      <Image
        imageSrc={StripesBackground}
        imageAlt="Background with dark stripes"
        imageWidth=430
        class=""
      />
      <Image
        imageSrc={PersonalPhoto}
        imageAlt="Photo de Chloé Doustalet"
        imageWidth=440
        class=""
      />
    </div>

    <Text
      textTag='p'
      class='long-presentation__heading text-preset-3 w-50'
    >
      Je suis une <span style="color: var(--color-primary)">développeuse web</span>, passionnée par le <span style="color: var(--color-primary)">design</span> et l'<span style="color: var(--color-primary)">expérience utilisateur</span>.
      <br><br>
      J’aime comprendre l’ADN de mes clients, ainsi que leurs <span style="color: var(--color-primary)">besoins</span> pour proposer les <span style="color: var(--color-primary)">solutions</span> sur mesure les plus adaptées. 
    </Text>
  </div>

  <div class="long-presentation__work">
    <Text
      textTag='h2'
      class='text-preset-1'
    >
      Comment je travaille
    </Text>

    <div class="work__presentation">
      <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
        <Text
          textTag='p'
          class='text-preset-5'
        >
          Je commence chaque projet par une écoute attentive de vos besoins et de vos objectifs. Chaque client est unique, et c'est pourquoi j'adapte mes solutions pour répondre à vos attentes spécifiques, à votre univers ou celui que vous envisagez. Je ne travaille pas à partir de templates ; je crée des sites sur mesure pour vous démarquer de la concurrence, afin que vous ayez un site qui vous ressemble vraiment et qui soit parfaitement adapté à votre projet.
          <br><br>
          Avant de me lancer dans le développement, je crée des maquettes et des prototypes pour vous permettre de visualiser le projet. A la fin du développement de votre site, nous le testons ensemble pour s'assurer qu'il corresponde vraiment à vos besoins.
          <br><br>
          Après la livraison, je ne m'arrête pas là. Je vous forme à l'utilisation de votre site et reste disponible pour toute question ou besoin d’assistance. Mon engagement ne se limite pas à la création d'un site : je suis là pour assurer son suivi et sa performance à long terme, en vous proposant des mises à jour régulières. 
          <br>Mon objectif est de livrer un produit de qualité, à la fois esthétique et performant, qui répond à vos attentes et à celles de vos utilisateurs.
        </Text>
      </Margin>

      <Button on:click={() => goto('/projets')}> Voir mes projets </Button>
    </div>
  </div>
  
</div>

<style>
  .long-presentation{
    background-color: var(--color-background-secondary);
    padding: 160px var(--spacing-4);
  }

  .long-presentation_me, .long-presentation__work{
    display: flex;
  }

  .long-presentation_me{
    margin-bottom: var(--spacing-2);
  }

  .me__images{
    position: relative;
  }

  :global(.me__images img:last-child){
    position: absolute;
    top: -75px;
    left: var(--spacing-5);
  }

  :global(.long-presentation__work h2){
    border: none;
    padding: 0;
  }

  @media screen and (min-width: 601px) {
    .work__presentation,   
    :global(.long-presentation__work h2){
      width: 50%;
    }

    :global(.long-presentation__heading){
      margin-top: 50px;
    }
  }   

  @media screen and (max-width: 900px) {
    .long-presentation{
      padding-bottom: var(--spacing-2);
    }

    :global(.me__images img){
      width: 70%;
    }

    :global(.me__images img:last-child){
      top: -55px;
    }

    :global(.long-presentation_me p){
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 600px) {
    .long-presentation{
      padding: var(--spacing-4) var(--spacing-5);
    }

    .long-presentation_me, .long-presentation__work{
      flex-wrap: wrap;
    }

    .long-presentation_me{
      margin-bottom: var(--spacing-5);
    }

    .long-presentation__work{
      margin-top: var(--spacing-4);
    }

    .me__images{
      margin-left: 20%;
      margin-bottom: var(--spacing-5);
    }

    :global(.me__images img){
      width: 100%;
    }

    :global(.long-presentation_me p){
      width: 100%;
      font-size: 18px;
      line-height: 22px;
    }

    :global(.me__images img:last-child){
      top: -30px;
      left: var(--spacing-1);
    }
  }
</style>