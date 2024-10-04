<script>
  import { goto } from '$app/navigation';

  import Icon from "../atoms/Icon.svelte";
  import Text from "../atoms/Text.svelte";
  import Button from "../atoms/Button.svelte";

  import CheckIcon from "../../assets/icons/CheckIcon.svelte";
  import Margin from "../atoms/Margin.svelte";
</script>

<div class="form-success block-center">
  <Margin marginBottom="var(--spacing-1)">
    <Icon name="CheckIcon" width="55" height="55" class="block-center" iconColor>
      <CheckIcon />
    </Icon>
  </Margin>  
  <Text
    textTag='h1'
    class='text-preset-3 text-center block-center'
  >
    Merci !
  </Text>
  
  <Margin marginTop="var(--spacing-1)" marginBottom="var(--spacing-1)">
    <Text
      textTag='p'
      class='text-preset-5 block-center text-center'
    >
      Votre message vient d'être envoyé et je reviendrai vers vous le plus vite possible.
      <br>Vous pouvez aussi me contacter à l'adresse mail : 
      <br>chloe.doustalet@gmail.com
    </Text>
  </Margin>
  
  <Button class="block-center" on:click={() => goto('/')}> Accueil </Button>
</div>

<style>
    .form-success{
      margin-top: var(--spacing-4);
      margin-bottom: var(--spacing-3);
      width: fit-content;
      padding: var(--spacing-5) var(--spacing-4);
      border: 2px solid var(--color-background-tercary);
      border-radius: var(--small-radius);
    }

    @media screen and (max-width: 990px) {
      .form-success{
        margin: var(--spacing-4);
      }
    }

    @media screen and (max-width: 600px) {
      .form-success{
        margin: var(--spacing-4) var(--spacing-1);
        padding: var(--spacing-5);
      }
    }
</style>