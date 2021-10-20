<script>
    import { getMaxChars } from './utils/getMaxChars';
    export let children; 
    export let readMoreLabel = 'Read more';
    export let readLessLabel = 'Read less';
    export let maxCharacters;
    export let spreadOperator = '...';

    let text
    let isOpen = false
    const cleanChildren = children.replace(/\s+/g, ' ').trim();
    $: finalLabel = isOpen ? readLessLabel : readMoreLabel
    $: finalText = getMaxChars(maxCharacters, isOpen, cleanChildren, text)
    $: finalSymbol = isOpen ? '' : spreadOperator

    const handleClick = () => {
        isOpen = !isOpen
    }  
</script>

<div data-testid="wrapper">
    {finalText}{finalSymbol}
    <span
        data-testid="button-wrapper"
        class="button-wrapper"
    >
        <button
            data-testid="button"
            on:click={handleClick}
            class='button'
        >
            {finalLabel}
        </button>
    </span>
</div>

<style>
    /* custom styles */
.button-wrapper {
    white-space: nowrap;
}
.button {
    border: 0;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;

}
.button::first-letter {
	text-transform: uppercase;
}
.button::hover {
	text-decoration: none;
}
</style>