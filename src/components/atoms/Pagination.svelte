<script>
    import Icon from "./Icon.svelte";
    import SimpleArrowLeftIcon from "../../assets/icons/SimpleArrowLeftIcon.svelte"
    import SimpleArrowRightIcon from "../../assets/icons/SimpleArrowRightIcon.svelte"
    import DoubleArrowLeftIcon from "../../assets/icons/DoubleArrowLeftIcon.svelte"
    import DoubleArrowRightIcon from "../../assets/icons/DoubleArrowRightIcon.svelte"

    export let rows;
    export let perPage;
	export let trimmedRows;

    $: totalRows = rows.length 
    $: currentPage = 0
    $: totalPages = Math.ceil(totalRows / perPage) 
    $: start =  currentPage * perPage
    $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1  ;

	$: trimmedRows = rows.slice(start, end + 1);

    $: totalRows, currentPage = 0
    $: currentPage, start, end

</script>

{#if totalRows && totalRows > perPage}
  <div class='pagination'>
    <button on:click={() => currentPage = 0 } 
      disabled={currentPage === 0 ? true : false} 
      aria-label="double left arrow icon" 
      aria-describedby="prev"
    >
      <Icon class="pagination-icon-first-page" name="doubleArrowLeft" width="10" height="12">
        <DoubleArrowLeftIcon />
      </Icon>     
    </button>
    <button on:click={() => currentPage -= 1} 
      disabled={currentPage === 0 ? true : false} 
      aria-label="left arrow icon" 
      aria-describedby="prev"
    >
      <Icon class="pagination-icon-prev" name="arrowLeft" width="8" height="12">
        <SimpleArrowLeftIcon />
      </Icon>     
    </button>
    <p><span class="current-pagination">{currentPage + 1}</span> - {totalPages}</p>
    <button on:click={() => currentPage += 1} 
      disabled={currentPage === totalPages - 1 ? true : false} 
      aria-label="right arrow icon" 
      aria-describedby="next"
    >
      <Icon class="pagination-icon-next" name="arrowRight" width="8" height="12">
        <SimpleArrowRightIcon />
      </Icon>    
    </button>
    <button on:click={() => currentPage = totalPages - 1 } 
      disabled={currentPage === totalPages - 1 ? true : false} 
      aria-label="left arrow icon" 
      aria-describedby="prev"
    >
      <Icon class="pagination-icon-last-page" name="doubleArrowRight" width="10" height="12">
        <DoubleArrowRightIcon />
      </Icon>     
    </button>
  </div>
{/if}


<style>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    padding: var(--spacing-5);
    font-weight: var(--font-weight-light);
  }

  .pagination p {
    margin: 0 1rem;
  }
  
  button {
  	display: flex;
    background: transparent;
    border: none;
  }

  .current-pagination{
    font-weight: var(--font-weight-semibold);
  }
</style>