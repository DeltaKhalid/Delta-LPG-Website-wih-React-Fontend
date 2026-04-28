import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/css/roofsie.css';
import './assets/css/roofsie-dark.css';
import './assets/css/roofsie-responsive.css';
import './assets/css/my.css';
import './assets/css/cart.css';

import App from './App.jsx';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</StrictMode>
);
