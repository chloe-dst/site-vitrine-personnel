<script>
    import Text from "../atoms/Text.svelte";
    import Accordion from "../molecules/Accordion.svelte";
</script>

<div class="process-steps">
    <div class="process-steps__header">
        <Text
            textTag='h2'
            class='text-preset-3 process-steps__title'
        >
            Mon process <br> de travail
        </Text>
    </div>

    <div class="process-steps__accordions">
        <Accordion title="01 -  Stratégie & cadrage" isOpenByDefault={true}>
            <span>
                Chaque projet commence par un échange pour comprendre vos besoins, vos attentes, vos objectifs, votre cible et les spécificités de votre activité. Ces éléments guideront le reste de mon travail pour un site personnalisé et optimisé pour votre secteur. 
                <br><br>
                À l’issue de ce rendez-vous, vous me transmettez les éléments nécessaires pour la suite (textes, visuels, contenus). Besoin d’aide ? Je peux également m’occuper du copywriting (rédaction des textes) ou de la recherche d’images pour illustrer au mieux votre site
            </span>
        </Accordion>
        <Accordion title="02 – Web Design & maquettes">
            <span>
                Je conçois une première version du design du site, pensée à la fois pour l’esthétique et l’expérience utilisateur. Vous recevez un lien interactif pour visualiser les maquettes en conditions réelles, sur ordinateur et mobile. 
                <br>
                Cette maquette est ajustée selon vos retours jusqu’à validation.
                <br><br>
                L’objectif : créer une interface claire, cohérente et engageante, fidèle à votre univers.
            </span>
        </Accordion>
        <Accordion title="03 – Développement du site">
            <span>
                Une fois les maquettes validées, je passe au développement. Chaque page est développée sur-mesure pour vous, en respectant les standards de performance, d’accessibilité et de fluidité.
                <br><br>
                Je configure également les plugins ou applications nécessaires, j’optimise le site pour le SEO (structure, balisage, vitesse) et je mets en place les éventuelles automatisations (newsletter, email flow, etc.).
                <br>
                Le site est bien sûr responsive : il s’adapte parfaitement à tous les écrans.
            </span>
        </Accordion>
        <Accordion title="04 – Recette & mise en ligne">
            <span>
                Je teste le site sur différents navigateurs et supports, puis vous le fais tester à votre tour.
                <br>
                Nous traitons ensemble les éventuels retours, puis procédons à la mise en ligne.
                <br><br>
                Une formation vous est ensuite proposée si vous souhaitez gérer votre site en autonomie. Mais je reste présente par la suite si vous avez la moindre question ou besoin d’aide sur un point.
            </span>
        </Accordion>
        <Accordion title="05 – Site prêt à convertir vos visiteurs">
            <span>
                Votre site est en ligne, performant, aligné à votre image et à vos objectifs.
                <br><br>
                Il vous aide à renforcer votre présence en ligne, à convertir plus facilement vos visiteurs, et à vous démarquer sur votre marché. Vous pouvez enfin vous concentrer sur ce que vous faites de mieux : développer votre activité.
            </span>
        </Accordion>
    </div>
</div>

<style>
    .process-steps{
        background-color: var(--color-background-primary);
        display: flex;
        flex-wrap: wrap;
        padding:0 var(--spacing-5) var(--spacing-4);
        column-gap: var(--spacing-5);
        row-gap: var(--spacing-5);
    }

    :global(.process-steps__title){
        font-size: 40px !important;
        line-height: 1 !important;
    }

    .process-steps__accordions{
        display: flex;
        flex-wrap: wrap;
        row-gap: var(--spacing-1);
    }

    @media screen and (min-width: 750px){
        .process-steps{
            padding:0 var(--spacing-4) var(--spacing-3);
            flex-wrap: nowrap;
        }

        :global(.process-steps__title){
            font-size: 70px !important;
            line-height: 1 !important;
            transform: rotate(-90deg);
            white-space: nowrap;
            position: relative;
            top: 55%;
        }

        .process-steps__header{
            width: 20%;
        }

        :global(.process-steps__title){
            font-size: 70px !important;
            transform: rotate(-90deg);
            white-space: nowrap;
            position: relative;
            top: 55%;
        }

        .process-steps__accordions{
            width: 80%;
        }
    }

    @media screen and (min-width: 750px) and (max-width: 1050px){
        :global(.process-steps__title){
            top: 45%;
        }
    }
</style>