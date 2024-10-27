<script>
  export let data;
</script>

<section>
  <h1>Blog</h1>
  <ul>
    <ul>
      {#each data.summaries as { slug, title, image }}
        <img src="{image}" alt="Couverture de l'article">
        <li><a href="/blog/{slug}">{title}</a></li>
      {/each}
    </ul>
  </ul>
</section>

<style>
  /* Ajoute un peu de style pour ton blog */
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
  