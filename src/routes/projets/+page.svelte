<script>
  import '../../assets/css/global.css';
  
  import Margin from '../../components/atoms/Margin.svelte';
  import Header from '../../components/organisms/Header.svelte';
  import ArmsBloc from '../../components/organisms/ArmsBloc.svelte';
  import AllProjects from '../../components/organisms/AllProjects.svelte';
  import Footer from '../../components/organisms/Footer.svelte';
</script>

<svelte:head>
  <title>Projets Réalisés par Chloé Doustalet, Développeuse Web Freelance</title>
  <meta name="description" content="Explorez le portfolio de Chloé Doustalet, développeuse web freelance. Découvrez des projets de sites vitrines et e-commerce, illustrant mon expertise en développement web et design." />
</svelte:head>

<Header />
<AllProjects />
<ArmsBloc />
<Footer />
  