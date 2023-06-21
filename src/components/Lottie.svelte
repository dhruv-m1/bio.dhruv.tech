
<script type='text/partytown'>

    import { onMount } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';

    export let autoplay = 'true';
    export let loop = 'true';
    export let mode = 'normal';
    export let src;
    let identifier = `lottie-${uuidv4()}`;

    onMount(async () => {
		console.log(identifier);
        console.log(src);
        
        const player = document.querySelector(`#${identifier}`);
        player.load(`${src}.lottie`);
	});
    
    
</script>
    
<dotlottie-player
    id={identifier}
    autoplay={autoplay}
    loop={loop}
    mode={mode}
>
</dotlottie-player>