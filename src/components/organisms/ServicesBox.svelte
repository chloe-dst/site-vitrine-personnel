<script>
  import { goto } from '$app/navigation';

  import ServiceCard from "../molecules/ServiceCard.svelte";
  import Button from "../atoms/Button.svelte";
  import Text from "../atoms/Text.svelte";

  import UiuxDesign from '../../assets/icons/UiuxDesign.svelte';
  import DevWebIcon from '../../assets/icons/DevWebIcon.svelte';
  import FormationIcon from '../../assets/icons/FormationIcon.svelte';
  import RefonteOptimisations from '../../assets/icons/RefonteOptimisations.svelte';
</script>
 
<div class='services-box'>

    <Text
      textTag='h2'
      class='text-preset-1'
    >
      Services proposés
    </Text>
    
    <div class="services-box__cards">
      <ServiceCard>
        <UiuxDesign slot="icon" /> 
        <span slot="title"> Design UI/UX et identité visuelle</span>
        <span slot="text"> Je vous propose une expertise en design UI/UX pour des interfaces à la fois esthétiques et ergonomiques, offrant une expérience utilisateur fluide et adaptées à votre identité visuelle. <br><br> Si vous n’en avez pas encore, je peux créer pour vous une image de marque forte et en harmonie avec votre site.</span>
      </ServiceCard>
      <ServiceCard>
        <DevWebIcon slot="icon" /> 
        <span slot="title"> Développement web / e-commerce</span>
        <span slot="text"> Je développe des sites vitrines et des boutiques en ligne modernes, adaptés à vos besoins. Je conçois un site sur mesure, performant, avec une navigation intuitive et un design soigné pour présenter votre activité ou vendre en ligne.<br><br>  Votre site attirera vos visiteurs, renforcera votre image de marque et boostera vos ventes. </span>
      </ServiceCard>
      <ServiceCard>
        <RefonteOptimisations slot="icon" /> 
        <span slot="title"> Refonte et optimisations </span>
        <span slot="text"> Votre site a besoin d’une mise à jour ou d’une nouvelle jeunesse ? J’analyse ses performances et son design pour proposer des améliorations qui augmenteront son efficacité. <br><br> Je peux vous accompagner sur la refonte de l'identité de votre site, la mise à jour de certaines pages, ou encore l'optimisation SEO.</span>
      </ServiceCard>
      <ServiceCard>
        <FormationIcon slot="icon" />
        <span slot="title"> Maintenance, formation et accompagnement </span>
        <span slot="text"> Au-delà du développement, je vous accompagne dans la gestion quotidienne de votre site. Mises à jour, résolutions de bugs, formations sur mesure, je veille à ce que votre site reste performant et à jour. <br><br> Nous pouvons aussi travailler ensemble sur votre identité digitale au global (newsletter, emailing, création contenu). </span>
      </ServiceCard>
    </div>

    <Button class="block-center" on:click={() => goto('/services')}> En savoir + </Button>
  
</div>

<style>
  .services-box{
    margin : var(--spacing-2) var(--spacing-4);
  }

  .services-box__cards{
    display: flex;
    column-gap: var(--spacing-1);
    margin: var(--spacing-5) 0;
  }

  @media screen and (max-width: 1100px) {
    .services-box{
      margin : var(--spacing-4) var(--spacing-5);
    }

    .services-box__cards{
      margin-top: var(--spacing-5);
      flex-wrap: wrap;
      row-gap: var(--spacing-1);
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1100px) {
    :global(.services-box__cards > div){
      width: calc(50% - 60px);
    }
  }
</style>