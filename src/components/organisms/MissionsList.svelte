<script>
  import { goto } from '$app/navigation';

  import Text from "../atoms/Text.svelte";
  import Image from "../atoms/Image.svelte";
  import Margin from "../atoms/Margin.svelte";
  import Button from "../atoms/Button.svelte";
  import SkillCard from "../molecules/SkillCard.svelte";

  import LadyAndComputer from "../../assets/img/lady_and_computer.png";
</script>

<div class="missions-list">
  <Text
    textTag='h2'
    class='text-preset-1'
  >
    Je vous accompagne dans les missions suivantes :
  </Text>

  <div class="missions-list__skills">
    <Image
      imageSrc={LadyAndComputer}
      imageAlt="Image d'une femme devant un ordinateur en train de coder"
      imageWidth=45%
    />
    <div class="missions-list__first-skills">
      <Margin marginBottom="40px">
        <SkillCard>
          <span slot="number">01</span>
          <span slot="title">Web Design et Identité visuelle</span>
          <span slot="text">Je mets à profit mon expertise en design UI/UX pour créer et vous livrer des interfaces qui allient esthétisme et ergonomie, assurant une expérience utilisateur fluide et parfaitement en phase avec votre identité visuelle. 
            <br>Si vous n’en possédez pas encore, je vous aide à construire une image de marque forte et alignée avec votre site.</span>
          <span slot="skill-1">Design d’interfaces web </span>
          <span slot="skill-2">Maquettes adaptées à tous les écrans</span>
          <span slot="skill-3">Optimisation expérience utilisateur</span>
          <span slot="skill-4">Logo et identité visuelle sur mesure</span>
          <span slot="skill-5">Création ou refonte d'une charte graphique unique</span>
          <span slot="skill-6">Harmonisation globale de votre univers visuel</span>
        </SkillCard>
      </Margin>  

      <SkillCard>
        <span slot="number">02</span>
        <span slot="title">Développement web</span>
        <span slot="text">Je conçois des sites vitrines et des boutiques en ligne modernes, entièrement personnalisés pour répondre à vos besoins. <br>Que vous souhaitiez présenter votre activité ou vendre en ligne, je crée un site performant, avec une navigation fluide et un design attrayant, pour capter l’attention de vos visiteurs, valoriser votre marque et dynamiser vos ventes.</span>
        <span slot="skill-1">Développement de sites sur mesure, Wordpress & Shopify</span>
        <span slot="skill-2">Sites responsive (ordinateurs, tablettes & mobiles)</span>
        <span slot="skill-3">Installation des applications ou plugins nécessaires</span>
        <span slot="skill-4">Intégration systèmes de paiement, réservation ou inscription</span>
        <span slot="skill-5">Optimisation des performances & sécurisation du site</span>
        <span slot="skill-6">Paramétrage de l’hébergement & achat nom de domaine</span>
      </SkillCard>
    </div>

    <SkillCard widthCard="45%">
      <span slot="number">03</span>
      <span slot="title">Refonte / Optimisations</span>
      <span slot="text">Votre site a besoin d’une actualisation ou d’un renouveau ? J’analyse son design et ses performances pour identifier les optimisations nécessaires. Que ce soit pour des mises à jour, une refonte esthétique, des corrections de bugs ou un boost SEO, je veille à ce que votre site reste à la pointe et efficace. Mon objectif est de maximiser votre visibilité en ligne.</span>
      <span slot="skill-1">Audit et analyse du site existant</span>
      <span slot="skill-2">Refonte graphique</span>
      <span slot="skill-3">Actualisation contenus et visuels</span>
      <span slot="skill-4">Correction des bugs</span>
      <span slot="skill-5">Migration de site sécurisée</span>
      <span slot="skill-6">Formation & maintenance</span>
    </SkillCard>

    <SkillCard widthCard="45%">
      <span slot="number">04</span>
      <span slot="title">Visibilité & contenu</span>
      <span slot="text">Au-delà du développement, je peux vous assister dans la gestion quotidienne de votre site. Je prends en charge les mises à jour, la résolution de bugs et vous offre des formations sur mesure pour assurer un site performant et à jour. Nous pouvons également collaborer sur votre identité digitale globale, en travaillant sur des newsletters, des campagnes d’emailing et la création de contenu.</span>
      <span slot="skill-1">Référencement naturel (SEO)</span>
      <span slot="skill-2">Création et rédaction de contenus</span>
      <span slot="skill-3">Email marketing & Newsletters</span>
      <span slot="skill-4">Optimisation Google My Business</span>
      <span slot="skill-5">Accompagnement stratégie digitale</span>
      <span slot="skill-6">Audit de performance</span>
    </SkillCard>
  </div>

  <Button class="block-center" on:click={() => goto('/contact')}> Echanger sur un projet </Button>
</div>

<style>
  .missions-list{
    padding: var(--spacing-2) var(--spacing-4);
  }

  .missions-list__skills{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: var(--spacing-5);
    margin: var(--spacing-4) 0 var(--spacing-5) 0;
  }

  .missions-list__first-skills{
    width: 45%;
  }

  @media screen and (min-width: 1100px) {
    :global(.skill__list ul){
      max-width: 50%;
    }
  
    :global(.missions-list__first-skills div:nth-child(3)){
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1100px) {
    .missions-list{
      padding-top: var(--spacing-1);
    }

    .missions-list__skills{
      margin-top: var(--spacing-1);
    } 

    :global(.missions-list__skills img),
    .missions-list__first-skills,
    :global(.skill-card){
      width: 100% !important;
    }
  }

  @media screen and (max-width: 700px) {
    .missions-list{
      padding: var(--spacing-5);
      margin-bottom: var(--spacing-5);
    }
  }
</style>