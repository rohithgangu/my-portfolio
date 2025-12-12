<script>
	import { onMount } from 'svelte';
    import { resumeData } from '$lib/data';

	let isMenuOpen = false;
	let y = 0;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<svelte:window bind:scrollY={y} />

<header class:scrolled={y > 50}>
	<nav class="container">
		<a href="/" class="logo">RG<span>.</span></a>

		<div
			class="hamburger"
			on:click={toggleMenu}
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Enter' && toggleMenu()}
		>
			<span class:active={isMenuOpen}></span>
			<span class:active={isMenuOpen}></span>
			<span class:active={isMenuOpen}></span>
		</div>

		<ul class:active={isMenuOpen}>
			<li><a href="#about" on:click={closeMenu}>About</a></li>
			<li><a href="#skills" on:click={closeMenu}>Skills</a></li>
			<li><a href="#projects" on:click={closeMenu}>Projects</a></li>
			<li><a href="#contact" on:click={closeMenu}>Contact</a></li>
			<li>
				<a href={resumeData.personal.links.resume} class="btn btn-outline" target="_blank" rel="noopener noreferrer"
					>Resume</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 24px 0;
		z-index: 1000;
		transition: var(--transition);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	header.scrolled {
		padding: 16px 0;
		background: rgba(10, 10, 10, 0.85);
		box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary-color);
		z-index: 1001;
	}

	.logo span {
		color: var(--secondary-color);
	}

	ul {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	a {
		color: var(--secondary-color);
		font-size: 0.9rem;
		font-weight: 400;
	}

	a:hover {
		color: var(--primary-color);
	}

	a.btn-outline {
		padding: 8px 16px;
		border: 1px solid var(--primary-color);
		border-radius: 4px;
		color: var(--primary-color);
	}

	a.btn-outline:hover {
		background: rgba(100, 255, 218, 0.1);
	}

	.hamburger {
		display: none;
		cursor: pointer;
		z-index: 1001;
	}

	@media (max-width: 768px) {
		.hamburger {
			display: block;
			position: relative;
			width: 30px;
			height: 20px;
		}

		.hamburger span {
			display: block;
			position: absolute;
			height: 2px;
			width: 100%;
			background: var(--primary-color);
			transition: var(--transition);
		}

		.hamburger span:nth-child(1) {
			top: 0;
		}
		.hamburger span:nth-child(2) {
			top: 9px;
		}
		.hamburger span:nth-child(3) {
			top: 18px;
		}

		.hamburger span.active:nth-child(1) {
			transform: rotate(45deg);
			top: 9px;
		}

		.hamburger span.active:nth-child(2) {
			opacity: 0;
		}

		.hamburger span.active:nth-child(3) {
			transform: rotate(-45deg);
			top: 9px;
		}

		ul {
			position: fixed;
			top: 0;
			right: 0;
			width: 75%;
			height: 100vh;
			background: #112240;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transform: translateX(100%);
			transition: var(--transition);
			box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
		}

		ul.active {
			transform: translateX(0);
		}
	}
</style>
