<script>
  import Text from "../atoms/Text.svelte";
  import Tag from "../molecules/Tag.svelte";
  import Margin from "../atoms/Margin.svelte";

  export let nbSlots = 2;
</script>

<div class="image-with-details">
  <slot name="image" />

  <div class="image-with-details__texts">
    <Text
      textTag='h1'
      class='text-preset-1'
    >
      <slot name="title" />
    </Text>
    <Margin marginTop="var(--spacing-1)" marginBottom="10px">
      <Tag cardColor="var(--grey-light)">
        <slot name="tag1" />
      </Tag>
    </Margin>
    <Tag cardColor="var(--grey-light)">
      <slot name="tag2" />
    </Tag>
    {#if nbSlots == 3}
      <Margin marginTop="10px">
        <Tag cardColor="var(--grey-light)">
          <slot name="tag3" />
        </Tag>
      </Margin>
    {/if}
  </div>
</div>

<style>
  .image-with-details{
    padding: 0 var(--spacing-4);
    display: flex;
    align-items: end;
    column-gap: var(--spacing-5);
  }

  :global(.image-with-details__image){
    margin-bottom: -40px;
  }

  .image-with-details__texts{
    padding-bottom: var(--spacing-5);
  }

  @media screen and (max-width: 700px){
    .image-with-details{
      padding: 0 var(--spacing-5);
      flex-wrap: wrap;
    }

    :global(.image-with-details__image){
      margin-bottom: var(--spacing-5);
      width: 100%;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 999px){
    :global(.image-with-details img){
      height: 450px
    }
  }

  @media screen and (min-width: 1000px){
    :global(.image-with-details img){
      height: 650px
    }
  }
</style>