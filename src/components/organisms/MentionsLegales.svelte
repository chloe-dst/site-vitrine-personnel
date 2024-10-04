<script>
  import Text from "../atoms/Text.svelte";
  import Margin from "../atoms/Margin.svelte";
</script>

<div class='mentions-legales'>
    <Margin marginBottom="var(--spacing-5)">
      <Text
        textTag='h1'
        class='text-preset-2 text-center'
      >
        Mentions légales
      </Text>
    </Margin>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        1. Éditeur du site
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Le présent site est édité par :
      <br>
      Chloé Doustalet
      <br>
      Téléphone : 06 79 27 52 79
      <br>
      Adresse e-mail : cdoustalet@gmail.com
      <br><br>
      
      SIRET : 92786367000018
      <br>
      Directrice de la publication : Chloé Doustalet
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        2. Hébergeur du site
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Le site est hébergé par :
      <br>
      Hostinger International Ltd.
      <br>
      Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
      <br>
      Site web : https://www.hostinger.fr
      <br>
      Téléphone : +44 20 8089 3555
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        3. Propriété intellectuelle
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      L’ensemble du contenu du site (textes, images, logos, vidéos, etc.) est la propriété exclusive de Chloé Doustalet ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de Chloé Doustalet.
      Les illustrations, elles, ont été designés par des artistes du site Freepik (dont stephanie2212, pikisuperstar).
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        4. Protection des données personnelles
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Les informations recueillies via les formulaires de contact sont destinées uniquement à Chloé Doustalet dans le but de répondre à vos demandes. Elles ne seront en aucun cas partagées avec des tiers. Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous bénéficiez d’un droit d’accès, de rectification, de suppression, et d’opposition concernant vos données personnelles. Pour exercer ce droit, vous pouvez contacter Chloé Doustalet à l’adresse e-mail suivante : chloe.doustalet@gmail.com.
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        5. Responsabilité
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Chloé Doustalet s’efforce d’assurer au mieux l’exactitude et la mise à jour des informations diffusées sur le site. Cependant, Chloé Doustalet ne saurait être tenue responsable des erreurs, omissions ou des résultats qui pourraient être obtenus par un usage inapproprié de ces informations.
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        6. Liens hypertextes
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Le site peut contenir des liens hypertextes vers d’autres sites internet. Chloé Doustalet ne peut pas être tenue responsable du contenu de ces sites externes.
    </Text>

    <Margin marginTop="var(--spacing-5)" marginBottom="var(--spacing-1)">
      <Text
        textTag='h2'
        class='text-preset-1'
      >
        7. Cookies
      </Text>
    </Margin>
    <Text
      textTag='p'
      class='text-preset-5'
    >
      Le site utilise des cookies pour améliorer l’expérience utilisateur. En naviguant sur le site, vous acceptez l’utilisation des cookies. Vous pouvez configurer votre navigateur pour refuser ces cookies.
    </Text>
</div>

<style>
  .mentions-legales{
    margin: var(--spacing-4);  
  }
</style>