<script>
    import { goto } from '$app/navigation';
    
    import Text from "../atoms/Text.svelte";
    import Margin from "../atoms/Margin.svelte";
    import Image from "../atoms/Image.svelte";
	import Button from "../atoms/Button.svelte";

    export let mockupImage = '';
</script>

<div class="image-header">
    <div>
        <Text
        textTag='h1'
        class='text-preset-1'
        >
            <slot name='title' />
        </Text>
        <Margin marginTop="var(--spacing-1)" marginBottom="var(--spacing-1)">
            <Text
                textTag='p'
                class='text-preset-5'
            >
                <slot name='description' />
            </Text>
        </Margin>
        <Button on:click={() => goto('/contact/')}> Travaillons ensemble sur votre site web </Button>
    </div>
    <div>
        <Image
            imageSrc={mockupImage}
            imageAlt="Mockup d'un site réalisé par Chloé Doustalet développeuse web Wordpress et Shopify"
            imageWidth=500
            class="image-header__image"
        />
    </div>
</div>

<style>
    .image-header{
        padding: var(--spacing-1) var(--spacing-4) var(--spacing-4); 
        display: flex;
        column-gap: var(--spacing-4);
        align-items: center;
    }

    @media screen and (max-width: 750px){
        .image-header{
            padding: var(--spacing-1) var(--spacing-5) var(--spacing-4);
            flex-wrap: wrap;
            row-gap: var(--spacing-5);
        }

        :global(.image-header img){
            width: 100%;
        }
    }
</style>