<script>
  export let subheading = false;
</script>
 
<div class='hero-banner'>
    <div class='hero-banner__background hidden-phone'>
      <slot name='imageDesktop' />
    </div>

    <div class='hero-banner__background hidden-desktop'>
      <slot name='imageMobile' />
    </div>

    <div class='hero-banner__logo'>
      <slot name='heading' />
      {#if subheading}
        <slot name='subheading' />
      {/if}
    </div>
</div>

<style>
  .hero-banner{
    position: relative;
    margin-top: -120px;
  }

  .hero-banner__logo{
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 800px){
    .hero-banner__logo{
        width: 30%;
    }
  }
</style>