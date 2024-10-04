<script>
  import ContactForm from "../../components/molecules/ContactForm.svelte";
  import ImageTitle from "../../components/molecules/ImageTitle.svelte";
</script>

<div class="form">
  <ImageTitle />
  <ContactForm />
</div>

<style>
  .form{
    display: flex;
    justify-content: space-around;
    column-gap: var(--spacing-2);
    padding: var(--spacing-5) var(--spacing-4) var(--spacing-2) var(--spacing-4);
  }

  @media screen and (max-width: 1100px) {
    .form{
      flex-wrap: wrap;
      row-gap: var(--spacing-5);
      padding: var(--spacing-5);
    }
  }
</style>