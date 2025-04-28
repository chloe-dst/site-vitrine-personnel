<script>
  import { slide } from 'svelte/transition';
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";

  import Logo from '../../assets/img/logo_white.svg';

  export let open = false;

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Conseils' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

{#if open}
<aside class="sidebar" transition:slide={{ duration: 300 }}>
  <nav class="nav">
    {#each links as link}
      <a href={link.href} on:click={() => open = false}>
        {link.label}
      </a>
    {/each}
  </nav>

  <div class="sidebar-footer block-center">
    <Image
      imageSrc={Logo}
      imageAlt="Logo Chloé Doustalet"
      imageWidth=160
      class="header-logo block-center"
    />
    <Text
      textTag='p'
      class='text-preset-5 text-center'
      textColor='white'
    >
      Vous pouvez me contacter à <br> l'adresse suivante :
    </Text>
    <a href="mailto:chloe.doustalet@gmail.com" class="block-center text-center">chloe.doustalet@gmail.com</a>
  </div>
</aside>
{/if}

<style>
  .sidebar{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    color: var(--color-text-light);
  }

  .nav {
    margin-top: var(--spacing-3);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .nav a, .sidebar-footer a {
    color: var(--color-text-light) !important;
    text-decoration: none;
  }

  .nav a {
    margin: var(--spacing-1) 0;
    font-size: var(--font-size-bigger);
    text-align: center;
  }

  .sidebar-footer {
    margin: 150px 60px 0 60px;
  }

  :global(.sidebar-footer p) {
    font-family: var(--font-family-tercary);
    font-size: 16px;
    line-height: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 750px) {
    .nav a {
      width: 100%;
    }

    .nav a:nth-last-of-type(1) {
      margin-bottom: var(--spacing-5);
    }
  }
</style>
