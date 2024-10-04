<script>
  import Button from "../atoms/Button.svelte";
  import Input from "../atoms/Input.svelte";
  import Text from "../atoms/Text.svelte";
  import TextArea from "../atoms/Text-Area.svelte";
	import Margin from "../atoms/Margin.svelte";

  let status = "";

  const handleSubmit = async data => {
    status = 'Submitting...'
    const formData = new FormData(data.currentTarget)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        status = result.message || "Success"
    }
  }
</script>

<div class="contact-form">
  
  <Margin marginBottom="var(--spacing-1)">
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Vous avez un projet en tête ? 
      <br>Vous souhaitez des informations ?
      <br>N’hésitez pas à me contacter via ce formulaire ou par email à l’adresse : <a href="mailto:chloe.doustalet@gmail.com">chloe.doustalet@gmail.com</a>
    </Text>
  </Margin>

  <form on:submit|preventDefault={handleSubmit}>
    <input type="hidden" name="access_key" value="91f6a922-b775-4a71-b780-3071d20c0f72">
    <input type="hidden" name="subject" value="Nouveau message de contact sur site perso">
    <input type="hidden" name="from_name" value="Site perso">
    <input type="hidden" name="redirect" value="https://localhost:5173/contact/success.html">
    <Input id='fullname' name='fullname' placeholder="Nom Prénom"width="calc(100% - 40px)" required> Nom Prénom</Input>
    <Input id='societe' name='societe' placeholder="Société" width="calc(100% - 40px)"> Société </Input>
    <Input id='email' name='email' type='email' placeholder="Email" width="calc(100% - 40px)" required> Email </Input>
    <TextArea width="calc(100% - 40px)" id='message' name='message' placeholder="Message..." required />
    <br><br>
    <Button class="w-100" buttonForm> Valider </Button>
  </form>

  <Margin marginTop="10px" marginBottom="10px">
    <Text
      textTag='p'
      class='text-preset-5 text-center'
    >
      ou
    </Text>
  </Margin>

  <Button class="block-center w-100" on:click={() => window.open("https://calendly.com/chloe-doustalet/30min", "_blank")}> Réserver un appel découverte de 30 min </Button>
</div>

<style>
  :global(.contact-form p){
    max-width: 455px;
  }

  @media screen and (min-width: 600px) {
    .contact-form form{
      width: 455px;
    }
  }
</style>