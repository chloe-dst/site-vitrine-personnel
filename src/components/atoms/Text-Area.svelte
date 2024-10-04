<script>
  export let id = '';
  export let name = '';
  export let width = 'auto';
  export let placeholder = '';
  export let value = '';
</script>

<textarea 
  id={id} 
  name={name} 
  placeholder={placeholder}
  class="text-preset-5 {$$props.class}"
  style="width: {width}"
  bind:value
/>

<style>
  textarea {
    height: 80px;
    padding: var(--spacing-1);
    color: var(--color-text-medium);
    background-color: transparent;
    border: var(--border-height-regular) solid var(--color-border);
  }

  textarea::placeholder{
    font-size: var(--font-size-regular);
    font-family: var(--font-family-primary);
  }

  textarea:focus {
    color: var(--color-text-regular);
  }

  textarea:focus-visible {
    outline: var(--border-height-regular) solid var(--color-text-regular);
    outline-offset: -1px;
  }
</style>