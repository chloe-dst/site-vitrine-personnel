<script>
  import { goto } from '$app/navigation';

  import Button from "../atoms/Button.svelte";
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";
  import TitleIcon from "../molecules/TitleIcon.svelte";

  import PersonalPhoto from '../../assets/img/chloe-doustalet.png';
</script>
 
<div class='inline-presentation'>

  <div class='long-presentation_me'>
    <Image
      imageSrc={PersonalPhoto}
      imageAlt="Photo de Chloé Doustalet"
      imageWidth=280
      class=""
    />
  </div>

  <div>
    <TitleIcon></TitleIcon>

    <Text
      textTag='p'
      class='long-presentation__heading text-preset-5'
    >
      Moi c'est Chloé, passionnée par le digital et tout ce qui est créatif. Après plusieurs années d'expérience dans le e-commerce, j’accompagne aujourd'hui mes clients dans l'évolution de leur présence en ligne, à Bordeaux (où je vis) et partout en France. MON PARI ? Construire des sites sur-mesure, efficaces, esthétiques et engageants pour créer une vraie connexion avec votre cible.
    </Text>

    <Button on:click={() => goto('/contact')}> Me contacter </Button> 
  </div>

</div>

<style>
  .inline-presentation{
    display: flex;
  }
</style>