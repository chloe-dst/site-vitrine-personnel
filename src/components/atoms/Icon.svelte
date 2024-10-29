<script>
  /**
   * @type {string}
  */
  export let name = '';
  export let iconColor = false;
  export let width = "30";
  export let height = "30";
</script>

<div style='width:{width}px; height:{height}px' class='icon {$$props.class}'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={name}
    role="presentation"
    class={$$props.class}
    viewBox="0 0 {width} {height}"
    preserveAspectRatio="xMidYMid meet"
  >
    <title id={name} lang="en">{`${name} icon`}</title>
    <g fill="{iconColor ? 'var(--color-primary)' : 'var(--color-text-regular)'}">
      <slot />
    </g>
  </svg>
</div>

<style>
  .icon-with-title{
    margin-left: auto;
    margin-right: auto;
  }
</style>