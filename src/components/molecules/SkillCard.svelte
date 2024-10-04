<script>
  import Text from "../atoms/Text.svelte";

  export let widthCard="100%";
</script>

<div class="skill-card" style="width: {widthCard};">
  <div class="skill__title">
    <Text
      textTag='span'
      class='skill__title__number text-preset-5 text--bold'
    >
      <slot name='number' />
    </Text>
    <Text
      textTag='h2'
      class='text-preset-4'
    >
      <slot name='title' />
    </Text>
  </div>  
  <Text
    textTag='p'
    class='text-preset-5'
  >
    <slot name='text' />
  </Text>  
  <div class="skill__list">
    <ul>
      <li><slot name='skill-1'/></li>
      <li><slot name='skill-2'/></li>
      <li><slot name='skill-3'/></li>
    </ul>
    <ul>
      <li><slot name='skill-4'/></li>
      <li><slot name='skill-5'/></li>
      <li><slot name='skill-6'/></li>
    </ul>
  </div>
</div>

<style>
  .skill__title{
    display: flex;
    align-content: start;
    column-gap: 10px;
    margin-bottom: 10px;
  }

  :global(.skill__title__number){
    margin-top: -3px;
  }

  .skill__list{
    display: flex;
    column-gap: var(--spacing-5);
    margin-top: 10px;
    font-size: 14px;
    color: var(--grey);
  }

  @media screen and (max-width: 700px) {
    :global(.skill__title__number){
      margin-top: -5px;
    }

    .skill__list{
      font-size: 12px;
    }
  }
</style>