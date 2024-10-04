<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Margin from "../atoms/Margin.svelte";
  import FormuleCard from "../molecules/FormuleCard.svelte";
</script>

<div class="cards-mix"> 
  <Text
    textTag='h2'
    class='text-preset-1'
  >
    Créons ensemble la formule qui vous convient
  </Text>

  <div class="cards-mix__cards hidden-phone">
    <FormuleCard cardPaddingHeight=130 cardPaddingSides=170> UI/UX Design </FormuleCard>
    <FormuleCard cardColor="#84170D" cardPaddingHeight=150 cardPaddingSides=115> Développement web </FormuleCard>
    <FormuleCard cardColor="#E2594C" cardPaddingHeight=145 cardPaddingSides=125> Refonte / Optimisations </FormuleCard>
    <FormuleCard cardColor="#EF8E85" cardPaddingHeight=80 cardPaddingSides=200> Maintenance / Formation </FormuleCard>
    <FormuleCard cardColor="#854F4A" cardPaddingHeight=100 cardPaddingSides=125> DA / Graphisme </FormuleCard>
  </div>

  <div class="cards-mix__cards hidden-desktop">
    <FormuleCard cardColor="#84170D" cardPaddingHeight=60 cardPaddingSides=70> Développement web </FormuleCard>
    <FormuleCard cardPaddingHeight=45 cardPaddingSides=50> UI/UX<br> Design </FormuleCard>
    <FormuleCard cardColor="#E2594C" cardPaddingHeight=45 cardPaddingSides=25> Refonte / <br> Optimisations </FormuleCard>
    <FormuleCard cardColor="#EF8E85" cardPaddingHeight=60 cardPaddingSides=40> Maintenance / <br> Formation </FormuleCard>
    <FormuleCard cardColor="#B1544C" cardPaddingHeight=35 cardPaddingSides=25> Création <br> contenu </FormuleCard>
    <FormuleCard cardColor="#854F4A" cardPaddingHeight=35 cardPaddingSides=35> Graphisme / <br> Communication </FormuleCard>
  </div>
  
  <Margin marginTop="var(--spacing-5)">
    <Link
      linkUrl='/contact'
      class='cardsmix__link text-center block-center'
      linkUnderlined
    > 
      me contacter
    </Link>
  </Margin>
</div>

<style>
  .cards-mix{
    padding: var(--spacing-2) var(--spacing-4); 
  }

  .cards-mix__cards{
    position: relative;
    height: 645px;
  }

  :global(.cards-mix__cards .formule-card:first-child){
    position: absolute;
    top: 130px;
    left: 0;
  }

  :global(.cards-mix__cards .formule-card:nth-child(2)){
    position: absolute;
    top: 100px;
    left: 470px;
    transform: rotate(-22deg);
    z-index: 1;
  }

  :global(.cards-mix__cards .formule-card:nth-child(3)){
    position: absolute;
    top: 75px;
    left: 845px;
    transform: rotate(13deg);
  }

  :global(.cards-mix__cards .formule-card:nth-child(4)){
    position: absolute;
    top: 420px;
    left: 180px;
    transform: rotate(10deg);
  }

  :global(.cards-mix__cards .formule-card:last-child){
    position: absolute;
    top: 375px;
    left: 815px;
    transform: rotate(-15deg);
  }

  :global(.link.cardsmix__link){
    font-size: 26px;
    font-weight: var(--font-weight-light);
  }

  @media screen and (min-width: 700px){
    :global(.cards-mix h2){
      width: 50%;
    }
  }

  @media screen and (max-width: 1100px){
    .cards-mix__cards{
      margin-top: 70px;
      height: 445px;
    }

    :global(.cards-mix__cards .formule-card:first-child){
      top: 0;
      left: 50%;
      transform: translate(-50%);
    }

    :global(.cards-mix__cards .formule-card:nth-child(2)){
      top: 120px;
      left: 10%;
      transform: rotate(-11deg);
    }

    :global(.cards-mix__cards .formule-card:nth-child(3)){
      top: 140px;
      right: 10%;
      left: auto;
      transform: rotate(11deg);
      z-index: 2;
    }

    :global(.cards-mix__cards .formule-card:nth-child(4)){
      top: 200px;
      left: 50%;
      transform: translate(-50%);
      z-index: 1;
    }

    :global(.cards-mix__cards .formule-card:nth-child(5)){
      position: absolute;
      top: 315px;
      left: 20%;
      transform: rotate(20deg);
      z-index: 3;
    }

    :global(.cards-mix__cards .formule-card:nth-child(6)){
      position: absolute;
      top: 330px;
      left: auto;
      right: 10%;
      transform: rotate(-9deg);
      z-index: 4;
    }

    :global(.link.cardsmix__link){
      font-size: 18px;
    }
  }

  @media screen and (max-width: 700px){
    .cards-mix{
      padding: var(--spacing-4) var(--spacing-5); 
    }

    :global(.cards-mix__cards .formule-card:first-child){
      left: 50%;
    }

    :global(.cards-mix__cards .formule-card:nth-child(2)){
      left: 0;
    }

    :global(.cards-mix__cards .formule-card:nth-child(3)){
      right: 0;
      left: auto;
    }

    :global(.cards-mix__cards .formule-card:nth-child(4)){
      top: 220px;
      left: 75px;
      transform: inherit;
    }

    :global(.cards-mix__cards .formule-card:nth-child(5)){
      left: 0;
    }

    :global(.cards-mix__cards .formule-card:nth-child(6)){
      left: auto;
      right: 5px;
    }
  }
</style>