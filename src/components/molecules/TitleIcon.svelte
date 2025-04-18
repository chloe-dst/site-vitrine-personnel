<script>
  import ClickExtrasIcon from "../../assets/icons/ClickExtrasIcon.svelte";
  
  import Icon from "../atoms/Icon.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Text from "../atoms/Text.svelte";

  export let textCenter = false;
  export let textSmall = false;
  export let iconMargin = '400';
</script>
 
<div class='title-icon {textSmall ? 'title-icon--small' : 'title-icon--big'}'>
  <Text
    textTag='h2'
    class="title-icon__title {textCenter ? 'block-center text-center' : ''}"
  >
    <slot />
  </Text>

  <Margin marginLeft="{iconMargin}px">
    <Icon name="clickExtras" width="40" height="50" class="icon-with-title" iconColor>
      <ClickExtrasIcon />
    </Icon>
  </Margin>
</div>

<style>
  :global(.title-icon__title){
    font-family: var(--font-family-tercary);
    max-width: 580px;
  }

  :global(.title-icon--big){
    font-size: 40px;
  }

  :global(.title-icon--small){
    font-size: 32px;
  }

  @media screen and (min-width: 750px) {
    :global(.title-icon--small .icon-with-title){
      margin-top: -10px;
    }
  }

  @media screen and (max-width: 750px) {
    :global(.title-icon--big){
      font-size: 30px;
      text-align: center;
    }

    :global(.title-icon--small){
      font-size: 24px;
      text-align: center;
    }

    :global(.title-icon__title .title-icon--big){
      padding: 0 var(--spacing-1);
    }
  }
</style>