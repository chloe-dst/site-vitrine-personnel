<script>
  import ClickExtrasIcon from "../../assets/icons/ClickExtrasIcon.svelte";
  
  import Icon from "../atoms/Icon.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Text from "../atoms/Text.svelte";
</script>
 
<div class='title-icon'>
  <Text
    textTag='h1'
    class='tag-list__title block-center text-center'
  >
    <slot />
  </Text>

  <Margin marginLeft="180px">
    <Icon name="clickExtras" width="40" height="50" class="icon-with-title" iconColor>
      <ClickExtrasIcon />
    </Icon>
  </Margin>
</div>

<style>
  :global(.tag-list__title){
    max-width: 580px;
    font-size: 40px;
    font-family: var(--font-family-tercary);
  }

  @media screen and (max-width: 600px) {
    :global(.tag-list__title){
      font-size: 30px;
      padding: 0 var(--spacing-1);
    }
  }
</style>