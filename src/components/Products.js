import React, { useContext } from 'react';

// Components
import Product from './Product';

// Contexts
import { ProductsContext } from "../contexts/productContext";

const Products = () => {

	const { products, addItem } = useContext(ProductsContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
