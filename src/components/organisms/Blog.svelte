<script>
  import Image from "../atoms/Image.svelte";
	import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";
  import Pagination from "../atoms/Pagination.svelte";

  import ArrowBackgroundIcon from "../../assets/icons/ArrowBackgroundIcon.svelte";

  let values = [];
  export let data;
</script>

<div class="blog">
  <ul class="blog-container block-center">
    {#each values as value}
      <li>
        <Image
          imageSrc={value.image}
          imageAlt="Couverture article de blog sur {value.title}"
          imageWidth=380
          slot="image"
        />
        <Link linkUrl="/blog/{value.slug}"> {value.title} </Link>
        <div class="link-arrow">
          <div class="blog-circle"> </div>
          <Link linkUrl="/blog/{value.slug}">
            <Icon name="Arrow_background" width="80" height="80" iconColor>
              <ArrowBackgroundIcon />
            </Icon>
          </Link>
        </div>
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

  .blog-container li {
    display: flex;
    flex-wrap: wrap;
    max-width: 380px;
    background-color: var(--color-background-secondary);
    border-radius: var(--large-radius);
    position: relative;
    padding: 0;
  }

  :global(.blog-container img){
    border-radius: var(--large-radius) var(--large-radius) 0 0;
  }

  .blog-circle{
    border-radius:50%;
    width:114px;
    height:114px;
    background-color: var(--color-background-primary);
    position: absolute;
    right: -15px;
    bottom: -15px;
  }

  :global(.blog-container li > .link){
    width: 68%;
    height: 85px;
    font-size: 20px;
    font-family: var(--font-family-tercary);
    font-weight: 600;
    padding: 25px;
    line-height: 26px;
  }

  :global(.link-arrow .link){
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
  