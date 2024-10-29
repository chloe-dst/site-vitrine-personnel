<script>
  import Icon from "../atoms/Icon.svelte";
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  
  import ArrowBackgroundIcon from "../../assets/icons/ArrowBackgroundIcon.svelte";

  export let articleUrl = "/blog/{value.slug}";
</script>

<div class="article-card">
  <Link linkUrl="{articleUrl}">
    <slot name="image" /> 
    <Text
      textTag='h2'
    >
      <slot name="linkName" />
    </Text>
    <div class="link-arrow">
      <div class="blog-circle"> </div>
      <Icon name="Arrow_background" width="80" height="80" iconColor>
        <ArrowBackgroundIcon />
      </Icon>
    </div>
  </Link>
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

  :global(.article-card img){
    border-radius: var(--large-radius) var(--large-radius) 0 0;
    height: 260px;
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

  :global(.article-card h2){
    width: 68%;
    height: 85px;
    font-size: 20px;
    font-family: var(--font-family-tercary);
    font-weight: 600;
    padding: 25px;
    line-height: 26px;
  }

  :global(.link-arrow .icon){
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 900px) {
    :global(.article-card h2) {
      max-width: 300px;
      font-size: 17px;
      width: 60%;
      height: 100px;
    } 
  }

  @media screen and (min-width: 750px) and (max-width: 900px) {
    :global(.article-card, .article-card img) {
      width: 300px;
    } 

    :global(.article-card h2) {
      max-width: 300px;
    } 
  }

  @media screen and (max-width: 750px) {
   :global(.article-card, .article-card img){
       width: 100%;
     }
  }
</style>