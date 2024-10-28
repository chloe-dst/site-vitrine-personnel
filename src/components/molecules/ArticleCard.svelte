<script>
  import Icon from "../atoms/Icon.svelte";
  import Link from "../atoms/Link.svelte";
  
  import ArrowBackgroundIcon from "../../assets/icons/ArrowBackgroundIcon.svelte";

  export let articleUrl = "/blog/{value.slug}";
</script>

<div class="article-card">
  <slot name="image" />
  <Link linkUrl={articleUrl}> 
    <slot name="linkName" />
  </Link>
  <div class="link-arrow">
    <div class="blog-circle"> </div>
    <Link linkUrl="{articleUrl}">
      <Icon name="Arrow_background" width="80" height="80" iconColor>
        <ArrowBackgroundIcon />
      </Icon>
    </Link>
  </div>
</div>

<style>
  .article-card {
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

  :global(.blog-container .article-card > .link){
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