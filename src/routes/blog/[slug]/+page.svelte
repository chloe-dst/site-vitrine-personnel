<script>
  import ArticleContent from "../../../components/organisms/ArticleContent.svelte";
  import ArticleRecommendations from "../../../components/organisms/ArticleRecommendations.svelte";
  import InlinePresentation from "../../../components/organisms/InlinePresentation.svelte";
 
  export let data;
</script>

<ArticleContent data={data.post} />
<ArticleRecommendations data={data.summaries} />
<InlinePresentation />