import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const ShareLayout = () => {
	return (
		<div>
		<header>
				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to = 'movies'>Movies</NavLink>
				</nav>
			</header>
			<Suspense>
			<Outlet />
		</Suspense>
		</div>
	);
}

export default ShareLayout;