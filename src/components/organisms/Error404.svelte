<script>
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";

  import Image404 from "/404_illustration.svg"; 
</script>

<div class='error-404'>
  <Text
    textTag='h1'
    class='text-preset-3 text-center block-center'
  >
    Oups, cette page n’est pas disponible...
  </Text>
  <Image
    imageSrc={Image404}
    imageAlt="Image Chloé Doustalet site 404"
    imageWidth=550
  />
  <Link
    linkUrl='/'
    linkUnderlined
  > 
    retour accueil
  </Link>
</div>

<style>
  .error-404{
    justify-content: center;
    display: grid;
    justify-items: center;
    margin: var(--spacing-4);
  }

  :global(.error-404 h1){
    max-width: 300px;
  }

  @media screen and (max-width: 700px) {
    :global(.error-404 img){
      width: 120%;
    }
  }
</style>