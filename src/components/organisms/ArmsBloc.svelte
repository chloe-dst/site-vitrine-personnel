<script>
    import Image from "../atoms/Image.svelte";
    import Margin from "../atoms/Margin.svelte";
    import Text from "../atoms/Text.svelte";
    import Link from "../atoms/Link.svelte";
  
    import Arms from '../../assets/img/arms.png';
  </script>
   
  <div class='arms-block'>

    <Text
      textTag='h2'
      class='text-preset-3 arms-block__text'
    >
      Construisons ensemble des sites web modernes, attractifs et performants. Mettons un design impactant et une expérience utilisateur optimisée au service de votre entreprise.
    </Text>
  
    <Image
      imageSrc={Arms}
      imageAlt="Logo"
      imageWidth=100%
      class="arms-block__image"
    />
    
    <Margin marginLeft="auto" marginTop="-100px">
      <Link
        linkUrl='/contact'
        class='arms-block__link text-center w-50'
        linkUnderlined
      > 
        me contacter
      </Link>
    </Margin>
    
  </div>

  <style>
    .arms-block{
      background-color: var(--color-background-secondary);
      padding-top: var(--spacing-4);
    }

    :global(.arms-block__text){
      max-width: 500px;
      margin-left: var(--spacing-4)
    }

    :global(.arms-block .arms-block__link){
      margin-left: auto;
      font-size: 26px;
      padding-bottom: var(--spacing-3);
    }

    @media screen and (max-width: 1100px) {
      :global(.arms-block__text){
        max-width: 50%;
      }
    }

    @media screen and (max-width: 600px) {
      :global(.arms-block__text){
        max-width: 70%;
        margin-left: var(--spacing-5);
      }

      :global(.arms-block .arms-block__link){
        margin-left: auto;
        font-size: 18px;
      }

      :global(.arms-block__image){
        margin-top: var(--spacing-5);
      }

      :global(.arms-block .margin){
        margin: 0 !important;
      }
    }
  </style>