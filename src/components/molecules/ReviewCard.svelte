<script>
    import Text from "../atoms/Text.svelte";
    import Image from "../atoms/Image.svelte";
    import Icon from "../atoms/Icon.svelte";

    import StarIcon from '../../assets/icons/StarIcon.svelte';

    export let boxColor = 'var(--color-primary)';
    export let boxType = 'text';
    export let reviewImage = '';
</script>

<div class="review-card" style="background-color: {boxColor};">
    {#if boxType == 'text'}
        <div>
            <div class="review-stars">
                <Icon name="star" width="22" height="21">
                    <StarIcon />
                </Icon>
                <Icon name="star" width="22" height="21">
                    <StarIcon />
                </Icon>
                <Icon name="star" width="22" height="21">
                    <StarIcon />
                </Icon>
                <Icon name="star" width="22" height="21">
                    <StarIcon />
                </Icon>
                <Icon name="star" width="22" height="21">
                    <StarIcon />
                </Icon>
            </div>

            <Text
            textTag='p'
            class='review-text'
            >
                <slot name='review-text' />
            </Text>
        </div>

        <div>
            <Text
            textTag='p'
            class='review-author text--bold'
            >
                <slot name='review-author' />
            </Text>

            <Text
            textTag='p'
            class='author-role'
            >
                <slot name='author-role' />
            </Text>
        </div>
    {:else}
        <Image
            imageSrc={reviewImage}
            imageAlt="Mockup d'un site réalisé par Chloé Doustalet développeuse web avec meilleurs avis"
            imageWidth=430
            class="review-image"
        />
        <Text
            textTag='h2'
            class='review-title text-preset-4'
        >
            LES AVIS
        </Text>
    {/if}
</div>

<style>
    .review-card{
        padding: var(--spacing-5);
        border-radius: var(--small-radius);
        min-height: 500px;
        position: relative;
        overflow: hidden;
        width: 33%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .review-stars{
        display: flex;
        column-gap: 5px;
    }

    :global(.review-image){
        position: absolute;
        bottom: 0;
        left: 0;
    }

    :global(.review-card p){
        color: var(--color-text-light);
        margin-top: 5px;
    }

    :global(.review-text){
        font-size: 20px !important;
        line-height: 1.2;
        margin-top: 10px;
        padding-top: 10px;
    }

    :global(.review-title){
        color: var(--color-text-light);
        position: absolute;
        bottom: var(--spacing-5);
        left: var(--spacing-5);
    }

    @media screen and (max-width: 1050px){
        .review-card{
            width: calc(40% - 16px);
            min-height: 420px;
        }

        :global(.review-image){
            width: 100%;
            visibility: hidden;
        }

        :global(.reviews .review-card:first-child){
            min-height: 35px;
            width: 100%;
        }

        :global(.review-title){
            font-size: 30px;
        }

        :global(.review-text){
            font-size: 18px !important;
        }
    }

    @media screen and (max-width: 750px){
        .review-card{
            width: 100%;
            min-height: 450px;
        }
    }
</style>