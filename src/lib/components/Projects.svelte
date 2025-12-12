<script>
    import { resumeData } from '$lib/data';
    const projects = resumeData.projects;
</script>

<section id="projects" class="section">
	<div class="container">
		<h2 class="section-title"><span>03.</span> Some Things I've Built</h2>

		<div class="projects-grid">
			{#each projects as project}
				<div class="project-card">
					<div class="card-header">
						<div class="folder-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-folder"
								><path
									d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
								></path></svg
							>
						</div>
						<div class="links">
							{#if project.links.github}
								<a
									href={project.links.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub Link"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-github"
										><path
											d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
										></path></svg
									>
								</a>
							{/if}
							{#if project.links.external}
								<a
									href={project.links.external}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="External Link"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-external-link"
										><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
										></path><polyline points="15 3 21 3 21 9"></polyline><line
											x1="10"
											y1="14"
											x2="21"
											y2="3"
										></line></svg
									>
								</a>
							{/if}
						</div>
					</div>

					<h3 class="project-title">{project.title}</h3>

					<div class="project-description">
						<p>{project.description}</p>
					</div>

					<ul class="project-tech-list">
						{#each project.tech as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			{/each}
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

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 15px;
	}

	.project-card {
		background-color: var(--surface-color-light);
		padding: 24px;
		border-radius: 4px;
		transition: var(--transition);
		height: 100%;
		display: flex;
		flex-direction: column;
		cursor: default;
		box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
	}

	.project-card:hover {
		transform: translateY(-7px);
		box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}

	.folder-icon {
		color: var(--primary-color);
	}

	.folder-icon svg {
		width: 40px;
		height: 40px;
	}

	.links {
		display: flex;
		gap: 10px;
	}

	.links a {
		color: var(--text-color);
	}

	.links a:hover {
		color: var(--primary-color);
	}

	.links svg {
		width: 20px;
		height: 20px;
	}

	.project-title {
		color: var(--secondary-color);
		font-size: 1.35rem;
		margin-bottom: 10px;
	}

	.project-description {
		color: var(--text-color);
		font-size: 17px;
		margin-bottom: 20px;
		flex-grow: 1;
	}

	.project-tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		margin-top: 20px;
		font-family: monospace;
		font-size: 12px;
		color: var(--text-color);
	}

	@media (max-width: 768px) {
		.section-title::after {
			width: 100%;
		}
	}
</style>
