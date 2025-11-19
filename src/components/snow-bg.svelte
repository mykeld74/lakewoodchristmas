<script>
	function generateBoxShadow(count) {
		const shadows = [];
		for (let i = 0; i < count; i++) {
			const x = Math.random() * 1000 * 0.1;
			const y = Math.random() * 1000 * 0.1;
			const blur = 0;
			const spread = Math.random() * 50 * -0.01;
			shadows.push(`${x}vw ${y}vh ${blur} ${spread}rem #fff`);
		}
		return shadows.join(', ');
	}

	const s1 = generateBoxShadow(50);
	const s2 = generateBoxShadow(50);
	const s3 = generateBoxShadow(50);
</script>

<div class="wrapper">
	<div class="snow layer1 a" style="box-shadow: {s1}"></div>
	<div class="snow layer1" style="box-shadow: {s1}"></div>
	<div class="snow layer2 a" style="box-shadow: {s2}"></div>
	<div class="snow layer2" style="box-shadow: {s2}"></div>
	<div class="snow layer3 a" style="box-shadow: {s3}"></div>
	<div class="snow layer3" style="box-shadow: {s3}"></div>
</div>

<style>
	.wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: radial-gradient(farthest-corner at 30vw 20vh, #383838 1%, #101010 100%);
		z-index: -1;
	}

	.snow {
		border-radius: 50%;
		opacity: 0.8;
		position: absolute;
		top: -100vh;
		animation-name: fall;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.layer1 {
		width: 1rem;
		height: 1rem;
		filter: blur(1px);
		animation-duration: 10s;
	}

	.layer1.a {
		animation-delay: -5s;
	}

	.layer2 {
		width: 0.6rem;
		height: 0.6rem;
		filter: blur(2px);
		animation-duration: 16s;
	}

	.layer2.a {
		animation-delay: -8s;
	}

	.layer3 {
		width: 0.8rem;
		height: 0.8rem;
		filter: blur(6px);
		animation-duration: 12s;
	}

	.layer3.a {
		animation-delay: -3s;
	}

	@keyframes fall {
		100% {
			transform: translate3d(0, 200vh, 0);
		}
	}
</style>
