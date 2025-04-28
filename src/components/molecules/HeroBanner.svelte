<script>
  export let subheading = false;
  export let headerTransparent = false;
  export let headingImage = false;

  import Button from "../atoms/Button.svelte";
  import Text from "../atoms/Text.svelte";
</script>
 
<div class='hero-banner {headerTransparent ? 'hero-banner--transparent' : ''}'>
    <div class='hero-banner__background hidden-phone'>
      <slot name='imageDesktop' />
    </div>

    <div class='hero-banner__background hidden-desktop'>
      <slot name='imageMobile' />
    </div>

    <div class="{headingImage ? 'hero-banner__title' : 'hero-banner__logo'}">
      <slot name='heading' />
      {#if subheading && headerTransparent}
        <Text
          textTag='h1'
          class='text-preset-3 text-center hero-banner__subheading'
        >
          <slot name='subheading' />
        </Text>
      {:else if subheading}
        <Text
          textTag='p'
          class='text-preset-3 text-center hero-banner__subheading'
        >
          <slot name='subheading' />
        </Text>
      {/if}
      <Button class="hero-banner__button" on:click={() => window.open("https://calendly.com/chloe-doustalet/30min", "_blank")}> Réserver un appel </Button>
    </div>
</div>

<style>
  .hero-banner{
    position: relative;
  }

  .hero-banner--transparent{
    margin-top: -120px;
  }

  .hero-banner__logo, .hero-banner__title{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hero-banner__title, .hero-banner__logo{
    width: 30%;
  }

  :global(.hero-banner__subheading){
    padding-top: var(--spacing-1);
  }

  :global(.hero-banner__title h1){
    font-size: 130px;
    margin-bottom: var(--spacing-1);
  }

  :global(.hero-banner__button){
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--spacing-1) !important;
  }

  @media screen and (max-width: 900px){
    .hero-banner {
      margin-top: -20px;
    }

    :global(.hero-banner__logo){
      width: 70% !important;
    }

    :global(.hero-banner__logo img){
      max-width: 150px;
    }

    :global(.title-icon > .margin){
      margin-left: 0 !important;
      margin-top: var(--spacing-1) !important;
    }

    :global(.hero-banner__title h1) {
      font-size: 80px;
      margin-top: var(--spacing-5);
      margin-bottom: 0;
    }

    .hero-banner__title{
      width: auto;
      padding: 0 var(--spacing-5);
      left: 0;
      transform: none;
    }
  }

  @media screen and (min-width: 750px) and (max-width: 900px){
    .hero-banner__logo{
      width: 50%;
    }

    .hero-banner__title{
      width: 50%;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
    }

    :global(.hero-banner__title h1) {
      margin-top: var(--spacing-2);
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1200px){
    :global(.hero-banner__title h1) {
      font-size: 90px;
    }
  }
</style>