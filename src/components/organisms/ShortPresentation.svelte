<script>
  import { goto } from '$app/navigation';

  import Button from "../atoms/Button.svelte";
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";

  import PersonalPhoto from '../../assets/img/chloe-doustalet.png';

  export let marginTop = "0";
  export let marginBottom = "80px";
</script>
 
<div class='short-presentation' style='padding-top: {marginTop}; padding-bottom: {marginBottom};'>
  <Text
    textTag='h2'
    class='short-presentation__title text-preset-2 text-center block-center'
  >
    Je me presente
  </Text>

  <Image
    imageSrc={PersonalPhoto}
    imageAlt="Logo"
    imageWidth=220
    class="short-presentation__image block-center"
  />

  <div class="short-presentation__text block-center">
    <Text
      textTag='p'
      class='text-preset-5 text--uppercase'
    >
      Moi c'est Chloé, passionnée par le digital et tout ce qui est créatif. Après plusieurs années d'expérience dans le e-commerce, j’accompagne aujourd'hui mes clients dans l'évolution de leur présence
    </Text>
    <Text
      textTag='p'
      class='text-preset-5 text--uppercase'
    >
      en ligne, à Bordeaux (où je vis) et partout en France. MON PARI ? Construire des sites sur-mesure, efficaces, esthétiques et engageants pour créer une vraie connexion avec votre cible.
    </Text>
  </div>

  <Button class="block-center" on:click={() => goto('/services')}> En savoir + </Button>
  
</div>

<style>
  .short-presentation{
    background-color: var(--color-background-secondary);
  }

  :global(.short-presentation__title){
    position: relative;
    text-transform: uppercase;
    font-size: 130px;
    font-family: var(--font-family-secondary);
    line-height: 120px;
    max-width: 700px;
    z-index: 5;
  }

  :global(.short-presentation__image){
    border-radius: 60px;
    margin-top: -40px;
    margin-bottom: var(--spacing-1);
  }

  .short-presentation__text{
    display: flex;
    column-gap: 30px;
    max-width: 600px;
    margin-top: var(--spacing-1);
    margin-bottom: var(--spacing-1);
  }

  :global(.short-presentation__text p){
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    :global(.short-presentation__title){
      font-size: 85px;
      line-height: 75px;
    }

    .short-presentation__text{
      padding: 0 var(--spacing-5);
    }
  }  
</style>