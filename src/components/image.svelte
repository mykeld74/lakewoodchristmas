<script lang="ts">
	interface Props {
		source: string;
		altText: string;
	}

	let { source, altText }: Props = $props();

	let src = `https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/${source}`;
</script>

<img {src} alt={altText} class={source} loading="lazy" />

<style>
	img {
		width: 100%;
	}
</style>
