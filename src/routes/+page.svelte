<script>
	// Inline CSS using Svelte style block
	// Remove the image optimization import for now
</script>

<svelte:head>
	<title>Pavlos - A marketplace for all tasks that require intelligence</title>
	<!-- Preload hero image -->
	<link rel="preload" href="/hero.avif" as="image" />

	<!-- Preload main fonts -->
	<link
		rel="preload"
		href="/fonts/TestSöhne/TestSöhne-Buch.otf"
		as="font"
		type="font/otf"
		crossorigin
	/>
	<link
		rel="preload"
		href="/fonts/TestSöhne/TestSöhne-Halbfett.otf"
		as="font"
		type="font/otf"
		crossorigin
	/>
	<link
		rel="preload"
		href="/fonts/TestTiemposText/TestTiemposText-Regular.otf"
		as="font"
		type="font/otf"
		crossorigin
	/>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-content">
			<div class="hero-text">
				<h1>A marketplace for all tasks that require intelligence.</h1>
				<a href="mailto:hello@pavlosnetwork.com" class="btn-primary">
					Get in touch
					<img src="/upRight.svg" alt="Arrow" class="arrow-icon" />
				</a>
			</div>
			<div class="hero-image">
				<img src="/hero.avif" alt="Pavlos Network" />
			</div>
		</div>
	</section>

	<section class="network">
		<div class="container">
			<h2>The Pavlos Network</h2>
			<p>
				The Pavlos Network is an ecosystem where both human and AI efforts are coordinated
				transparently, fueled by incentives that promote collective innovation and more equitable
				access to intelligence. The network allows anyone in the world to perform jobs for fair
				payment, giving businesses frictionless access to a large workforce of dynamic intelligence.
			</p>

			<p>
				AI is open, decentralized, and accessible to everyone, fueling global collaboration,
				ensuring fair rewards, and driving sustainable innovation for the greater good. Trust and
				accountability are written into the system through smart contracts and on-chain payments,
				with efficiency and sustainability at the forefront.
			</p>
		</div>
	</section>

	<section class="community">
		<div class="container">
			<h2>A Community Driven Network</h2>
			<p>
				A reward system that promotes healthy collaboration in creating a self-incentivizing network
				for the betterment of AI and technology. Smart contracts for meaningful contributions,
				contribution opportunities, quantified growth, and fair governance all create a fair proving
				field for individuals and organizations, allowing them to benefit from their contributions
				to the network, and the network to benefit them.
			</p>
		</div>
	</section>

	<section class="workaround">
		<div class="container">
			<h2>Workaround on Pavlos</h2>
			<p>
				The most efficient economy is the gig economy. Requesters and workers can collaborate in
				unison to build solutions to problems of any size.
			</p>
			<p>
				The network connects requesters with capable intelligence that works transparently and
				accountably to solve any task.
			</p>
		</div>
	</section>

	<section class="proof">
		<div class="container">
			<h2>Proof of Excellence</h2>
			<p>
				In order to incentivize efficient behavior, meaningful demonstrations of excellence in
				knowledge, skill, or capability must be rewarded. Pavlos creates cryptographic challenges
				that participants can complete, which automatically qualifies them for jobs. The rewards are
				proportional to the challenge of the endeavors.
			</p>
		</div>
	</section>

	<section class="project">
		<div class="container">
			<h2>The Pavlos Project</h2>
			<p>
				We focus on January 2025, the week our vision for the Pavlos Network is due to come to life.
			</p>
		</div>
	</section>
</main>

<style>
	main {
		max-width: 100vw;
		overflow-x: hidden;
		position: relative;
	}

	.container {
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		padding: 0 20px;
		width: 100%;
		box-sizing: border-box;
	}

	h1 {
		font-size: 2.2rem;
		font-weight: 400;
		line-height: 1.3;
		margin-bottom: 2rem;
		max-width: 600px;
	}

	h2 {
		font-size: 1.8rem;
		font-weight: 400;
		margin-bottom: 1.5rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		max-width: 1600px;
	}

	section {
		padding: 2rem 0;
		justify-content: center;
		align-items: center;
	}

	/* Hero Section */
	.hero {
		min-height: 80vh;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding: 0;
	}

	.hero-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 20px;
		position: relative;
	}

	.hero-text {
		flex: 1;
		max-width: 550px;
		z-index: 2;
		padding-left: 40px;
	}

	.hero-text h1 {
		width: 100%;
		max-width: 100%;
	}

	.hero-image {
		position: relative;
		right: 0;
		width: 50%;
		display: flex;
		justify-content: flex-end;
		z-index: 1;
		overflow: hidden;
	}

	.hero-image img {
		max-width: 100%;
		height: auto;
		width: 100%;
		display: block;
		object-fit: contain;
		object-position: right center;
	}

	/* Force AVIF images to display properly */
	@supports (image-format: avif) {
		.hero-image img {
			object-fit: contain;
		}
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.7rem 1rem;
		min-width: 180px;
		border: 1px solid rgba(255, 255, 255, 0.8);
		color: #fff;
		text-decoration: none;
		font-size: 0.8rem;
		transition: all 0.3s ease;
		border-radius: 0;
		font-weight: 500;
	}

	.btn-primary:hover {
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}

	.arrow-icon {
		width: 16px;
		height: 16px;
		margin-left: 10px;
	}

	@media (min-width: 1440px) {
		.hero-content {
			max-width: 1400px;
			padding: 0 40px;
		}
	}

	@media (max-width: 1024px) {
		.hero-text {
			padding-left: 20px;
			max-width: 500px;
		}

		h1 {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		.hero {
			min-height: 60vh;
		}

		.hero-content {
			flex-direction: column;
			justify-content: center;
		}

		.hero-text {
			width: 100%;
			max-width: 100%;
			text-align: center;
			margin-bottom: 2rem;
			padding-left: 0;
		}

		.hero-image {
			display: none;
		}

		h1 {
			font-size: 1.8rem;
			margin-left: auto;
			margin-right: auto;
		}

		.btn-primary {
			margin: 0 auto;
		}

		section {
			padding: 1.5rem 0;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 1.6rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.container {
			padding: 0 15px;
		}
	}

	section .container p,
	section .container h2 {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
