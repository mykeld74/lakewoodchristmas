<script>
	import Background from '$components/snow-bg.svelte';
	import Image from '$components/image.svelte';
</script>

<svelte:head>
	<title>Christmas Eve Service | Westwoods Community Church</title>
	<meta
		name="description"
		content="Join us for a casual and meaningful community celebration of Christmas"
	/>
</svelte:head>

<Background />
<main>
	<div class="christmasText">
		<h1 class="christmasEve">Christmas Eve Service</h1>
		<img
			src="https://res.cloudinary.com/mykeld74/image/upload/v1764706293/lakewoodchristmas/AWearyWorldRejoicesTransparent"
			alt="A Weary World Rejoices"
			class="mainImage"
		/>
		<p class="dateAndTime">December 24th <br />2:00PM & 3:30PM</p>

		<p class="address">
			<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
				>Westwoods Community Church</a
			><br />7700 W Woodard Dr<br />Lakewood, CO 80227
		</p>
	</div>
	<div class="logoContainer">
		<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer">
			<Image source="wwLogo" altText="Westwoods Community Church Logo" />
		</a>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Belleza&family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&display=swap');

	.mainImage {
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
	}

	.ornamentContainer {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		max-width: 1280px;
		margin: 0 auto;
	}

	.ornament {
		width: 15vh;
		max-width: 200px;
	}

	.ornament1 {
		transform: translateY(-7vh);
	}

	.ornament2 {
		transform: translateY(-1.5vh);
	}

	.ornament3 {
		transform: translateY(-10vh);
	}

	.ornament4 {
		transform: translateY(-3vh);
	}

	.ornament5 {
		transform: translateY(-8.5vh);
	}

	.christmasText {
		font-family: 'M PLUS 2', sans-serif;
		color: #fff;
		text-align: center;
		text-transform: uppercase;
	}

	.desc {
		font-size: clamp(22px, 3vw, 30px);
		line-height: 1.5;
		width: calc(100% - 40px);
		margin: 0 auto;
		color: #c1c0c1;
	}

	.christmasEve {
		font-family: 'Belleza', sans-serif;
		font-size: clamp(60px, 7vw, 80px);
		line-height: 1.2;
		font-weight: 400;
		width: calc(100% - 40px);
		margin: 0 auto;
		color: #c6a05f;
	}

	.dateAndTime,
	.address {
		font-size: clamp(22px, 6vw, 45px);
		font-weight: 600;
		color: #c9c8c3;
	}

	.videoContainer {
		width: calc(100% - 40px);
		max-width: 600px;
		margin: 20px auto;
		aspect-ratio: 16/9;
	}

	.videoContainer iframe {
		width: 100%;
		height: 100%;
	}

	.playlist {
		font-size: clamp(18px, 2.5vw, 26px);
		font-weight: 600;
	}

	.playlist a {
		color: #ed1f24;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}

	.playlist a:hover {
		text-decoration: underline;
		opacity: 0.8;
	}

	.address a {
		color: #c9c8c3;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}

	.address a:hover {
		text-decoration: underline;
		opacity: 0.8;
	}

	.logoContainer {
		width: calc(100% - 40px);
		max-width: 300px;
		margin: 20px auto;
	}
</style>
