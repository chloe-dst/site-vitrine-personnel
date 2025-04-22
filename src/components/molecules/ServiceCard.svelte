<script>
  import Text from "../atoms/Text.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Icon from "../atoms/Icon.svelte";
</script>

<div class='service-card'>
  <div class="service-icon">
    <Icon class="block-center service__icon" name="UiUx" width="96" height="106" iconColor>
      <slot name='icon' />
    </Icon>
  </div>

  <Margin marginTop="var(--spacing-1)">
    <Text
      textTag='h3'
      class='service-title text--semibold'
    >
      <slot name='title' />
    </Text>
  </Margin>
  <Margin marginTop="10px">
    <Text
      textTag='p'
      class='text-preset-5'
    >
      <slot name='text' />
    </Text>
  </Margin>
</div>

<style>
  .service-card{
    padding: var(--spacing-1) var(--spacing-1) var(--spacing-5) var(--spacing-1);
    background-color: var(--color-background-secondary);
    border-radius: var(--small-radius);
  }

  .service-icon{
    background-color: var(--color-background-primary);
    padding: var(--spacing-1);
    border-radius: var(--small-radius);
  }

  :global(.service-title){
    font-size: 20px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1100px) {
    .service-card{
      width: calc(100% - 10px);
    }
  }
</style>