import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductsContext } from "./contexts/productContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(item);
	};

	return (
		<ProductsContext.Provider value={{products, addItem}}>
		<div className="App">
			<Navigation />

				{/* Routes */}	
				<Route exact path="/">
					<Products />
				</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>

		{/* <div className="App">
			<Navigation cart={cart} />
			
			// Routes
			<Route exact path="/">
			<Products products={products} addItem={addItem} />
			</Route>
			
			<Route path="/cart">
			<ShoppingCart cart={cart} />
			</Route>
		</div> */}
		</div>
		</ProductsContext.Provider>
	);
}

export default App;
