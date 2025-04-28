<script>
  import Link from "../atoms/Link.svelte";
  import Button from "../atoms/Button.svelte";
</script>

<ul class='nav'>
  <Link
    linkUrl='/services'
    linkColor
  > 
    Services
  </Link>

  <Link
    linkUrl='/projets' 
    linkColor
  >
    Projets
  </Link>

  <Link
    linkUrl='/blog' 
    linkColor
  >
    Conseils
  </Link>

  <Link
    linkUrl='/contact' 
    linkColor
  >
    Contact
  </Link>

  <Button on:click={() => window.open("https://calendly.com/chloe-doustalet/30min", "_blank")}> APPEL DECOUVERTE </Button>
</ul>
  

<style>
  .nav{
    width: calc(100% - 210px);
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    column-gap: 60px;
  }
</style>