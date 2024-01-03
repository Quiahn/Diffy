import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<div class='header-title'>
					<p>Diffy</p>
				</div>
				<div class='header-links'>
					<a href="/" class={url == '/' && 'active'}>
						Home
					</a>
					<a href="/diff" class={url == '/diff' && 'active'}>
						Diff
					</a>
					<a href="/validate" class={url == '/validate' && 'active'}>
						Validate
					</a>
				</div>
			</nav>
		</header>
	);
}
