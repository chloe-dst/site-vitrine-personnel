<script>
  import { goto } from '$app/navigation';

  import Button from "../atoms/Button.svelte";
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";
  import TitleIcon from "../molecules/TitleIcon.svelte";

  import PersonalPhoto from '../../assets/img/chloe-doustalet.png';
</script>
 
<div class='inline-presentation block-center'>

  <div class='inline-present ation__image'>
    <Image
      imageSrc={PersonalPhoto}
      imageAlt="Photo de Chloé Doustalet"
      imageWidth=280
      class=""
    />
  </div>

  <div class='inline-presentation__texts'>
    <TitleIcon textSmall iconMargin="70">Je vous accompagne dans la création de votre identité digitale</TitleIcon>

    <Text
      textTag='p'
      class='text-preset-5'
    >
      Moi c'est Chloé, passionnée par le digital et tout ce qui est créatif. Après plusieurs années d'expérience dans le e-commerce, j’accompagne aujourd'hui mes clients dans l'évolution de leur présence en ligne. <bR>MON PARI ? Construire des sites sur-mesure, efficaces, esthétiques et engageants pour créer une vraie connexion avec votre cible.
    </Text>

    <Button on:click={() => goto('/contact')}> Me contacter </Button> 
  </div>

</div>

<style>
  .inline-presentation{
    padding: var(--spacing-5) var(--spacing-4);
    background-color: var(--color-background-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: var(--spacing-4);
  }

  :global(.inline-presentation img){
    border-radius: 60px;
  }

  .inline-presentation__texts{
    max-width: 620px;
  }

  :global(.inline-presentation__texts p){
    margin-bottom: var(--spacing-1); 
  }

  @media screen and (max-width: 750px) {
    .inline-presentation{
      padding: var(--spacing-4) var(--spacing-5);
      flex-wrap: wrap;
      row-gap: var(--spacing-5);
    }

    :global(.inline-presentation .button){
     display: block;
      margin: auto;
    }
  }
</style>