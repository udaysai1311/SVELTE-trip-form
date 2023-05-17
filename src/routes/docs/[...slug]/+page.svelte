<!--CATCH ALL ROUTES EXAMPLE-->


<!--folder [...(slug)=> this can be any name ]-->

<!--
    to catch the parameters from the url 
-->

<script>
    import {page} from '$app/stores'
	import { merge_ssr_styles } from 'svelte/internal';
    console.log(page.params.slug) // it will log the url parameters in the console so to catch these params we need to do this .....
    const slugArr =  $page.params.slug.split("/")
</script>

{#if slugArr.length === 1}
    <h1>{slugArr[0]}</h1>
{:else}
    <h1>{slugArr[0] slugArr[1]}</h1>
{/if} 