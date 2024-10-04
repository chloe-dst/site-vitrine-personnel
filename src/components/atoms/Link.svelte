<script>
  /**
   * @type {string}
  */
  export let linkUrl = '#';
  export let linkUnderlined = false;
  export let linkColor = false;
</script>

<a href="{linkUrl}"
  on:click
  class="link {$$props.class}"
  style="text-decoration: {linkUnderlined ? 'underline' : 'none'}; color: {linkColor ? 'var(--color-primary)' : 'var(--color-text-regular)'};"
>          
    <slot/>
</a>

<style>
  .link, :global(a){
    font-family: var(--font-family-primary);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-regular);
    text-decoration: none;
    text-underline-offset: 5px;
  }
  
  .link{
    display: block;
  }

  .link:hover{
    font-weight: var(--font-weight-semibold);
  }
</style>
  