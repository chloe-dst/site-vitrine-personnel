<script>
  export let marginTop = "0";
  export let buttonForm = false;
  export let linkExternal = false;
</script>

{#if buttonForm}
  <button
    type="submit"
    class="button text-preset-5 {$$props.class}"
    style='margin-top: {marginTop}'
  >            
    <slot/>
  </button>
{:else if linkExternal}
  <button
    on:click
    class="button text-preset-5 {$$props.class}"
    style='margin-top: {marginTop}'
    target="_blank" 
  >            
    <slot/>
</button>
{:else}
  <button
    on:click
    class="button text-preset-5 {$$props.class}"
    style='margin-top: {marginTop}'
  >            
    <slot/>
  </button>
{/if}

<style>
  .button{
    font-family: var(--font-family-secondary);
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: none;
    border-radius: var(--small-radius);
    height: 40px;
    padding: 10px 25px;
    cursor: pointer;
  }
  
  .button:hover{
    background-color: var(--color-background-tercary);
    border: none;
  } 

  .button:active{
    background-color: var(--color-highlight);
    border: var(--border-height-thick) solid var(--color-highlight);
  }

  .button:disabled{  
    background-color: var(--color-disabled);
    border: var(--border-height-thick) solid var(--color-disabled);
  }

  .button:focus{ 
    border: var(--border-height-thick) solid var(--color-highlight);
  }

  @media screen and (max-width: 600px) {
    .button{
      font-size: 16px;
    }
  }
</style>