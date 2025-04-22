<script>
    export let title = ""; // Titre de l'accordéon
    export let isOpenByDefault = false; // État initial (fermé par défaut)

    import Text from "../atoms/Text.svelte";
    
    // État local pour gérer l'ouverture/fermeture
    let isOpen = isOpenByDefault;
    
    // Fonction pour basculer l'état
    function toggle() {
      isOpen = !isOpen;
    }
</script>
  
<div class="accordion">
    <button class="accordion-header" on:click={toggle}>
      <h3 class="text-preset-1">{title}</h3>
      <span class="icon">{isOpen ? '−' : '+'}</span>
    </button>
    
    {#if isOpen}
      <div class="accordion-content">
        <Text
            textTag='p'
            class='text-preset-5'
        >
            <slot></slot>
        </Text>
      </div>
    {/if}
  </div>
  
  <style>
    .accordion {
      overflow: hidden;
      width: 100%;
    }
    
    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: none;
      cursor: pointer;
      text-align: left;
      background-color: transparent;
    }

    :global(.accordion-header .text-preset-1){
        font-size: var(--font-size-heading-3);
    }
    
    .icon {
      font-size: 24px;
      font-weight: bold;
    }
    
    .accordion-content {
      padding: var(--spacing-1) var(--spacing-5);
    }

    @media screen and (max-width: 750px){
        .accordion-content {
            padding: var(--spacing-1) var(--spacing-1);
        }
    }
</style>