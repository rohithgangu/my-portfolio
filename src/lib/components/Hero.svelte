<script>
	import { onMount } from 'svelte';
	import { resumeData } from '$lib/data';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<section id="hero" class="hero">
	<div class="container">
		<div class="content">
			<h1 class:visible>Hi, I'm <span class="highlight">{resumeData.personal.name}</span>.</h1>
			<h2 class:visible style="transition-delay: 0.1s">{resumeData.personal.tagline}</h2>
			<p class:visible style="transition-delay: 0.2s">
				{@html resumeData.personal.introduction}
			</p>
			<div class="cta-group" class:visible style="transition-delay: 0.3s">
				<a href="#projects" class="btn btn-primary">Check out my work!</a>
                <a href={resumeData.personal.links.resume} class="btn btn-outline" target="_blank" rel="noopener noreferrer">Resume</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 0;
	}

	.content {
		max-width: 800px;
	}

	h1 {
		font-size: clamp(40px, 8vw, 80px);
		margin-bottom: 10px;
		opacity: 0;
		transform: translateY(20px);
		transition: var(--transition);
		color: var(--white);
	}

	h2 {
		font-size: clamp(30px, 6vw, 60px);
		color: var(--text-color);
		margin-bottom: 20px;
		opacity: 0;
		transform: translateY(20px);
		transition: var(--transition);
	}

	p {
		max-width: 540px;
		font-size: 1.1rem;
		margin-bottom: 50px;
		color: var(--text-color);
		opacity: 0;
		transform: translateY(20px);
		transition: var(--transition);
	}

	.highlight {
		color: var(--primary-color);
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.cta-group {
		opacity: 0;
		transform: translateY(20px);
		transition: var(--transition);
	}

	.cta-group.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
