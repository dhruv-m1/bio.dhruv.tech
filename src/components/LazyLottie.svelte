<!-- Lazy Loading Component for Lottie Animations -->

<script type='text/partytown'>

    import { onMount } from 'svelte';

    export let autoplay = true;
    export let loop = true;
    export let mode = 'normal';
    export let controls = false;
    export let src;

    let player;
    onMount(async() => {
        player.load(`${src}.lottie`);
	});
    
</script>
    
<dotlottie-player bind:this={player}

    autoplay = {autoplay}
    loop = {loop}
    mode = {mode}
    controls = {controls}
    worker = true
>
</dotlottie-player>