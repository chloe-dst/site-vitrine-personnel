<script>
	import ArticleCard from "../molecules/ArticleCard.svelte";
  import Image from "../atoms/Image.svelte";
	import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";
  import Pagination from "../atoms/Pagination.svelte";

  let values = [];
  export let data;
</script>

<div class="blog">
  <ul class="blog-container block-center">
    {#each values as value}
      <li>
        <ArticleCard articleUrl="/blog/{value.slug}">
          <Image
            imageSrc={value.image} 
            imageAlt="Couverture article de blog sur {value.title}"
            imageWidth=380
            slot="image"
          />
          <span slot="linkName"> {value.title} </span>
        </ArticleCard>
      </li>
    {/each}
  </ul>

  <Pagination rows={data.summaries} perPage={9} bind:trimmedRows={values} />
</div>

<style>
  .blog-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: var(--spacing-5);
    row-gap: var(--spacing-5);
    margin: var(--spacing-4);
  }

  @media screen and (max-width: 750px) {
    .blog-container{
      margin: 0 var(--spacing-5) var(--spacing-4);
    }
  }
</style>
  