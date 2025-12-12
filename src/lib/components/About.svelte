<script>
    import { resumeData } from '$lib/data';
</script>

<section id="about" class="section">
	<div class="container">
		<h2 class="section-title"><span>01.</span> About Me</h2>

		<div class="inner">
			<div class="text">
                {#each resumeData.personal.bio as paragraph}
				    <p>{@html paragraph}</p>
                {/each}
			</div>
			<div class="image">
				<!-- Placeholder for profile image -->
				<div class="img-wrapper">
					<div class="img-placeholder">RG</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-title {
		display: flex;
		align-items: center;
		font-size: clamp(26px, 5vw, 32px);
		color: var(--secondary-color);
		margin-bottom: 40px;
	}

	.section-title span {
		color: var(--primary-color);
		margin-right: 10px;
		font-family: monospace;
		font-size: clamp(20px, 4vw, 24px);
		font-weight: 400;
	}

	.section-title::after {
		content: '';
		display: block;
		width: 300px;
		height: 1px;
		background-color: #233554;
		margin-left: 20px;
	}

	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		gap: 50px;
	}

	p {
		margin-bottom: 15px;
		color: var(--text-color);
	}

	strong {
		color: var(--primary-color);
	}

	.img-wrapper {
		position: relative;
		width: 100%;
		max-width: 300px;
		aspect-ratio: 1;
		margin: 0 auto;
		border-radius: 4px;
		background-color: var(--primary-color);
	}

	.img-placeholder {
		width: 100%;
		height: 100%;
		background-color: var(--surface-color-light);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;
		font-weight: 700;
		color: var(--primary-color);
		border-radius: 4px;
		transition: var(--transition);
		transform: translate(-10px, -10px);
	}

	.img-wrapper:hover .img-placeholder {
		transform: translate(-5px, -5px);
	}

	@media (max-width: 768px) {
		.inner {
			display: block;
		}

		.image {
			margin-top: 50px;
		}

		.section-title::after {
			width: 100%;
		}
	}
</style>
