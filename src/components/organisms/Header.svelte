<script>
  import Image from "../atoms/Image.svelte";
  import Menu from "../molecules/Menu.svelte";
  import Link from "../atoms/Link.svelte";
  import Icon from "../atoms/Icon.svelte";
  import Sidebar from "../molecules/Sidebar.svelte";

  import Logo from '../../assets/img/logo_couleur.svg'
  import Hamburger from '../../assets/icons/MenuMobile.svelte';

  export let homepage = false;
  let open = false;
</script>

<header class='header hidden-phone {homepage ? 'header--transparent' : ''}'>
  <Link linkUrl='/'> 
    <Image
      imageSrc={Logo}
      imageAlt="Logo Chloé Doustalet"
      imageWidth=160
      class="header-logo"
    />
  </Link>

  <Menu />
</header>

<header class="hidden-desktop">
  <Sidebar bind:open/>
  <header class="navbar">
    <div class="navbar__menu">
      <button class:open on:click={() => open = !open}>
        <Icon name="Hamburger" width="30" height="30" iconColor>
          <Hamburger />
        </Icon>
      </button>
      <span class="menu-text">menu</span>
    </div>

    <Link linkUrl='/'> 
      <Image
        imageSrc={Logo}
        imageAlt="Logo Chloé Doustalet"
        imageWidth=160
        class="header-logo"
      />
    </Link>
  </header>
</header>

<style>
  @media screen and (min-width: 991px) {
    /* Menu desktop */
    .header{
      position: sticky;
      z-index: 100;
      display: flex;
      padding: var(--spacing-1) var(--spacing-4);
      align-items: center;
      justify-content: space-between;
      background-color: var(--color-background-primary);
    }
  
    .header--transparent{
      background-color: transparent;
    }
  
    :global(.header--transparent .header-logo){
      visibility: hidden;
    }
  }

  @media screen and (max-width: 990px) {
    /* Menu for mobile and tablet */
    .navbar{
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-5) var(--spacing-4);
    }
  
    .navbar button{
      background-color: transparent;
      border: none;
      z-index: 120;
    }

    .navbar__menu{
      width: 40px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .menu-text{
      font-family: var(--font-family-secondary);
      font-size: 12px;
      color: var(--color-primary);
      margin-top: -15px;
    }
  
    :global(.open line){
      stroke: var(--white);
    }
  
    :global(.open svg #hamburger-top) {
	  	transform: translate(6px, 0px) rotate(45deg)
	  }
	  
	  :global(.open svg #hamburger-middle) {
	  	opacity: 0;
	  }
	  
    :global(.open svg #hamburger-bottom) {
	  	transform: translate(-12px, 9px) rotate(-45deg)
	  }
  }

  @media screen and (max-width: 600px) {
    .navbar{
      padding: var(--spacing-1);
    }
  }
</style>