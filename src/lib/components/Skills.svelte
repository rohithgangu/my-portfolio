<script>
    import { resumeData } from '$lib/data';
</script>

<section id="skills" class="section">
	<div class="container">
		<h2 class="section-title"><span>02.</span> Skills & Technologies</h2>

		<div class="skills-grid">
			<div class="skill-category">
				<h3>Frontend</h3>
				<ul>
                    {#each resumeData.skills.frontend as skill}
					    <li>{skill}</li>
                    {/each}
				</ul>
			</div>

			<div class="skill-category">
				<h3>Backend</h3>
				<ul>
                    {#each resumeData.skills.backend as skill}
					    <li>{skill}</li>
                    {/each}
				</ul>
			</div>

            <div class="skill-category">
				<h3>Databases</h3>
				<ul>
                    {#each resumeData.skills.databases as skill}
					    <li>{skill}</li>
                    {/each}
				</ul>
			</div>

			<div class="skill-category">
				<h3>Tools & Others</h3>
				<ul>
                    {#each resumeData.skills.tools as skill}
					    <li>{skill}</li>
                    {/each}
				</ul>
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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.skill-category {
		background-color: var(--surface-color-light);
		padding: 24px;
		border-radius: 4px;
		transition: var(--transition);
		border: 1px solid transparent;
	}

	.skill-category:hover {
		transform: translateY(-5px);
		border-color: var(--primary-color);
	}

	h3 {
		color: var(--secondary-color);
		font-size: 1.2rem;
		margin-bottom: 20px;
		border-bottom: 1px solid #233554;
		padding-bottom: 10px;
	}

	ul {
		list-style: none;
	}

	li {
		position: relative;
		padding-left: 20px;
		margin-bottom: 10px;
		color: var(--text-color);
		font-family: monospace;
		font-size: 0.9rem;
	}

	li::before {
		content: '▹';
		position: absolute;
		left: 0;
		color: var(--primary-color);
	}

	@media (max-width: 768px) {
		.section-title::after {
			width: 100%;
		}
	}
</style>
