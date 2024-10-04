<script>
  import Text from "../atoms/Text.svelte";
  import Image from "../atoms/Image.svelte";

  import Contact from "../../assets/img/contact.png";
	import Margin from "../atoms/Margin.svelte";
</script>

<div class="image-title">
  <Text
   textTag='h1'
   class='image-title__main text--bold text--uppercase'
  >
   Contact
  </Text>
  <Text
   textTag='p'
   class='image-title__sub text--uppercase'
  >
   Contact
  </Text>

  <Margin marginTop="-140px">
    <Image
      imageSrc={Contact}
      imageAlt="Background with objects representing a freelance developer"
      imageWidth=445
      class="image-title__image block-center"
    />
  </Margin>
</div>

<style>
  :global(.image-title__main){
    font-size: 160px;
    font-family: var(--font-family-secondary);
    color: var(--color-primary);
  }

  :global(.image-title__sub){
    font-size: 160px;
    font-family: var(--font-family-secondary);
    color: transparent;
    -webkit-text-stroke: 2.5px var(--color-primary);
    margin-top: -20px;
  }

  @media screen and (max-width: 600px) {
    :global(.image-title__main),
    :global(.image-title__sub){
      font-size: 100px;
      margin-top: -10px;
    }

    :global(.image-title img){
      width: 100%;
    }

    :global(.image-title div){
      margin-top: -80px !important;
    }
  }
</style>