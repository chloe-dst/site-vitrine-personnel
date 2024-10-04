<script>
  import Text from "../atoms/Text.svelte";
  import Image from "../atoms/Image.svelte";

  import Hand from '../../assets/img/hand.png';
</script>

<div class="two-colors-squares">
  <div class="square-1">
    <Text
      textTag='h2'
      class='text-preset-2'
    >
      Un projet ? <br> Besoin d'être
    </Text>
    <Text
      textTag='h2'
      class='text-preset-3 square-1--highlight'
    >
      accompagné ?
    </Text>
  </div>

  <div class="square-2">
    <slot/>
    <Image
      imageSrc={Hand}
      imageAlt="Hand drawing"
      imageHeigth=270
      imageWidth=200
    />
  </div>
</div>

<style>
  .two-colors-squares{
    display: flex;
    align-items: center;
  }

  .two-colors-squares > div{
    width: 50%;
    height: 700px;
    padding: 0 var(--spacing-4);
    align-content: center;
  }

  .square-1{
    background-color: var(--color-background-tercary);
  }

  :global(.square-1--highlight){
    font-size: 60px;
  }

  .square-2{
    position: relative;
  }

  :global(.square-2 .link){
    font-size: 26px;
    max-width: 350px;
    line-height: 40px;
  }

  :global(.square-2 img){
    position: absolute;
    bottom: -40px;
    right: 120px;
    transform: rotate(-14deg);
  }

  @media screen and (max-width: 1100px){
    .two-colors-squares > div{
      height: 500px;
    }

    :global(.square-1--highlight){
      font-size: 38px;
    }

    :global(.square-1 .text-preset-2){
      font-size: 40px;
    }

    :global(.square-2 .link){
      font-size: 20px;
    }

    :global(.square-2 img){
      width: 160px;
    }
  }

  @media screen and (max-width: 700px){
    .two-colors-squares{
      flex-wrap: wrap;
    }

    .two-colors-squares > div{
      height: 400px;
      width: 100%;
    }

    :global(.square-2 img){
      width: 130px;
    }
  }
</style>