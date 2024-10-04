<script>
  export let id = '';
  export let name = '';
  export let placeholder = '';
  export let width = 'calc(100% - 20px)';
  export let value = '';
  export let required = false;
</script>

{#if required}
  <input
    id={id} 
    name={name} 
    placeholder={placeholder}
    class="input text-preset-5 {$$props.class}"
    style="width: {width}"
    required
    bind:value
  />
{:else }
  <input
    id={id} 
    name={name} 
    placeholder={placeholder}
    class="input text-preset-5 {$$props.class}"
    style="width: {width}"
    bind:value
  />
{/if}

<style>

  .input{
    height: 18px;
    color: var(--color-text-medium);
    background-color: transparent;
    border: var(--border-height-regular) solid var(--color-border);
    padding: var(--spacing-1);
    font-family: var(--font-family-primary);
    margin-bottom: 10px;
  }

  input::placeholder{
    font-size: var(--font-size-regular);
    font-family: var(--font-family-primary);
  }

  .input:focus {
    color: var(--color-text-regular);
  }

  .input-invalid {
    border: var(--border-height-thick) solid red;
  }

</style>
