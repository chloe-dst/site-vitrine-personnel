<script>
  import TitleIcon from "../molecules/TitleIcon.svelte";
  import Tag from "../molecules/Tag.svelte";
  import Link from "../atoms/Link.svelte";
  import Margin from "../atoms/Margin.svelte";
</script>
 
<div class='tag-list'>
  <TitleIcon textCenter>
    Je crée des sites internet sur mesure conçus pour faire grandir votre activité
  </TitleIcon>

  <div class="skills-tags">
    <Tag >Développement web</Tag>
    <Tag cardColor="#C9463A" class="hidden-phone">Web Design</Tag>
    <Tag cardColor="#C9463A" class="hidden-desktop">Web Design</Tag>
    <Tag cardColor="#AD4455">Expérience utilisateur</Tag>
    <Tag cardColor="#F84B3B" class="hidden-phone">Fiche Google My Business</Tag>
    <Tag cardColor="#C9463A" class="hidden-phone">Refonte & Migration</Tag>
    <Tag class="hidden-phone" cardColor="#F84B3B">Stratégie digitale</Tag>
    <Tag class="hidden-desktop" cardColor="#F84B3B">Site vitrine</Tag>
    <Tag class="hidden-phone">Site vitrine</Tag>
    <Tag cardColor="#C9463A">E-commerce</Tag>
    <Tag cardColor="#AD4455" class="hidden-phone">Création contenu</Tag>
    <Tag>Formation</Tag>
    <Tag cardColor="#AD4455" class="hidden-phone">Maintenance</Tag>
    <Tag class="hidden-phone">Newsletter</Tag>
    <Tag cardColor="#AD4455" class="hidden-desktop">Newsletter</Tag>
    <Tag cardColor="#AD4455" class="hidden-phone">Optimisation SEO</Tag>
    <Tag cardColor="#F84B3B" class="hidden-phone">Emailing</Tag>
    <Tag cardColor="#C9463A" class="hidden-phone">DA / Graphisme</Tag>
  </div> 

  <Link
    linkUrl='/contact'
    class='text-center'
    linkUnderlined
  > 
    me contacter
  </Link>
</div>

<style>
  .tag-list{
    background-color: var(--color-background-secondary);
    padding: var(--spacing-2) 0;
  }

  .skills-tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: var(--spacing-1);
    row-gap: 10px;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--spacing-5);
    margin-top: var(--spacing-5);
  }

  :global(.skills-tags .formule-card){
    border-radius: var(--small-radius);
  }
  
  @media screen and (min-width: 780px) {
    .skills-tags{
      margin-top: 175px;
    }

    :global(.tag-list .link){
      font-size: 20px;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 1100px) {
    .skills-tags{
      max-width: 740px;
      column-gap: 10px;
    }

    .tag-list{
      padding: var(--spacing-4) var(--spacing-1);
    }

    :global(.tag-list a.link){
      font-size: 18px;
    }
  }
</style>