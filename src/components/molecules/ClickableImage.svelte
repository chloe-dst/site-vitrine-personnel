<script>
  import Margin from "../atoms/Margin.svelte";
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";

  export let linkUrl = '#';
</script>
 
<div class='clickable-image'>
  <Link linkUrl='{linkUrl}'> 
    <slot name='image' />
  </Link>
  
  <Margin marginLeft="var(--spacing-1)" marginTop="-50px">
    <Link linkUrl='{linkUrl}'> 
      <Text
        textTag='h3'
        class='text-preset-4'
        textColor='white'
      >
        <slot name='title' />
      </Text>
    </Link>
  </Margin>
</div>

<style>
</style>