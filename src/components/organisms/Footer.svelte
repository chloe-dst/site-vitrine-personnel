<script>
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Logo from '../../assets/img/logo_white.svg';
   
</script>

<div class='footer'>
  <Margin marginTop="125px" class="w-100">
    <Image
        imageSrc={Logo}
        imageAlt="Logo Chloé Doustalet développeur web"
        imageWidth=160
    />
  </Margin>

  <Margin marginTop="30px" class="w-100">
    <Text
      textTag='p'
      class='text--uppercase text-center block-center'
      textColor='white'
    >
      Envie d'un site web efficace et attractif ? Contactez-moi dès maintenant
    </Text>
  </Margin>

  <div class="footer-contact">
    <Link
      linkUrl='/contact'
      linkUnderlined> 
      me contacter
    </Link>

    <Link
      linkUrl='https://calendly.com/chloe-doustalet/30min'
      linkUnderlined> 
      appel découverte
    </Link>
  </div>
  
  <Margin marginTop="125px" marginBottom="var(--spacing-5)" marginRight="var(--spacing-2)" marginLeft="auto">
    <Text
      textTag='span'
      class='copyright-text text--light text-right w-100'
      textColor='white'
    >
      Copyright (c) 2024 - Chloé Doustalet - <a href="/mentions-legales/">Mentions légales</a>
    </Text>
  </Margin>
</div>

<style>
  .footer{
    position: sticky;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: var(--spacing-3);
    background-color: var(--color-primary);
  }

  :global(.footer img){
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  :global(.footer p){
    font-family: var(--font-family-secondary);
    font-size: 22px;
    max-width: 450px;
  }

  :global(.footer span){
    font-family: var(--font-family-primary);
    font-size: 12px;
  }

  .footer-contact{
    margin-top: 30px;
    display: flex;
    width: 100%;
    column-gap: var(--spacing-1);
    justify-content: center;
  }

  :global(.footer-contact .link){
    color: var(--color-text-light) !important;
    font-weight: var(--font-weight-light);
  }

  :global(.copyright-text a){
    color: white;
    font-size: 12px;
    font-weight: var(--font-weight-light);
  }

  @media screen and (max-width: 700px){
    :global(.footer p){
      margin: 0 var(--spacing-5);
    }

    .footer-contact{
      flex-wrap: wrap;
      row-gap: 12px;
    }

    :global(.footer-contact .link){
      text-align: center;
      width: 100%;
    }
  }
</style>