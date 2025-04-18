<script>
  import Menu from "./Menu.svelte";
  import Image from "../atoms/Image.svelte";
  import Text from "../atoms/Text.svelte";

  import Logo from '../../assets/img/logo_white.svg'

  export let open = false
</script>

<aside class="sidebar" class:open>
  <Menu />

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

<style>
  .sidebar{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    color: var(--color-text-light);
  }

  aside {
  	left: -100%;
  	transition: left 0.3s ease-in-out
  }
	
  .open {
  	left: 0
  }

  :global(.sidebar .nav){
    margin-top: var(--spacing-3);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.sidebar .nav a, .sidebar-footer a){
    color: var(--color-text-light) !important;
    text-decoration: none;
  }

  :global(.sidebar .nav a){
    margin: var(--spacing-1) 0;
  }

  :global(.sidebar .nav a){
    font-size: var(--font-size-bigger);
    text-align: center;
  }

  :global(.sidebar .nav button){
    background-color: var(--color-background-secondary);
    color: var(--color-primary);
    font-size: var(--font-size-bigger);
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .sidebar-footer{
    margin: 200px 60px 0 60px;
  }

  :global(.sidebar-footer p){
    font-family: var(--font-family-tercary);
    font-size: 16px;
    line-height: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 750px){
    :global(.sidebar .nav a){
      width: 100%;
    }

    :global(.sidebar .nav a:nth-last-of-type(1)){
      margin-bottom: var(--spacing-5);
    }
  }
</style>