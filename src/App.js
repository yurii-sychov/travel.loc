import Navbar from './components/Navbar';
// import Carousel from './components/Carousel';
import Footer from './components/Footer';

import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
	return (
		<>
			<Navbar />
			{/* <Carousel /> */}
			<section className='content'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<LoginButton />
							<LogoutButton />
							<Profile />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<button onClick={() => logout({ returnTo: window.location.origin })}>
			Log Out
		</button>
	);
};

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(user, isAuthenticated, isLoading)
	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
};

export default App;
