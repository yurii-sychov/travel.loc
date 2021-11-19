import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="sychov.us.auth0.com"
			clientId="6hDWyxnI6zW6XcsPPJrif3S9iIsxR4qM"
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
