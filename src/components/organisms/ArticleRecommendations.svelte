<script>
  import ArticleCard from "../molecules/ArticleCard.svelte";
  import Text from "../atoms/Text.svelte";
  import Image from "../atoms/Image.svelte";
  import Margin from "../atoms/Margin.svelte";

  export let data;
</script>

<div class="article-recommendations-container">
  <Margin marginBottom="var(--spacing-5)">
    <Text
      textTag='h3'
      class='text-preset-1'
    >
      En découvrir plus
    </Text>
  </Margin>

  <div class="article-recommendations">
    {#each data as { slug, title, image }}
      <ArticleCard articleUrl="/blog/{slug}">
        <Image
          imageSrc={image} 
          imageAlt="Couverture article de blog sur {title}"
          imageWidth=380
          slot="image"
        />
        <span slot="linkName"> {title} </span>
      </ArticleCard>
    {/each}
  </div>
</div>

<style>
  .article-recommendations-container{
    padding: var(--spacing-4);
  }

  .article-recommendations{
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) {
    .article-recommendations-container{
      padding: var(--spacing-4) var(--spacing-5);
    }

    .article-recommendations{
      flex-wrap: wrap;
    }
  }
</style>