<script>
    import { resumeData } from '$lib/data';
</script>

<section id="contact" class="section">
	<div class="container">
		<h2 class="section-title"><span>04.</span> What's Next?</h2>

		<div class="content">
			<h1 class="title">Get In Touch</h1>
			<p>
				I'm currently looking for new opportunities, and my inbox is always open. Whether you have a
				question or just want to say hi, I'll try my best to get back to you!
			</p>

			<a href="mailto:{resumeData.personal.email}" class="btn btn-primary">Say Hello</a>
		</div>
	</div>
</section>

<style>
	.section {
		margin-bottom: 100px;
		padding-top: 100px;
	}

	.container {
		max-width: 600px;
		text-align: center;
	}

	.section-title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem; /* Differ from other sections */
		color: var(--primary-color);
		margin-bottom: 20px;
		font-family: monospace;
		font-weight: 400;
	}

	.section-title span {
		margin-right: 10px;
	}

	.title {
		font-size: clamp(40px, 5vw, 60px);
		color: var(--secondary-color);
		margin-bottom: 20px;
	}

	p {
		color: var(--text-color);
		font-size: 1.1rem;
		margin-bottom: 50px;
	}

	.btn-primary {
		padding: 1.25rem 1.75rem;
		font-size: 1rem;
	}
</style>
