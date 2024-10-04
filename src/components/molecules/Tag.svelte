<script>
  import Text from "../atoms/Text.svelte";

  export let cardColor = 'var(--color-primary)';
  export let smallFont = false;
</script>
  
<div class='tag {$$props.class}' style="background-color: {cardColor};">
  <Text
    textTag='span'
    class='text-preset-6 {smallFont ? 'tag--small' : '' }'
  >
    <slot />
  </Text>
</div>
  
<style>
  .tag{
    border-radius: var(--small-radius);
    padding: 10px 20px 12px 20px;
    width: fit-content;
    color: var(--white);
  }

  :global(.tag--small p, .tag--small span){
    font-size: var(--font-size-label-1);
  }

  @media screen and (max-width: 700px){
    :global(.tag .text){
      font-size: var(--font-size-label-1);
    }
  }
</style>