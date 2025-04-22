<script>
  import '../../assets/css/global.css';
  
  import MissionsList from  '../../components/organisms/MissionsList.svelte';
  import LongPresentation from  '../../components/organisms/LongPresentation.svelte';
  import CardsMix from  '../../components/organisms/CardsMix.svelte';
  import Reviews from '../../components/organisms/Reviews.svelte';
</script>

<svelte:head>
  <title>Services de Développement Web | Chloé Doustalet, Développeuse Freelance</title>
  <meta name="description" content="Découvrez les services de développement web proposés par Chloé Doustalet. Spécialisée dans la création de sites sur mesure, je propose également des solutions de maintenance, optimisation SEO et design UI/UX." />
</svelte:head>

<MissionsList />
<LongPresentation />
<CardsMix />
<Reviews bgColor="var(--color-background-secondary)" />