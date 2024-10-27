<script>
  export let subheading = false;
  export let headerTransparent = false;
  export let headingImage = false;
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
      {#if subheading}
        <slot name='subheading' />
      {/if}
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

  :global(.hero-banner__title h1){
    font-size: 130px;
    margin-bottom: var(--spacing-1);
  }

  @media screen and (max-width: 1100px){
    :global(.hero-banner__title h1) {
      font-size: 110px;
      margin-bottom: var(--spacing-1);
      margin-top: var(--spacing-5);
    }

    .hero-banner__title{
      width: auto;
      padding: 0 var(--spacing-5);
      left: 0;
      transform: none;
    }
  }

  @media screen and (min-width: 750px) and (max-width: 1000px){
    .hero-banner__logo{
      width: 30%;
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
</style>