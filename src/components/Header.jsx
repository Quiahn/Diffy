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
					<a href="/404" class={url == '/404' && 'active'}>
						404
					</a>
				</div>
			</nav>
		</header>
	);
}
