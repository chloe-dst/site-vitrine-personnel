<script>
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";
  import Margin from "../atoms/Margin.svelte";

  export let data;
</script>


<div class="article-content-container">
  <div class="article-content block-center">
    <Image
      imageSrc={data.image} 
      imageAlt="Couverture article de blog sur {data.title}"
      imageWidth=950
    />

    <Margin marginTop="var(--spacing-1)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h1'
        class='text-preset-3 text-center'
      >
        {data.title}
      </Text>
    </Margin>

    <Text
      textTag='p'
      class='text-preset-5 text--italic'
    >
      {data.intro}
    </Text>
  
    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-5)">
      <ul class="article-table-content">
        <Text
          textTag='h3'
          class='text-preset-5 text--bold'
        >
          Sommaire :
        </Text>
        {#each data.table as list, i}
          <li> <a href="#title{i+1}">{list}</a> </li>
        {/each}
      </ul>
    </Margin>
  
    <div class="article-content__main">
      {@html data.content}
    </div>
  </div>
</div>

<style>
  .article-content-container{
    background-color: var(--color-background-secondary);
  }

  .article-content{
    max-width: 950px;
    padding: var(--spacing-4);
  }

  :global(.article-content img){
    height: 450px;
    object-fit: cover;
  }

  .article-table-content{
    background-color: var(--color-background-primary);
    padding: var(--spacing-5);
    border-radius: var(--large-radius);
  }

  :global(.article-table-content h3){
    padding-bottom: 10px;
  }

  :global(.article-table-content li){
    padding-bottom: 5px;
  }

  .article-table-content a:hover{
    font-weight: var(--font-weight-semibold);
  }

  .article-content__main{
    padding-top: var(--spacing-1);
  }

  :global(.article-content__main h2){
    padding-bottom: var(--spacing-1);
    font-family: var(--font-family-secondary);
    font-size: 24px;
  }

  :global(.article-content__main p){
    font-weight: var(--font-weight-regular);
    line-height: 1.4;
  }

  :global(.article-content__tips){
    padding: 40px;
    background-color: var(--color-background-primary);
    border-radius: var(--large-radius);
  }

  @media screen and (min-width: 750px) {
    .article-table-content{
      width: 50%;
    }
  }

  @media screen and (max-width: 900px) {
    .article-content{
      padding: var(--spacing-5);
    }

    :global(.article-content img){
      width: -webkit-fill-available;
    }
  }
</style>
