<script>
    export let bgColor = 'var(--color-background-primary)';

    import ReviewCard from "../molecules/ReviewCard.svelte";
    import MobileMockup from "../../assets/img/mockups/nfsdev-responsive-design-site-developpeuse-web-bordeaux.jpg";
</script>

<div class="reviews" style='background-color: {bgColor}'>
    <ReviewCard boxColor="#F84B3B" boxType="image" reviewImage={MobileMockup}>
    </ReviewCard>

    <ReviewCard boxColor="#AD4455" boxType="text">
        <span slot="review-text"> 
            Je recommande Chloé les yeux fermés ! Elle a su donner vie à mon site internet avec un résultat qui dépasse largement mes attentes. 
            <br>Chaque détail a été pensé avec soin, elle a su comprendre mes besoins tout en m’apportant son expertise, ses idées, et une solution à chaque problématique rencontrée. Chloé est très réactive, c’était un plaisir de travailler avec elle.
        </span>
        <span slot="review-author"> Alizée R. </span>
        <span slot="author-role"> Fondatrice Blomea Studio </span>
    </ReviewCard>

    <ReviewCard boxColor="var(--color-primary)" boxType="text">
        <span slot="review-text"> 
            Je suis pleinement satisfait du travail de Chloé sur mon site web. Très réactive, j'ai eu le droit à des bilans complets et réguliers sur les différentes modifications qu'elle effectuait ainsi qu'à des conseils stratégiques. 
            <br><br>Je recommande donc fortement Chloé dont le travail est sérieux et minutieux.
        </span>
        <span slot="review-author"> Julien M.</span>
        <span slot="author-role"> Fondateur JM Video </span>
    </ReviewCard>
</div>

<style>
    .reviews{
        /*background-color: var(--color-background-primary);*/
        padding: var(--spacing-2);
        display: flex;
        column-gap: var(--spacing-1);
    }

    @media screen and (max-width: 1050px){
        .reviews{
            flex-wrap: wrap;
            padding: var(--spacing-4) var(--spacing-5);
            row-gap: var(--spacing-1);
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 750px){
        .reviews{
            row-gap: var(--spacing-5);
        }
    }
</style>