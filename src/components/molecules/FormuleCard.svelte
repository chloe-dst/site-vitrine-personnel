<script>
  export let cardPaddingSides = '140';
  export let cardPaddingHeight = '80';
  export let cardColor = 'var(--color-primary)';
</script>

<div class='formule-card' style="background-color: {cardColor}; padding-top: {cardPaddingHeight}px; padding-bottom: {cardPaddingHeight}px; padding-left: {cardPaddingSides}px; padding-right: {cardPaddingSides}px;">
    <p class="text-center"><slot /></p>
</div>

<style>
  .formule-card{
    width: fit-content;
    color: var(--color-text-light);
    border-radius: var(--large-radius);
    font-size: 20px;
  }

  @media screen and (max-width: 600px){
    .formule-card{
      font-size: 16px;
    }
  }
</style>
