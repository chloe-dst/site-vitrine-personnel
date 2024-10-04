<script>
  import '../../assets/css/global.css';
    
  import Logo from '../../assets/img/logo_couleur.svg';
  import ContactImg from '../../assets/img/contact.png';
  import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon.svelte';
  import ClickIcon from '../../assets/icons/ClickIcon.svelte';

  import Button from '../../components/atoms/Button.svelte';
  import Icon from '../../components/atoms/Icon.svelte';
  import TextArea from "../../components/atoms/Text-Area.svelte";
  import Link from '../../components/atoms/Link.svelte';
  import Image from '../../components/atoms/Image.svelte';
  import Text from '../../components/atoms/Text.svelte';
  import Input from '../../components/atoms/Input.svelte';
  import Tag from '../../components/molecules/Tag.svelte';
  import ClickableImage from '../../components/molecules/ClickableImage.svelte';
  import TitleIcon from '../../components/molecules/TitleIcon.svelte';
  import Menu from '../../components/molecules/Menu.svelte';
  import ServiceCard from '../../components/molecules/ServiceCard.svelte';
  import FormuleCard from '../../components/molecules/FormuleCard.svelte';
  import ContactForm from '../../components/molecules/ContactForm.svelte';
  import HeroBanner from '../../components/molecules/HeroBanner.svelte';
  import Header from '../../components/organisms/Header.svelte';
  import Footer from '../../components/organisms/Footer.svelte';
</script>
    
<Text
  textTag='h1'
  class='text-preset-1'
  >
  Les atomes
</Text>

<br><br>
<Image
  imageSrc={Logo}
  imageAlt="Logo"
  imageWidth=160
/>
<Image
  imageSrc={ContactImg}
  imageAlt="Contact Chloé Doustalet"
  imageWidth=440
/>
<br><br><br>

<Input type='email' id='email' name='email' placeholder='Email' width="455px" required/>
<br><br>
<TextArea width="455px" placeholder="Message..." />
<br><br>
<Button on:click={() => window.location.href = "https://chloe-doustalet.fr/services"}> En savoir + </Button>
<br><br>
<Icon name="click" iconColor>
  <ClickIcon />
</Icon>
<br><br>
<Icon name="ArrowLeft" width="20" height="20">
  <ArrowLeftIcon />
</Icon>
<br><br>
<Link
  linkUrl='/services'
  linkColor> 
  services
</Link>
<Link
  linkUrl='/contact'
  linkUnderlined> 
  me contacter
</Link>
 
<br><br><br>
<br><br><br>
<Text
  textTag='h1'
  class='text-preset-1'
  textColor='blue'
  >
  Les molecules
</Text>
<br><br>
<Menu />
<br><br>
<Tag cardColor="#AD4455">Expérience utilisateur</Tag>
<br><br>
<TitleIcon>
  Je vous accompagne dans la création de votre identité digitale
</TitleIcon>
<br><br>
<HeroBanner />
<br><br>
<FormuleCard >
  Faux texte pour le moment
</FormuleCard>
<br><br>
<ServiceCard>
  <span slot="title"> UI/UX Design </span>
  <span slot="text"> Cette phrase d'accroche met en avant tes compétences en design et développement, ton utilisation de Figma pour les maquettes, et ton expertise en intégration Shopify, tout en soulignant l'importance de l'expérience utilisateur et de la performance des sites. </span>
</ServiceCard>
<br><br>
<ClickableImage linkUrl="/projets/mooja-media">
  <Image
    imageSrc={Logo}
    imageAlt="Mockup du projet xxxxxxxx"
    imageWidth=100%
    slot="image"
  />
  <span slot="title"> Nom projet </span>
</ClickableImage>
<br><br>
<ContactForm />

<br><br><br>
<Text
  textTag='h1'
  class='text-preset-1'
  textColor='blue'
  >
  Les organismes
</Text>

<br><br>
<Header />
<br><br>
<ContactForm />
<br><br>
<Footer />
      