<script>
  export let textTag = 'p';
  export let textColor = '' ;
</script>

<svelte:element this={textTag}
  style:color= {textColor === 'white' ? 'var(--color-text-light)' : textColor === 'var(--color-text-regular)' }
  class='text {$$props.class}'
>
  <slot/>
</svelte:element>