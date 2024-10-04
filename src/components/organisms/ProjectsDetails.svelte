<script>
  import Text from "../atoms/Text.svelte";
  import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";

  import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "../../assets/icons/ArrowRightIcon.svelte";

  export let urlLeft = '/projets/blomea-studio';
  export let urlRight = '/projets/in-my-temple';
  export let nbList = 3;
</script>

<div class="projects-details">
  <div class="projects-details__presentation">
    <Text
      textTag='p'
      class='text-preset-5'
    >
      <slot name='description' />
    </Text>

    <div>
      <Text
        textTag='span'
        class='text-preset-5'
      >
        Principales missions :
      </Text>

      <ul class="projects-details__list">
        <slot name='list1' />
        <slot name='list2' />
        <slot name='list3' />
        {#if nbList == 4}
          <slot name='list4' />
        {/if}
      </ul>
    </div>
  </div>

  <div class="projects-details__images">
    <slot name="image1" />
    <slot name="image2" />
    <slot name="image3" />
  </div>

  <div class="projects-details__arrows">
    <Link
      linkUrl={urlLeft}
    > 
      <Icon name="ArrowLeft" width="50" height="20">
        <ArrowLeftIcon />
      </Icon>
    </Link>

    <Link
      linkUrl={urlRight}
    > 
      <Icon name="ArrowRight" width="52" height="20">
        <ArrowRightIcon />
      </Icon>
    </Link>
  </div>
</div>

<style>
  .projects-details{
    background-color: var(--color-background-secondary);
    padding: var(--spacing-2) var(--spacing-4);
  }

  .projects-details__presentation{
    display: flex;
    justify-content: space-between;
  }

  .projects-details__list{
    margin-left: 20px;
  }

  :global(.projects-details__list li){
    padding: 5px;
    list-style-image: url('../../assets/img/click.png');
  }

  :global(.projects-details__presentation p){
    width: 55%;
  }

  .projects-details__images{
    padding: var(--spacing-4) 0 var(--spacing-5) 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: var(--spacing-1);
    column-gap: var(--spacing-1);
  }

  .projects-details__arrows{
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1100px){
    :global(.projects-details__images img){
      width: 100%;
    }
  }

  @media screen and (max-width: 700px){
    .projects-details{
      padding: var(--spacing-5);
    }

    .projects-details__presentation{
      flex-wrap: wrap;
      row-gap: var(--spacing-5);
    }

    :global(.projects-details__presentation p){
      width: 100%;
    }

    .projects-details__images{
      padding: var(--spacing-5) 0 var(--spacing-5) 0;
    }

    :global(.projects-details__images img){
      height: 350px;
    }

    .projects-details__arrows{
      margin-bottom: var(--spacing-5);
    }
  }
</style>