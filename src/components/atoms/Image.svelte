<script>
  export let imageSrc = '';
  export let imageAlt = 'image';
  export let imageWidth = 'auto';
  export let imageHeight = 'auto';
</script>

<img
  src={imageSrc}
  alt={imageAlt}
  class='image {$$props.class}'
  width={imageWidth}
  height={imageHeight}
/>

<style>
  .image{
    object-fit: cover;
  }
</style>